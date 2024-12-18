import { db } from "@/lib/db";

export async function userUpdate(userId: string, data: any) {
  try {
    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: data,
    });
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
