/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverExternalPackages: ['@prisma/client'],
  },
  images: {
    domains: ['utfs.io', 'seo-heist.s3.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't attempt to require these packages on the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
