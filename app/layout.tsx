import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from '@/components/wrapper/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import { ErrorBoundary } from '@/components/error-boundary'
import './globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://resellersconnect.com"),
  title: {
    default: 'ResellersConnect - Simplify Your Reselling Business',
    template: `%s | ResellersConnect`
  },
  description: 'Streamline your reselling business with ResellersConnect. Manage inventory, automate crosslisting, and sync updates across eBay, Poshmark, Mercari, and more.',
  applicationName: 'ResellersConnect',
  authors: [{ name: 'ResellersConnect Team' }],
  generator: 'Next.js',
  keywords: ['reselling', 'inventory management', 'crosslisting', 'ecommerce', 'eBay', 'Poshmark', 'Mercari', 'Facebook Marketplace', 'Depop'],
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resellersconnect.com',
    title: 'ResellersConnect - Simplify Your Reselling Business',
    description: 'Streamline your reselling business with ResellersConnect. Manage inventory, automate crosslisting, and sync updates across multiple platforms.',
    siteName: 'ResellersConnect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResellersConnect',
    description: 'Streamline your reselling business with ResellersConnect. Manage inventory, automate crosslisting, and sync updates across multiple platforms.',
    creator: '@resellersconnect',
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <body className={`${GeistSans.className} antialiased`}>
          <ErrorBoundary>
            <Provider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="resellers-theme"
              >
                {children}
                <Toaster position="bottom-right" />
              </ThemeProvider>
            </Provider>
          </ErrorBoundary>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </AuthWrapper>
  )
}