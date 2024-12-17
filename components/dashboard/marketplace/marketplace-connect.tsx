"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"
import { Marketplace, defaultMarketplaces } from "@/config/marketplaces"

interface MarketplaceCredentials {
  username: string
  password: string
}

interface ConnectDialogProps {
  marketplace: Marketplace
  onSubmit: (credentials: MarketplaceCredentials) => Promise<void>
  onClose: () => void
  open: boolean
}

function ConnectDialog({ marketplace, onSubmit, onClose, open }: ConnectDialogProps) {
  const [credentials, setCredentials] = useState<MarketplaceCredentials>({
    username: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(credentials)
    setCredentials({ username: '', password: '' })
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect to {marketplace.name}</DialogTitle>
          <DialogDescription>
            Enter your {marketplace.name} credentials to connect your account
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Connect</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function MarketplaceConnect() {
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>([])
  const [selectedMarketplace, setSelectedMarketplace] = useState<Marketplace | null>(null)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Initialize with default marketplaces first
    setMarketplaces(defaultMarketplaces)
    
    const fetchCredentials = async () => {
      try {
        const response = await fetch('/api/auth/marketplace/credentials')
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch credentials')
        }

        // Update marketplaces with connection status
        setMarketplaces(prev => 
          prev.map(marketplace => {
            const credential = data.credentials.find(
              (c: { marketplace: string }) => c.marketplace === marketplace.id
            )
            return {
              ...marketplace,
              connected: credential?.isConnected ?? false
            }
          })
        )
      } catch (error) {
        console.error('Error fetching credentials:', error)
        toast({
          title: "Error",
          description: "Failed to fetch marketplace connections",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchCredentials()
  }, [toast])

  const handleConnect = async (credentials: MarketplaceCredentials) => {
    if (!selectedMarketplace) return

    setIsAuthenticating(true)
    try {
      const response = await fetch('/api/auth/marketplace', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          marketplace: selectedMarketplace.id,
          ...credentials
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to connect')
      }

      // Update marketplace status
      setMarketplaces(prev =>
        prev.map(m =>
          m.id === selectedMarketplace.id
            ? { ...m, connected: true }
            : m
        )
      )

      toast({
        title: "Success",
        description: `Connected to ${selectedMarketplace.name}`,
      })
    } catch (error) {
      console.error('Connection error:', error)
      
      let errorMessage = 'Failed to connect'
      if (error instanceof Error) {
        errorMessage = error.message
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsAuthenticating(false)
      setSelectedMarketplace(null)
    }
  }

  const handleDisconnect = async (marketplace: Marketplace) => {
    try {
      const response = await fetch('/api/auth/marketplace', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          marketplace: marketplace.id,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to disconnect')
      }

      setMarketplaces(prev =>
        prev.map(m =>
          m.id === marketplace.id
            ? { ...m, connected: false }
            : m
        )
      )

      toast({
        title: "Success",
        description: `Disconnected from ${marketplace.name}`,
      })
    } catch (error) {
      console.error('Disconnect error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to disconnect',
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="w-full" suppressHydrationWarning>
      <CardHeader>
        <CardTitle>Connect your accounts to crosslist</CardTitle>
        <CardDescription>
          Connect your marketplace accounts to start crosslisting
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center p-4">
            <Icon name="spinner" className="w-4 h-4 mr-2 animate-spin" />
            Loading...
          </div>
        ) : (
          <div className="grid gap-6">
            {marketplaces.map((marketplace) => (
              <div
                key={marketplace.id}
                className="flex items-center justify-between p-4 border rounded-lg"
                suppressHydrationWarning
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12">
                    <Image
                      src={marketplace.logo}
                      alt={marketplace.name}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{marketplace.name}</h3>
                    <div className="flex items-center gap-2">
                      <div 
                        className={cn(
                          "w-2 h-2 rounded-full",
                          marketplace.connected 
                            ? "bg-green-500 animate-pulse" 
                            : "bg-red-500"
                        )} 
                      />
                      <p className="text-sm text-muted-foreground">
                        {marketplace.connected ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant={marketplace.connected ? "secondary" : "default"}
                  onClick={() => {
                    if (marketplace.connected) {
                      handleDisconnect(marketplace)
                    } else {
                      setSelectedMarketplace(marketplace)
                    }
                  }}
                  disabled={isAuthenticating}
                >
                  {isAuthenticating && selectedMarketplace?.id === marketplace.id ? (
                    <>
                      <Icon name="spinner" className="w-4 h-4 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : marketplace.connected ? (
                    'Disconnect'
                  ) : (
                    'Connect'
                  )}
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {selectedMarketplace && (
        <ConnectDialog
          marketplace={selectedMarketplace}
          onSubmit={handleConnect}
          onClose={() => setSelectedMarketplace(null)}
          open={!!selectedMarketplace}
        />
      )}
    </Card>
  )
}
