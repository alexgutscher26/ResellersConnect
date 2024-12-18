export interface AuthConfig {
  enabled: boolean;
  providers: {
    clerk: {
      publicKey: string;
      secretKey: string;
    };
  };
  redirects: {
    signIn: string;
    signUp: string;
    afterSignIn: string;
    afterSignUp: string;
  };
}

export interface PaymentConfig {
  enabled: boolean;
  providers: {
    stripe: {
      publicKey: string;
      secretKey: string;
      webhookSecret: string;
      prices: {
        basic: string;
        pro: string;
        enterprise: string;
      };
    };
  };
}

export interface AnalyticsConfig {
  enabled: boolean;
  providers: {
    googleAnalytics: {
      enabled: boolean;
      measurementId: string;
    };
    mixpanel: {
      enabled: boolean;
      projectToken: string;
    };
  };
}

export interface StorageConfig {
  provider: 'supabase' | 's3';
  supabase?: {
    url: string;
    anonKey: string;
    secretKey: string;
    bucket: string;
  };
  s3?: {
    accessKeyId: string;
    secretAccessKey: string;
    bucket: string;
    region: string;
  };
}

export interface AppConfig {
  name: string;
  description: string;
  version: string;
  url: string;
  api: {
    baseUrl: string;
    version: string;
  };
  auth: AuthConfig;
  payments: PaymentConfig;
  analytics: AnalyticsConfig;
  storage: StorageConfig;
  features: {
    bulkActions: boolean;
    analytics: boolean;
    automation: boolean;
    inventory: boolean;
  };
  limits: {
    maxListings: number;
    maxImages: number;
    maxFileSize: number;
    rateLimit: {
      requests: number;
      window: number; // in seconds
    };
  };
}

const config: AppConfig = {
  name: 'ResellersConnect',
  description: 'Simplify inventory management and automate crosslisting across multiple resale platforms',
  version: '1.0.0',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    version: 'v1',
  },
  auth: {
    enabled: true,
    providers: {
      clerk: {
        publicKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '',
        secretKey: process.env.CLERK_SECRET_KEY || '',
      },
    },
    redirects: {
      signIn: '/sign-in',
      signUp: '/sign-up',
      afterSignIn: '/dashboard',
      afterSignUp: '/onboarding',
    },
  },
  payments: {
    enabled: true,
    providers: {
      stripe: {
        publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
        secretKey: process.env.STRIPE_SECRET_KEY || '',
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
        prices: {
          basic: process.env.STRIPE_BASIC_PRICE_ID || '',
          pro: process.env.STRIPE_PRO_PRICE_ID || '',
          enterprise: process.env.STRIPE_ENTERPRISE_PRICE_ID || '',
        },
      },
    },
  },
  analytics: {
    enabled: true,
    providers: {
      googleAnalytics: {
        enabled: true,
        measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
      },
      mixpanel: {
        enabled: true,
        projectToken: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '',
      },
    },
  },
  storage: {
    provider: 'supabase',
    supabase: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      secretKey: process.env.SUPABASE_SECRET_KEY || '',
      bucket: 'listings',
    },
  },
  features: {
    bulkActions: true,
    analytics: true,
    automation: true,
    inventory: true,
  },
  limits: {
    maxListings: 10000,
    maxImages: 10,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    rateLimit: {
      requests: 100,
      window: 60, // 1 minute
    },
  },
};

export default config;
