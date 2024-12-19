import { Suspense } from "react"
import HeroSection from "@/components/homepage/hero-section"
import Pricing from "@/components/homepage/pricing"
import Features from "@/components/homepage/features"
import Testimonials from "@/components/homepage/testimonials"
import Integration from "@/components/homepage/integration"
import Stats from "@/components/homepage/stats"
import CTA from "@/components/homepage/cta"
import { Lights } from "@/components/ui/background-lights"
import { Skeleton } from "@/components/ui/skeleton"
import PageWrapper from "@/components/wrapper/page-wrapper"
import config from "@/config"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ResellersConnect - Automate Your Cross-Platform Selling',
  description: 'Simplify your reselling business with automated cross-listing, inventory management, and synchronized updates across eBay, Poshmark, Mercari, and more.',
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section with Background */}
      <section className="relative min-h-screen w-full">
        <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
          <HeroSection />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0">
          <Lights />
        </div>
      </section>

      {/* Stats Section */}
      <Suspense fallback={<Skeleton className="h-48 w-full" />}>
        <Stats />
      </Suspense>

      {/* Features Section */}
      <section className="py-24 bg-secondary/5">
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <Features />
        </Suspense>
      </section>

      {/* Integration Section */}
      <section className="py-24">
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <Integration />
        </Suspense>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/5">
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <Testimonials />
        </Suspense>
      </section>

      {/* Pricing Section */}
      {config.auth.enabled && config.payments.enabled && (
        <section className="py-24" id="pricing">
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <Pricing />
          </Suspense>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-24">
        <Suspense fallback={<Skeleton className="h-48 w-full" />}>
          <CTA />
        </Suspense>
      </section>
    </PageWrapper>
  )
}
