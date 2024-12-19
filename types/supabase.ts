export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// Enums
export enum ListingStatus {
  DRAFT = "draft",
  ACTIVE = "active",
  SOLD = "sold",
  DELETED = "deleted"
}

export enum Platform {
  EBAY = "ebay",
  POSHMARK = "poshmark",
  MERCARI = "mercari",
  FACEBOOK = "facebook",
  DEPOP = "depop",
  BONANZA = "bonanza"
}

export enum Condition {
  NEW_WITH_TAGS = "new_with_tags",
  NEW_WITHOUT_TAGS = "new_without_tags",
  VERY_GOOD = "very_good",
  GOOD = "good",
  FAIR = "fair"
}

// Utility Types
export type Timestamp = string;
export type UUID = string;

// Table Types
export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          id: UUID
          created_at: Timestamp
          updated_at: Timestamp
          email: string
          name: string | null
          avatar_url: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          stripe_price_id: string | null
          stripe_current_period_end: Timestamp | null
          settings: Json | null
        }
        Insert: {
          id: UUID
          created_at?: Timestamp
          updated_at?: Timestamp
          email: string
          name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          stripe_price_id?: string | null
          stripe_current_period_end?: Timestamp | null
          settings?: Json | null
        }
        Update: {
          id?: UUID
          created_at?: Timestamp
          updated_at?: Timestamp
          email?: string
          name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          stripe_price_id?: string | null
          stripe_current_period_end?: Timestamp | null
          settings?: Json | null
        }
      }
      listings: {
        Row: {
          id: UUID
          created_at: Timestamp
          updated_at: Timestamp
          user_id: UUID
          title: string
          description: string | null
          price: number
          status: ListingStatus
          platform: Platform
          category: string | null
          condition: Condition | null
          brand: string | null
          size: string | null
          color: string | null
          images: string[] | null
          tags: string[] | null
          metadata: Json | null
          platform_listing_id: string | null
          platform_url: string | null
          sold_date: Timestamp | null
          sold_price: number | null
        }
        Insert: {
          id?: UUID
          created_at?: Timestamp
          updated_at?: Timestamp
          user_id: UUID
          title: string
          description?: string | null
          price: number
          status?: ListingStatus
          platform: Platform
          category?: string | null
          condition?: Condition | null
          brand?: string | null
          size?: string | null
          color?: string | null
          images?: string[] | null
          tags?: string[] | null
          metadata?: Json | null
          platform_listing_id?: string | null
          platform_url?: string | null
          sold_date?: Timestamp | null
          sold_price?: number | null
        }
        Update: {
          id?: UUID
          created_at?: Timestamp
          updated_at?: Timestamp
          user_id?: UUID
          title?: string
          description?: string | null
          price?: number
          status?: ListingStatus
          platform?: Platform
          category?: string | null
          condition?: Condition | null
          brand?: string | null
          size?: string | null
          color?: string | null
          images?: string[] | null
          tags?: string[] | null
          metadata?: Json | null
          platform_listing_id?: string | null
          platform_url?: string | null
          sold_date?: Timestamp | null
          sold_price?: number | null
        }
      }
      platform_credentials: {
        Row: {
          id: UUID
          created_at: Timestamp
          updated_at: Timestamp
          user_id: UUID
          platform: Platform
          credentials: Json
          is_active: boolean
          last_sync: Timestamp | null
        }
        Insert: {
          id?: UUID
          created_at?: Timestamp
          updated_at?: Timestamp
          user_id: UUID
          platform: Platform
          credentials: Json
          is_active?: boolean
          last_sync?: Timestamp | null
        }
        Update: {
          id?: UUID
          created_at?: Timestamp
          updated_at?: Timestamp
          user_id?: UUID
          platform?: Platform
          credentials?: Json
          is_active?: boolean
          last_sync?: Timestamp | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      listing_status: ListingStatus
      platform: Platform
      condition: Condition
    }
  }
}
