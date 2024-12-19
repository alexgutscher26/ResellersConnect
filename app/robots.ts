import { type MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://resellersconnect.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/blog',
          '/contact',
          '/features',
          '/guides',
          '/help',
          '/integrations',
          '/pricing',
          '/resources',
        ],
        disallow: [
          // Private routes
          '/dashboard',
          '/dashboard/*',
          '/api/*',
          '/admin/*',
          
          // Auth routes
          '/sign-in',
          '/sign-up',
          '/reset-password',
          '/verify-email',
          
          // User-specific routes
          '/settings/*',
          '/profile/*',
          
          // Temporary and development routes
          '/dev/*',
          '/test/*',
          '/_next/*',
          '/_vercel/*',
          
          // Draft content
          '/blog/drafts/*',
          '/guides/drafts/*',
          
          // Internal tools
          '/internal/*',
          '/debug/*',
          
          // File uploads and media
          '/uploads/*',
          '/media/private/*',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        // Block archive.org bot from private content
        userAgent: 'ia_archiver',
        disallow: [
          '/dashboard',
          '/api',
          '/admin',
          '/settings',
          '/profile',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}