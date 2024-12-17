"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import Image from "next/image"
import { useState } from "react"

interface MarketplaceProps {
  name: string
  logo: string
  isConnected: boolean
  troubleshootingLink?: string
}

const initialMarketplaces: MarketplaceProps[] = [
  {
    name: "Poshmark",
    logo: "/images/marketplaces/poshmark.png",
    isConnected: false,
    troubleshootingLink: "#"
  },
  {
    name: "eBay",
    logo: "/images/marketplaces/ebay.png",
    isConnected: false,
    troubleshootingLink: "#"
  },
  {
    name: "Mercari",
    logo: "/images/marketplaces/mercari.png",
    isConnected: false,
    troubleshootingLink: "#"
  },
  {
    name: "Facebook Marketplace",
    logo: "/images/marketplaces/facebook.png",
    isConnected: false,
    troubleshootingLink: "#"
  },
  {
    name: "Depop",
    logo: "/images/marketplaces/depop.png",
    isConnected: false,
    troubleshootingLink: "#"
  },
  {
    name: "Etsy",
    logo: "/images/marketplaces/etsy.png",
    isConnected: false,
    troubleshootingLink: "#"
  },
]

const MarketplaceItem = ({ 
  name, 
  logo, 
  isConnected, 
  troubleshootingLink 
}: MarketplaceProps) => {
  const handleConnect = () => {
    // TODO: Implement actual connection logic
    console.log(`${isConnected ? "Disconnecting from" : "Connecting to"} ${name}`)
  }

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {isConnected ? "Connected" : "Not connected"}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {troubleshootingLink && !isConnected && (
          <Button variant="ghost" size="sm" className="text-xs" asChild>
            <a href={troubleshootingLink}>Trouble connecting?</a>
          </Button>
        )}
        <Button
          variant={isConnected ? "outline" : "default"}
          size="sm"
          onClick={handleConnect}
        >
          {isConnected ? "Disconnect" : "Connect"}
        </Button>
      </div>
    </div>
  )
}

export function MarketplaceConnect() {
  const [marketplaces, setMarketplaces] = useState(initialMarketplaces)
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false)

  const handleInstallExtension = () => {
    // TODO: Implement actual extension installation logic
    console.log("Installing extension")
  }

  const handleRefresh = () => {
    // TODO: Implement actual refresh logic
    console.log("Refreshing extension status")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Connect your accounts to crosslist</CardTitle>
        <CardDescription>
          Install the Chrome extension and connect your marketplace accounts to start crosslisting
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center space-x-4">
            <Icons.chrome className="w-8 h-8" />
            <div>
              <h3 className="font-medium">Chrome Extension</h3>
              <p className="text-sm text-muted-foreground">Required for marketplace integration</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="default" 
              size="sm"
              onClick={handleInstallExtension}
            >
              Install
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleRefresh}
            >
              <Icons.refresh className="w-4 h-4" />
              Refresh
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marketplaces.map((marketplace) => (
              <MarketplaceItem key={marketplace.name} {...marketplace} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
