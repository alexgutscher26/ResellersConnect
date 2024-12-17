import { MarketplaceConnections } from '@/components/marketplace-connections'

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10" suppressHydrationWarning>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6">
        <MarketplaceConnections />
        {/* Add other dashboard components here */}
      </div>
    </div>
  )
}
