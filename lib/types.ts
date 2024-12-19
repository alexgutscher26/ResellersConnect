/**
 * Supported marketplace providers
 */
export enum MarketplaceProvider {
  POSHMARK = "POSHMARK",
  EBAY = "EBAY",
  MERCARI = "MERCARI",
  DEPOP = "DEPOP",
  FACEBOOK_MARKETPLACE = "FACEBOOK_MARKETPLACE",
  BONANZA = "BONANZA"
}

/**
 * Rate limit duration format
 * Examples: "1 s", "5 m", "1 h", "1 d"
 */
export type RateLimitDuration = `${number} ${"s" | "m" | "h" | "d"}`;

/**
 * Rate limit configuration entry
 */
export interface RateLimitEntry {
  /**
   * Number of requests allowed within the duration
   */
  requests: number;
  
  /**
   * Duration for the rate limit window
   */
  duration: RateLimitDuration;
}
