"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { defaultMarketplaces } from "@/config/marketplaces"

export default function Integration() {
  return (
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Integrate with your favorite marketplaces
        </h2>
        <p className="text-lg text-muted-foreground">
          Connect once and manage your listings across all major reselling platforms.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {defaultMarketplaces.map((marketplace) => (
          <Card 
            key={marketplace.id} 
            className="group bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:shadow-lg transition-all"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={marketplace.logo}
                    alt={marketplace.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {marketplace.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          More integrations coming soon. Request your favorite marketplace and we'll prioritize it.
        </p>
      </div>
    </div>
  )
}
