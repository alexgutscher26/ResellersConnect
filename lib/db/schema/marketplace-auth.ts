import { sql } from "drizzle-orm";
import { 
  text,
  timestamp,
  pgTable
} from "drizzle-orm/pg-core";

export const marketplaceAuth = pgTable('marketplace_auth', {
  id: text('id').primaryKey().default(sql`gen_random_uuid()`),
  userId: text('user_id').notNull(),
  marketplace: text('marketplace').notNull(),
  encryptedUsername: text('encrypted_username').notNull(),
  encryptedPassword: text('encrypted_password').notNull(),
  isConnected: text('is_connected').default('false').notNull(),
  lastVerified: timestamp('last_verified').defaultNow(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
