import { useState, useCallback } from 'react';
import { PoshmarkService } from '@/lib/marketplace/poshmark';
import { PoshmarkCredentials, PoshmarkListing, PoshmarkListingInput } from '@/types/marketplace';
import { useToast } from '@/components/ui/use-toast';

export function usePoshmark() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();
  const poshmarkService = PoshmarkService.getInstance();

  const handleError = useCallback((error: Error, message: string) => {
    setError(error);
    toast({
      title: 'Error',
      description: message,
      variant: 'destructive',
    });
  }, [toast]);

  const login = useCallback(async (credentials: PoshmarkCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await poshmarkService.login(credentials);
      if (success) {
        toast({
          title: 'Success',
          description: 'Successfully logged in to Poshmark',
        });
      }
      return success;
    } catch (err) {
      handleError(err as Error, 'Failed to login to Poshmark');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [poshmarkService, handleError, toast]);

  const createListing = useCallback(async (listing: PoshmarkListingInput) => {
    setIsLoading(true);
    setError(null);
    try {
      const newListing = await poshmarkService.createListing(listing);
      toast({
        title: 'Success',
        description: 'Successfully created Poshmark listing',
      });
      return newListing;
    } catch (err) {
      handleError(err as Error, 'Failed to create Poshmark listing');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [poshmarkService, handleError, toast]);

  const updateListing = useCallback(async (listingId: string, updates: Partial<PoshmarkListingInput>) => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedListing = await poshmarkService.updateListing(listingId, updates);
      toast({
        title: 'Success',
        description: 'Successfully updated Poshmark listing',
      });
      return updatedListing;
    } catch (err) {
      handleError(err as Error, 'Failed to update Poshmark listing');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [poshmarkService, handleError, toast]);

  const deleteListing = useCallback(async (listingId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await poshmarkService.deleteListing(listingId);
      if (success) {
        toast({
          title: 'Success',
          description: 'Successfully deleted Poshmark listing',
        });
      }
      return success;
    } catch (err) {
      handleError(err as Error, 'Failed to delete Poshmark listing');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [poshmarkService, handleError, toast]);

  const getListing = useCallback(async (listingId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      return await poshmarkService.getListing(listingId);
    } catch (err) {
      handleError(err as Error, 'Failed to get Poshmark listing');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [poshmarkService, handleError]);

  const getAllListings = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      return await poshmarkService.getAllListings();
    } catch (err) {
      handleError(err as Error, 'Failed to get Poshmark listings');
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [poshmarkService, handleError]);

  return {
    isLoading,
    error,
    login,
    createListing,
    updateListing,
    deleteListing,
    getListing,
    getAllListings,
  };
}
