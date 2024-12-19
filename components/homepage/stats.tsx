"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, ShoppingBag, Clock, Store } from "lucide-react"

const stats = [
  {
    title: "Active Users",
    value: "10,000+",
    description: "resellers trust our platform",
    Icon: Users,
  },
  {
    title: "Items Listed",
    value: "1M+",
    description: "products cross-listed",
    Icon: ShoppingBag,
  },
  {
    title: "Time Saved",
    value: "500K+",
    description: "hours saved for our users",
    Icon: Clock,
  },
  {
    title: "Platforms",
    value: "6+",
    description: "marketplaces supported",
    Icon: Store,
  },
]

export default function Stats() {
  return (
    <div className="container py-24">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
