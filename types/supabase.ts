export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          id: string
          created_at: string
          email: string
          name: string | null
          avatar_url: string | null
          updated_at: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          stripe_price_id: string | null
          stripe_current_period_end: string | null
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          name?: string | null
          avatar_url?: string | null
          updated_at?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          stripe_price_id?: string | null
          stripe_current_period_end?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          name?: string | null
          avatar_url?: string | null
          updated_at?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          stripe_price_id?: string | null
          stripe_current_period_end?: string | null
        }
      }
      listings: {
        Row: {
          id: string
          created_at: string
          user_id: string
          title: string
          description: string | null
          price: number
          status: string
          platform: string
          category: string | null
          condition: string | null
          brand: string | null
          size: string | null
          color: string | null
          images: string[] | null
          tags: string[] | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          title: string
          description?: string | null
          price: number
          status: string
          platform: string
          category?: string | null
          condition?: string | null
          brand?: string | null
          size?: string | null
          color?: string | null
          images?: string[] | null
          tags?: string[] | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          title?: string
          description?: string | null
          price?: number
          status?: string
          platform?: string
          category?: string | null
          condition?: string | null
          brand?: string | null
          size?: string | null
          color?: string | null
          images?: string[] | null
          tags?: string[] | null
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
      [_ in never]: never
    }
  }
}
