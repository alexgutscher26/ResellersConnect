import { prisma } from "../prisma";
import { encrypt, decrypt } from "../encryption";
import { Platform } from "@prisma/client";

export interface MarketplaceCredentials {
  username: string;
  password: string;
}

export interface StoredCredentials extends MarketplaceCredentials {
  isConnected: boolean;
  lastVerified: Date;
}

export class MarketplaceAuthService {
  static removeCredentials: any;
  static async storeCredentials(
    clerkId: string,
    marketplace: string,
    credentials: MarketplaceCredentials
  ) {
    try {
      if (!clerkId || !marketplace || !credentials?.username || !credentials?.password) {
        throw new Error('Missing required parameters');
      }

      // Validate clerkId format
      if (!clerkId.startsWith('user_') || clerkId.length < 6) {
        throw new Error('Invalid clerkId format');
      }

      // Get the user's UUID from their clerkId
      const user = await prisma.user.findUnique({
        where: { clerkId },
        select: { id: true }
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Normalize and validate marketplace
      const platform = marketplace.toUpperCase() as Platform;
      if (!Object.values(Platform).includes(platform)) {
        throw new Error(`Invalid marketplace: ${marketplace}`);
      }

      const encryptedUsername = encrypt(credentials.username);
      const encryptedPassword = encrypt(credentials.password);
      
      const result = await prisma.marketplaceAuth.upsert({
        where: {
          userId_platform: {
            userId: user.id,
            platform,
          },
        },
        create: {
          userId: user.id,
          platform,
          encryptedUsername,
          encryptedPassword,
          isActive: true,
          lastSync: new Date(),
        },
        update: {
          encryptedUsername,
          encryptedPassword,
          isActive: true,
          lastSync: new Date(),
        },
      });

      if (!result) {
        throw new Error('Failed to store marketplace credentials');
      }

      return {
        username: credentials.username,
        password: credentials.password,
        isConnected: result.isActive,
        lastVerified: result.lastSync,
      };
    } catch (error) {
      console.error('Failed to store marketplace credentials:', error);
      throw error;
    }
  }

  static async getCredentials(
    clerkId: string,
    marketplace: string
  ): Promise<StoredCredentials | null> {
    try {
      if (!clerkId || !marketplace) {
        throw new Error('Missing required parameters');
      }

      // Get the user's UUID from their clerkId
      const user = await prisma.user.findUnique({
        where: { clerkId },
        select: { id: true }
      });

      if (!user) {
        throw new Error('User not found');
      }

      const platform = marketplace.toUpperCase() as Platform;
      if (!Object.values(Platform).includes(platform)) {
        throw new Error(`Invalid marketplace: ${marketplace}`);
      }

      const auth = await prisma.marketplaceAuth.findUnique({
        where: {
          userId_platform: {
            userId: user.id,
            platform,
          },
        },
      });

      if (!auth || !auth.encryptedUsername || !auth.encryptedPassword) {
        return null;
      }

      return {
        username: decrypt(auth.encryptedUsername),
        password: decrypt(auth.encryptedPassword),
        isConnected: auth.isActive,
        lastVerified: auth.lastSync || new Date(),
      };
    } catch (error) {
      console.error('Failed to get marketplace credentials:', error);
      throw error;
    }
  }

  static async deleteCredentials(clerkId: string, marketplace: string) {
    try {
      if (!clerkId || !marketplace) {
        throw new Error('Missing required parameters');
      }

      // Get the user's UUID from their clerkId
      const user = await prisma.user.findUnique({
        where: { clerkId },
        select: { id: true }
      });

      if (!user) {
        throw new Error('User not found');
      }

      const platform = marketplace.toUpperCase() as Platform;
      if (!Object.values(Platform).includes(platform)) {
        throw new Error(`Invalid marketplace: ${marketplace}`);
      }

      await prisma.marketplaceAuth.delete({
        where: {
          userId_platform: {
            userId: user.id,
            platform,
          },
        },
      });
    } catch (error) {
      console.error('Failed to delete marketplace credentials:', error);
      throw error;
    }
  }

  static async listConnectedMarketplaces(clerkId: string) {
    try {
      if (!clerkId) {
        throw new Error('Missing required parameter: clerkId');
      }

      // Get the user's UUID from their clerkId
      const user = await prisma.user.findUnique({
        where: { clerkId },
        select: { id: true }
      });

      if (!user) {
        throw new Error('User not found');
      }

      const auths = await prisma.marketplaceAuth.findMany({
        where: {
          userId: user.id,
          isActive: true,
        },
        select: {
          platform: true,
          lastSync: true,
        },
      });

      return auths.map(auth => ({
        marketplace: auth.platform.toLowerCase(),
        lastSync: auth.lastSync,
      }));
    } catch (error) {
      console.error('Failed to list connected marketplaces:', error);
      throw error;
    }
  }
}
