import { MarketplaceConnect } from "@/components/dashboard/marketplace/marketplace-connect"

export default async function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-start flex-wrap px-4 pt-4 gap-4">
      <MarketplaceConnect />
    </div>
  )
}
