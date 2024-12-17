-- Create marketplace_auth table
CREATE TABLE IF NOT EXISTS marketplace_auth (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    marketplace TEXT NOT NULL,
    encrypted_username TEXT NOT NULL,
    encrypted_password TEXT NOT NULL,
    is_connected TEXT NOT NULL DEFAULT 'false',
    last_verified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_marketplace_auth_user_id ON marketplace_auth(user_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_auth_marketplace ON marketplace_auth(marketplace);
CREATE UNIQUE INDEX IF NOT EXISTS idx_marketplace_auth_user_marketplace ON marketplace_auth(user_id, marketplace);

-- Add comment
COMMENT ON TABLE marketplace_auth IS 'Stores encrypted marketplace credentials for users';
