import { db } from "@/lib/db";

export async function userCreate(userId: string, email: string) {
  try {
    const user = await db.user.create({
      data: {
        id: userId,
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
