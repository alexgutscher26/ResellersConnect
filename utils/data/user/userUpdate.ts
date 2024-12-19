import { prisma } from "@/lib/prisma";
import { SubscriptionStatus } from "@prisma/client";

interface UserUpdateData {
  email?: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
  stripeId?: string;
  subscriptionId?: string;
  subscriptionStatus?: SubscriptionStatus;
  subscriptionEndDate?: Date;
}

export async function userUpdate(userId: string, data: Partial<UserUpdateData>) {
  try {
    // Filter out undefined values from the data
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined)
    ) as UserUpdateData;

    const user = await prisma.user.update({
      where: {
        clerkId: userId,
      },
      data: filteredData,
    });
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
