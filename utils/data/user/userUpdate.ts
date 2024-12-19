import { prisma } from "@/lib/prisma";

interface UserUpdateData {
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  gender?: string | null;
  profile_image_url?: string | null;
  subscription?: string | null;
}

export async function userUpdate(userId: string, data: UserUpdateData) {
  try {
    // Filter out null values from the data
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== null)
    ) as Omit<UserUpdateData, keyof UserUpdateData> & { [K in keyof UserUpdateData]: string };

    const user = await prisma.user.update({
      where: {
        user_id: userId,
      },
      data: filteredData,
    });
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
