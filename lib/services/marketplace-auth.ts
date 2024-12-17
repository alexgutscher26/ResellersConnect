import { prisma } from "../prisma";
import { encrypt, decrypt } from "../encryption";

export interface MarketplaceCredentials {
  username: string;
  password: string;
}

export interface StoredCredentials extends MarketplaceCredentials {
  isConnected: boolean;
  lastVerified: Date;
}

export class MarketplaceAuthService {
  static async storeCredentials(
    userId: string,
    marketplace: string,
    credentials: MarketplaceCredentials
  ) {
    try {
      const encryptedUsername = encrypt(credentials.username);
      const encryptedPassword = encrypt(credentials.password);
      
      const result = await prisma.marketplaceAuths.upsert({
        where: {
          userId_marketplace: {
            userId,
            marketplace,
          },
        },
        create: {
          userId,
          marketplace,
          encryptedUsername,
          encryptedPassword,
          isConnected: true,
          lastVerified: new Date(),
        },
        update: {
          encryptedUsername,
          encryptedPassword,
          isConnected: true,
          lastVerified: new Date(),
        },
      });

      return result;
    } catch (error) {
      console.error('Error storing credentials:', error);
      throw error;
    }
  }

  static async getCredentials(
    userId: string,
    marketplace: string
  ): Promise<StoredCredentials | null> {
    try {
      const stored = await prisma.marketplaceAuths.findUnique({
        where: {
          userId_marketplace: {
            userId,
            marketplace,
          },
        },
      });

      if (!stored) {
        return null;
      }

      return {
        username: decrypt(stored.encryptedUsername),
        password: decrypt(stored.encryptedPassword),
        isConnected: stored.isConnected,
        lastVerified: stored.lastVerified,
      };
    } catch (error) {
      console.error('Error getting credentials:', error);
      throw error;
    }
  }

  static async removeCredentials(userId: string, marketplace: string) {
    try {
      await prisma.marketplaceAuths.update({
        where: {
          userId_marketplace: {
            userId,
            marketplace,
          },
        },
        data: {
          isConnected: false,
          lastVerified: new Date(),
        },
      });

      return true;
    } catch (error) {
      console.error('Error removing credentials:', error);
      throw error;
    }
  }

  static async isConnected(userId: string, marketplace: string): Promise<boolean> {
    try {
      const stored = await prisma.marketplaceAuths.findUnique({
        where: {
          userId_marketplace: {
            userId,
            marketplace,
          },
        },
      });

      return stored?.isConnected ?? false;
    } catch (error) {
      console.error('Error checking connection status:', error);
      return false;
    }
  }
}
