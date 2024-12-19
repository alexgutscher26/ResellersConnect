import { userCreate } from "@/utils/data/user/userCreate";
import { userUpdate } from "@/utils/data/user/userUpdate";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  switch (eventType) {
    case "user.created":
      try {
        await userCreate(
          evt.data.id as string,
          evt.data.email_addresses?.[0]?.email_address as string
        );
        return NextResponse.json({ message: "User created" }, { status: 201 });
      } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
          { error: "Error creating user" },
          { status: 500 }
        );
      }

    case "user.updated":
      try {
        await userUpdate(evt.data.id as string, {
          email: evt.data.email_addresses?.[0]?.email_address || undefined,
          firstName: evt.data.first_name || undefined,
          lastName: evt.data.last_name || undefined,
        });
        return NextResponse.json({ message: "User updated" }, { status: 200 });
      } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json(
          { error: "Error updating user" },
          { status: 500 }
        );
      }

    default:
      return new Response("Error occurred -- unhandled event type", {
        status: 400,
      });
  }
}
