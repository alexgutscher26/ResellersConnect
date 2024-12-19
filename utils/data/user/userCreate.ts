import { prisma } from "@/lib/prisma";

export async function userCreate(userId: string, email: string) {
  try {
    const user = await prisma.user.create({
      data: {
        user_id: userId,
        email: email,
        created_time: new Date(),
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
