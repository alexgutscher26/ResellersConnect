import { z } from "zod";
import { Platform, type Condition } from "./supabase";

// Common types
export const listingStatusSchema = z.enum(['active', 'sold', 'draft', 'deleted']);
export type ListingStatus = z.infer<typeof listingStatusSchema>;

export const platformSchema = z.enum(['poshmark', 'ebay', 'mercari', 'facebook', 'depop', 'bonanza']);
export type MarketplacePlatform = z.infer<typeof platformSchema>;

export const conditionSchema = z.enum([
  'new_with_tags',
  'new_without_tags',
  'very_good',
  'good',
  'fair'
]);
export type ListingCondition = z.infer<typeof conditionSchema>;

// Base marketplace types
export interface BaseCredentials {
  platform: Platform;
  isActive: boolean;
  lastSync?: Date;
}

export const baseListingSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(80),
  description: z.string().min(1).max(3000),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  category: z.string(),
  subcategory: z.string().optional(),
  size: z.string().optional(),
  brand: z.string().optional(),
  color: z.string().optional(),
  condition: conditionSchema.optional(),
  images: z.array(z.string().url()).min(1).max(16),
  status: listingStatusSchema,
  metadata: z.record(z.string(), z.any()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type BaseListing = z.infer<typeof baseListingSchema>;

// Poshmark specific types
export interface PoshmarkCredentials extends BaseCredentials {
  platform: Platform.POSHMARK;
  username: string;
  password: string;
  closetName?: string;
}

export const poshmarkListingSchema = baseListingSchema.extend({
  platform: z.literal(Platform.POSHMARK),
  department: z.string().optional(),
  style: z.array(z.string()).optional(),
  posherSize: z.string().optional(),
  originalRetailPrice: z.number().positive().optional(),
  listingUrl: z.string().url().optional(),
});

export type PoshmarkListing = z.infer<typeof poshmarkListingSchema>;

// eBay specific types
export interface EbayCredentials extends BaseCredentials {
  platform: Platform.EBAY;
  authToken: string;
  refreshToken: string;
  expiresAt: Date;
}

export const ebayListingSchema = baseListingSchema.extend({
  platform: z.literal(Platform.EBAY),
  itemSpecifics: z.record(z.string(), z.string()).optional(),
  gtin: z.string().optional(),
  mpn: z.string().optional(),
  shippingOptions: z.array(z.object({
    service: z.string(),
    cost: z.number(),
  })).optional(),
  listingUrl: z.string().url().optional(),
});

export type EbayListing = z.infer<typeof ebayListingSchema>;

// Mercari specific types
export interface MercariCredentials extends BaseCredentials {
  platform: Platform.MERCARI;
  authToken: string;
  deviceId: string;
}

export const mercariListingSchema = baseListingSchema.extend({
  platform: z.literal(Platform.MERCARI),
  shippingPayer: z.enum(['seller', 'buyer']).optional(),
  shippingMethod: z.string().optional(),
  listingUrl: z.string().url().optional(),
});

export type MercariListing = z.infer<typeof mercariListingSchema>;

// Depop specific types
export interface DepopCredentials extends BaseCredentials {
  platform: Platform.DEPOP;
  authToken: string;
  username: string;
}

export const depopListingSchema = baseListingSchema.extend({
  platform: z.literal(Platform.DEPOP),
  style: z.array(z.string()).optional(),
  source: z.string().optional(),
  listingUrl: z.string().url().optional(),
});

export type DepopListing = z.infer<typeof depopListingSchema>;

// Facebook Marketplace specific types
export interface FacebookCredentials extends BaseCredentials {
  platform: Platform.FACEBOOK;
  accessToken: string;
  pageId: string;
}

export const facebookListingSchema = baseListingSchema.extend({
  platform: z.literal(Platform.FACEBOOK),
  availability: z.enum(['in_stock', 'out_of_stock']).optional(),
  listingUrl: z.string().url().optional(),
});

export type FacebookListing = z.infer<typeof facebookListingSchema>;

// Bonanza specific types
export interface BonanzaCredentials extends BaseCredentials {
  platform: Platform.BONANZA;
  apiKey: string;
  apiSecret: string;
  username: string;
}

export const bonanzaListingSchema = baseListingSchema.extend({
  platform: z.literal(Platform.BONANZA),
  boothId: z.string().optional(),
  itemSpecifics: z.record(z.string(), z.string()).optional(),
  shippingOptions: z.array(z.object({
    service: z.string(),
    cost: z.number(),
  })).optional(),
  listingUrl: z.string().url().optional(),
});

export type BonanzaListing = z.infer<typeof bonanzaListingSchema>;

// Union types for all platforms
export type MarketplaceCredentials =
  | PoshmarkCredentials
  | EbayCredentials
  | MercariCredentials
  | DepopCredentials
  | FacebookCredentials
  | BonanzaCredentials;

export type MarketplaceListing =
  | PoshmarkListing
  | EbayListing
  | MercariListing
  | DepopListing
  | FacebookListing
  | BonanzaListing;

// Helper type for platform-specific metadata
export type PlatformMetadata<T extends Platform> = T extends 'poshmark'
  ? PoshmarkListing['metadata']
  : T extends 'ebay'
  ? EbayListing['metadata']
  : T extends 'mercari'
  ? MercariListing['metadata']
  : T extends 'depop'
  ? DepopListing['metadata']
  : T extends 'facebook'
  ? FacebookListing['metadata']
  : T extends 'bonanza'
  ? BonanzaListing['metadata']
    : never;
