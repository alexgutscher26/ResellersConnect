import crypto from 'crypto';

// Constants
const IV_LENGTH = 16;
const SALT_LENGTH = 32;
const KEY_LENGTH = 32;
const ITERATIONS = 100000;
const DIGEST = 'sha256';
const ENCRYPTION_ALGORITHM = 'aes-256-gcm';
const AUTH_TAG_LENGTH = 16;

function getEncryptionKey(salt: Buffer): Buffer {
  const key = process.env.ENCRYPTION_KEY;
  if (!key) {
    throw new Error('ENCRYPTION_KEY environment variable must be set');
  }
  
  // Use PBKDF2 to derive a secure key
  return crypto.pbkdf2Sync(key, salt, ITERATIONS, KEY_LENGTH, DIGEST);
}

export function encrypt(text: string): string {
  // Generate a random IV and salt
  const iv = crypto.randomBytes(IV_LENGTH);
  const salt = crypto.randomBytes(SALT_LENGTH);
  
  // Get encryption key
  const key = getEncryptionKey(salt);
  
  // Create cipher with GCM mode
  const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, key, iv);
  
  // Encrypt the text
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  // Get auth tag
  const authTag = cipher.getAuthTag();
  
  // Combine salt, IV, encrypted text, and auth tag
  return Buffer.concat([
    salt,
    iv,
    authTag,
    Buffer.from(encrypted, 'hex')
  ]).toString('base64');
}

export function decrypt(encryptedData: string): string {
  try {
    // Convert from base64
    const buffer = Buffer.from(encryptedData, 'base64');
    
    // Extract salt, IV, auth tag, and encrypted text
    const salt = buffer.subarray(0, SALT_LENGTH);
    const iv = buffer.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
    const authTag = buffer.subarray(SALT_LENGTH + IV_LENGTH, SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH);
    const encrypted = buffer.subarray(SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH);
    
    // Get encryption key using the same salt
    const key = getEncryptionKey(salt);
    
    // Create decipher
    const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    
    // Decrypt
    let decrypted = decipher.update(encrypted);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    
    return decrypted.toString('utf8');
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data: Invalid encryption key or corrupted data');
  }
}
