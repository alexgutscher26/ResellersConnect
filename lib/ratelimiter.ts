import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { MarketplaceProvider, type RateLimitDuration, type RateLimitEntry } from "./types";

// Rate limit configurations for different marketplaces
export const MARKETPLACE_RATE_LIMITS: Record<MarketplaceProvider, RateLimitEntry> = {
  POSHMARK: { requests: 100, duration: "1 m" },
  EBAY: { requests: 5000, duration: "1 h" },
  MERCARI: { requests: 300, duration: "1 m" },
  DEPOP: { requests: 200, duration: "1 m" },
  FACEBOOK_MARKETPLACE: { requests: 200, duration: "1 m" },
  BONANZA: { requests: 150, duration: "1 m" },
};

// Different types of rate limits
export type RateLimitType = 
  | "api"           // API endpoint rate limits
  | "auth"          // Authentication rate limits
  | "marketplace"   // Marketplace-specific rate limits
  | "user"          // Per-user rate limits
  | "global";       // Global rate limits

export interface RateLimitOptions extends RateLimitEntry {
  analytics?: boolean;
  prefix?: string;
  ephemeralCache?: false | Map<string, number>;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
  rejected: boolean;
}

export interface RateLimitConfig {
  enabled: boolean;
  redis: Redis | null;
  limiters: Map<string, Ratelimit>;
  defaultOptions: RateLimitOptions;
}

// Default rate limit options
const DEFAULT_OPTIONS: RateLimitOptions = {
  requests: 100,
  duration: "1 m",
  analytics: true,
  prefix: "rl",
  ephemeralCache: false
};

class RateLimiter {
  private config: RateLimitConfig;

  constructor() {
    this.config = {
      enabled: false,
      redis: null,
      limiters: new Map(),
      defaultOptions: DEFAULT_OPTIONS,
    };
    this.initialize();
  }

  private initialize(): void {
    if (!process.env.UPSTASH_REDIS_REST_URL) {
      console.error("Environment variable UPSTASH_REDIS_REST_URL is not set.");
      return;
    }

    try {
      this.config.redis = Redis.fromEnv();
      this.config.enabled = true;
    } catch (error) {
      console.error("Failed to initialize Redis:", error);
      this.config.enabled = false;
    }
  }

  /**
   * Creates a new rate limiter instance with the specified options
   */
  private createLimiter(options: RateLimitOptions): Ratelimit {
    if (!this.config.redis) {
      throw new Error("Redis is not initialized");
    }

    return new Ratelimit({
      redis: this.config.redis,
      limiter: Ratelimit.slidingWindow(
        options.requests,
        options.duration
      ),
      analytics: options.analytics,
      prefix: options.prefix,
      ephemeralCache: options.ephemeralCache
    });
  }

  /**
   * Gets or creates a rate limiter for a specific key
   */
  private getLimiter(key: string, options: Partial<RateLimitOptions> = {}): Ratelimit {
    if (!this.config.limiters.has(key)) {
      const limiterOptions = {
        ...this.config.defaultOptions,
        ...options,
      };
      this.config.limiters.set(key, this.createLimiter(limiterOptions));
    }
    return this.config.limiters.get(key)!;
  }

  /**
   * Checks rate limit for a specific identifier
   */
  public async checkLimit(
    identifier: string,
    type: RateLimitType,
    options: Partial<RateLimitOptions> = {}
  ): Promise<RateLimitResult> {
    if (!this.config.enabled) {
      return {
        success: true,
        limit: Infinity,
        remaining: Infinity,
        reset: 0,
        rejected: false
      };
    }

    try {
      const key = `${type}:${identifier}`;
      const limiter = this.getLimiter(key, options);
      const result = await limiter.limit(identifier);

      return {
        success: result.success,
        limit: result.limit,
        remaining: result.remaining,
        reset: result.reset,
        rejected: !result.success
      };
    } catch (error) {
      console.error(`Rate limit check failed for ${identifier}:`, error);
      // Fail open if rate limiting is unavailable
      return {
        success: true,
        limit: Infinity,
        remaining: Infinity,
        reset: 0,
        rejected: false
      };
    }
  }

  /**
   * Gets rate limit for a specific marketplace
   */
  public async checkMarketplaceLimit(
    marketplace: MarketplaceProvider,
    identifier: string
  ): Promise<RateLimitResult> {
    const limits = MARKETPLACE_RATE_LIMITS[marketplace];
    return this.checkLimit(identifier, "marketplace", limits);
  }

  /**
   * Checks user-specific rate limit
   */
  public async checkUserLimit(
    userId: string,
    options: Partial<RateLimitOptions> = {}
  ): Promise<RateLimitResult> {
    return this.checkLimit(userId, "user", options);
  }

  /**
   * Checks API endpoint rate limit
   */
  public async checkApiLimit(
    endpoint: string,
    options: Partial<RateLimitOptions> = {}
  ): Promise<RateLimitResult> {
    return this.checkLimit(endpoint, "api", options);
  }

  /**
   * Resets rate limit for a specific identifier
   */
  public async resetLimit(identifier: string, type: RateLimitType): Promise<void> {
    if (!this.config.enabled || !this.config.redis) return;

    try {
      const key = `${type}:${identifier}`;
      await this.config.redis.del(key);
    } catch (error) {
      console.error(`Failed to reset rate limit for ${identifier}:`, error);
    }
  }

  /**
   * Gets current rate limit status without incrementing the counter
   */
  public async getStatus(identifier: string, type: RateLimitType): Promise<RateLimitResult | null> {
    if (!this.config.enabled || !this.config.redis) return null;

    try {
      const key = `${type}:${identifier}`;
      const limiter = this.getLimiter(key);
      // Use limit with a different identifier to avoid affecting the real counter
      const result = await limiter.limit(`${identifier}:status:${Date.now()}`);
      
      return {
        success: result.success,
        limit: result.limit,
        remaining: result.remaining,
        reset: result.reset,
        rejected: !result.success
      };
    } catch (error) {
      console.error(`Failed to get rate limit status for ${identifier}:`, error);
      return null;
    }
  }
}

// Export singleton instance
export const rateLimiter = new RateLimiter();
