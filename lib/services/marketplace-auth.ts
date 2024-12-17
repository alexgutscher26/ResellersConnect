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
    console.log('Storing credentials for:', { userId, marketplace });
    
    try {
      const encryptedUsername = encrypt(credentials.username);
      const encryptedPassword = encrypt(credentials.password);

      console.log('Attempting to upsert credentials');
      
      // Upsert the credentials (update if exists, create if not)
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

      console.log('Credentials stored successfully:', { id: result.id });
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
    console.log('Getting credentials for:', { userId, marketplace });
    
    try {
      const stored = await prisma.marketplaceAuths.findUnique({
        where: {
          userId_marketplace: {
            userId,
            marketplace,
          },
        },
      });

      console.log('Retrieved credentials:', { found: !!stored });

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

  static async updateConnectionStatus(
    userId: string,
    marketplace: string,
    isConnected: boolean
  ) {
    console.log('Updating connection status:', { userId, marketplace, isConnected });
    
    try {
      const result = await prisma.marketplaceAuths.update({
        where: {
          userId_marketplace: {
            userId,
            marketplace,
          },
        },
        data: {
          isConnected,
          lastVerified: new Date(),
        },
      });

      console.log('Connection status updated successfully:', { id: result.id });
      return result;
    } catch (error) {
      console.error('Error updating connection status:', error);
      throw error;
    }
  }

  static async removeCredentials(userId: string, marketplace: string) {
    console.log('Removing credentials for:', { userId, marketplace });
    
    try {
      const result = await prisma.marketplaceAuths.delete({
        where: {
          userId_marketplace: {
            userId,
            marketplace,
          },
        },
      });

      console.log('Credentials removed successfully:', { id: result.id });
      return result;
    } catch (error) {
      console.error('Error removing credentials:', error);
      throw error;
    }
  }
}
