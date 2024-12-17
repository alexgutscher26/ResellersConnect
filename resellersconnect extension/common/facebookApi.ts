import ErrorUtil from "../utils/ErrorUtil";
import { extensionActions } from "./constants";
import { errorMessages, handleConnectionIssue } from "./errorMessages";

type SendResponse = (
  payload:
    | { type: "success"; [key: string]: any }
    | { type: "failed"; errorMessage: string; error?: any }
) => void;

export const createFacebookAsyncPromise =
  (sendResponse: SendResponse) => (body: () => Promise<any>) => {
    body()
      .then((result) =>
        sendResponse({
          type: "success",
          ...(Array.isArray(result) ? { data: result } : result),
        })
      )
      .catch(async (error) => {
        sendResponse({
          type: "failed",
          errorMessage: handleConnectionIssue("facebook.com"),
          error,
        });
        ErrorUtil.capture(error);
      });
  };

export const getUserFacebookDetails = async () =>
  await fetch("https://www.facebook.com/marketplace/create/item")
    .then(async (response) => {
      const text = await response.text();

      const parseTextResponse = (text: string) => {
        let email = "";
        let username = "";
        let id = "";
        let uid = "";
        let token = "";
        let tokenOld = "";

        if (text && text.length > 0) {
          username = (text.match(/"NAME"\s*:\s*"([^"]+)"/) || [])[1] || "";
          id = (text.match(/"USER_ID"\s*:\s*"([^"]{2,})"/i) || [])[1] || "";
          token = (text.match(/"f"\s*:\s*"([^"]{2,})"/i) || [])[1] || "";
          tokenOld = (text.match(/"token"\s*:\s*"([^"]{2,})"/i) || [])[1] || "";
        }

        return {
          email,
          username,
          id,
          uid,
          token,
          tokenOld,
        };
      };

      const { id, email, username, token } = parseTextResponse(text);

      return {
        message: extensionActions.FACEBOOK.CHECK_USER_DETAILS,
        id,
        email,
        username,
        token,
      };
    })
    .catch(async (error) => {
      console.error(error);
      ErrorUtil.capture(error);
      throw error;
    });

export const uploadImagesToFacebook = async (
  imageUrls: {
    uid: string;
    url: string;
    name: string;
  }[]
) => {
  const { id: facebookUserId, token: authToken } =
    await getUserFacebookDetails();

  if (!facebookUserId || !authToken) {
    throw new Error("Could not get user");
  }

  const images: Blob[] = await Promise.all(
    imageUrls.map((imageUrl) =>
      fetch(imageUrl.url).then((response) => response.blob())
    )
  );

  type ImageUploadResponse = {
    __ar: 1;
    payload: {
      isSpherical: boolean;
      height: number;
      imageSrc: string;
      mediaLocation: null;
      originalPhotoID: "";
      photoID: string;
      sphericalPhotoID: "";
      thumbSrc: string;
      width: number;
      mediaTakenTime: number;
    };
    hsrp: { hblp: { consistency: { rev: number } } };
    lid: string;
  };

  const uploadedImages: ImageUploadResponse[] = [];

  for (const file of images) {
    const form = new FormData();
    form.append("farr", file);
    form.append("source", "8");

    const uploadResult: ImageUploadResponse = await fetch(
      `https://upload.facebook.com/ajax/react_composer/attachments/photo/upload?fb_dtsg=${authToken}&__a=1`,
      {
        method: "POST",
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
        },
        body: form,
      }
    )
      .then((response) => response.text())
      .then((response) => JSON.parse(response.replace(/[^{]+{/, "{")))
      .catch((err) => console.error(err));

    uploadedImages.push(uploadResult);
  }

  return uploadedImages.map((image) => image.payload.photoID);
};
