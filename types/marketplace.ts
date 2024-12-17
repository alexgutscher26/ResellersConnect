import { z } from "zod";

// Poshmark specific types
export interface PoshmarkCredentials {
  username: string;
  password: string;
}

export interface PoshmarkListing {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  size?: string;
  brand?: string;
  color?: string;
  condition?: string;
  images: string[];
  status: 'active' | 'sold' | 'draft';
  createdAt: Date;
  updatedAt: Date;
}

// Zod schema for validation
export const poshmarkListingSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(80),
  description: z.string().min(1).max(1000),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  category: z.string(),
  subcategory: z.string().optional(),
  size: z.string().optional(),
  brand: z.string().optional(),
  color: z.string().optional(),
  condition: z.string().optional(),
  images: z.array(z.string()).min(1).max(16),
  status: z.enum(['active', 'sold', 'draft']),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PoshmarkListingInput = z.infer<typeof poshmarkListingSchema>;
