import { PoshmarkCredentials, PoshmarkListing, PoshmarkListingInput } from "@/types/marketplace";

export class PoshmarkService {
  private static instance: PoshmarkService;
  private extensionId: string = process.env.NEXT_PUBLIC_POSHMARK_EXTENSION_ID || '';

  private constructor() {}

  public static getInstance(): PoshmarkService {
    if (!PoshmarkService.instance) {
      PoshmarkService.instance = new PoshmarkService();
    }
    return PoshmarkService.instance;
  }

  private async sendMessageToExtension(message: any): Promise<any> {
    if (typeof chrome === 'undefined' || !chrome.runtime?.sendMessage) {
      throw new Error('Chrome extension API not available');
    }

    try {
      return await chrome.runtime.sendMessage(this.extensionId, message);
    } catch (error) {
      console.error('Error communicating with Poshmark extension:', error);
      throw error;
    }
  }

  async login(credentials: PoshmarkCredentials): Promise<boolean> {
    try {
      const response = await this.sendMessageToExtension({
        type: 'LOGIN',
        payload: credentials
      });
      return response.success;
    } catch (error) {
      console.error('Failed to login to Poshmark:', error);
      throw error;
    }
  }

  async createListing(listing: PoshmarkListingInput): Promise<PoshmarkListing> {
    try {
      const response = await this.sendMessageToExtension({
        type: 'CREATE_LISTING',
        payload: listing
      });
      return response.listing;
    } catch (error) {
      console.error('Failed to create Poshmark listing:', error);
      throw error;
    }
  }

  async updateListing(listingId: string, updates: Partial<PoshmarkListingInput>): Promise<PoshmarkListing> {
    try {
      const response = await this.sendMessageToExtension({
        type: 'UPDATE_LISTING',
        payload: {
          listingId,
          updates
        }
      });
      return response.listing;
    } catch (error) {
      console.error('Failed to update Poshmark listing:', error);
      throw error;
    }
  }

  async deleteListing(listingId: string): Promise<boolean> {
    try {
      const response = await this.sendMessageToExtension({
        type: 'DELETE_LISTING',
        payload: { listingId }
      });
      return response.success;
    } catch (error) {
      console.error('Failed to delete Poshmark listing:', error);
      throw error;
    }
  }

  async getListing(listingId: string): Promise<PoshmarkListing> {
    try {
      const response = await this.sendMessageToExtension({
        type: 'GET_LISTING',
        payload: { listingId }
      });
      return response.listing;
    } catch (error) {
      console.error('Failed to get Poshmark listing:', error);
      throw error;
    }
  }

  async getAllListings(): Promise<PoshmarkListing[]> {
    try {
      const response = await this.sendMessageToExtension({
        type: 'GET_ALL_LISTINGS'
      });
      return response.listings;
    } catch (error) {
      console.error('Failed to get all Poshmark listings:', error);
      throw error;
    }
  }
}
