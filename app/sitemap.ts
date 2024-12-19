import { type MetadataRoute } from 'next'

type SitemapEntry = MetadataRoute.Sitemap[number]

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://resellersconnect.com'

// Static pages that don't change frequently
const marketingPages: SitemapEntry[] = [
  {
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${baseUrl}/pricing`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/features`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
]

// Legal and policy pages
const legalPages: SitemapEntry[] = [
  {
    url: `${baseUrl}/privacy`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${baseUrl}/terms`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
]

// Help and support pages
const supportPages: SitemapEntry[] = [
  {
    url: `${baseUrl}/help`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/faq`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
]

// Blog and resource pages
const resourcePages: SitemapEntry[] = [
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/guides`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/resources`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
]

// Integration pages
const integrationPages: SitemapEntry[] = [
  {
    url: `${baseUrl}/integrations/poshmark`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/integrations/mercari`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/integrations/ebay`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/integrations/depop`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/integrations/facebook-marketplace`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
]

// Authentication pages
const authPages: SitemapEntry[] = [
  {
    url: `${baseUrl}/login`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${baseUrl}/signup`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content URLs (if any)
  // const posts = await fetchBlogPosts()
  // const dynamicUrls = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt).toISOString(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7
  // }))

  // Combine all URLs
  return [
    ...marketingPages,
    ...resourcePages,
    ...integrationPages,
    ...supportPages,
    ...legalPages,
    ...authPages,
    // ...dynamicUrls, // Add when dynamic content is implemented
  ].sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
