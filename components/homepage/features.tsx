"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftRight, BarChart3, DollarSign, List, RefreshCcw, Repeat } from "lucide-react"

const features = [
  {
    title: "Cross-Platform Listing",
    description: "List your items once and automatically publish them across multiple marketplaces including eBay, Poshmark, Mercari, and more.",
    Icon: ArrowLeftRight,
  },
  {
    title: "Inventory Sync",
    description: "Keep your inventory synchronized across all platforms. When an item sells, it's automatically updated everywhere to prevent overselling.",
    Icon: Repeat,
  },
  {
    title: "Smart Pricing",
    description: "Set platform-specific pricing rules and get smart pricing suggestions based on market data and your profit goals.",
    Icon: DollarSign,
  },
  {
    title: "Bulk Operations",
    description: "Edit multiple listings at once, perform bulk price updates, and manage your inventory efficiently across all platforms.",
    Icon: List,
  },
  {
    title: "Analytics & Reports",
    description: "Get detailed insights into your sales performance, inventory turnover, and platform-specific metrics to optimize your business.",
    Icon: BarChart3,
  },
  {
    title: "Automated Updates",
    description: "Automatically sync prices, quantities, and listing details across all platforms. Save time and reduce manual work.",
    Icon: RefreshCcw,
  },
]

export default function Features() {
  return (
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Everything you need to scale your reselling business
        </h2>
        <p className="text-lg text-muted-foreground">
          Powerful features to help you manage your inventory and grow your sales across multiple platforms.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
