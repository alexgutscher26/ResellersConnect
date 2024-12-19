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
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"
import { type Marketplace, defaultMarketplaces } from "@/config/marketplaces"
import { AlertCircle, CheckCircle2, HelpCircle } from "lucide-react"

interface MarketplaceCredentials {
  username: string
  password: string
  apiKey?: string
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
    apiKey: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await onSubmit(credentials)
      setCredentials({ username: '', password: '', apiKey: '' })
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Image
              src={marketplace.logo}
              alt={marketplace.name}
              width={24}
              height={24}
              className="rounded"
            />
            Connect to {marketplace.name}
          </DialogTitle>
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
                disabled={isSubmitting}
                autoComplete="username"
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
                disabled={isSubmitting}
                autoComplete="current-password"
              />
            </div>
            {marketplace.requiresApiKey && (
              <div className="grid gap-2">
                <Label htmlFor="apiKey" className="flex items-center gap-2">
                  API Key
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>You can find your API key in your {marketplace.name} account settings</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input
                  id="apiKey"
                  type="password"
                  value={credentials.apiKey}
                  onChange={(e) => setCredentials(prev => ({ ...prev, apiKey: e.target.value }))}
                  required={marketplace.requiresApiKey}
                  disabled={isSubmitting}
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Icon name="spinner" className="w-4 h-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                'Connect'
              )}
            </Button>
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
  const [connectionProgress, setConnectionProgress] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    setMarketplaces(defaultMarketplaces)
    
    const fetchCredentials = async () => {
      try {
        const response = await fetch('/api/auth/marketplace/credentials')
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch credentials')
        }

        setMarketplaces(prev => 
          prev.map(marketplace => {
            const credential = data.credentials.find(
              (c: { marketplace: string }) => c.marketplace === marketplace.id
            )
            return {
              ...marketplace,
              connected: credential?.isConnected ?? false,
              lastSync: credential?.lastSync,
              itemCount: credential?.itemCount ?? 0
            }
          })
        )

        // Calculate connection progress
        const connectedCount = data.credentials.filter((c: { isConnected: boolean }) => c.isConnected).length
        setConnectionProgress((connectedCount / defaultMarketplaces.length) * 100)
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

      setMarketplaces(prev =>
        prev.map(m =>
          m.id === selectedMarketplace.id
            ? { ...m, connected: true, lastSync: new Date().toISOString() }
            : m
        )
      )

      // Update progress
      const connectedCount = marketplaces.filter(m => m.connected).length + 1
      setConnectionProgress((connectedCount / marketplaces.length) * 100)

      toast({
        title: "Success",
        description: `Connected to ${selectedMarketplace.name}`,
      })
    } catch (error) {
      console.error('Connection error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to connect',
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
            ? { ...m, connected: false, lastSync: undefined }
            : m
        )
      )

      // Update progress
      const connectedCount = marketplaces.filter(m => m.connected).length - 1
      setConnectionProgress((connectedCount / marketplaces.length) * 100)

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

  const getConnectionStatus = (marketplace: Marketplace) => {
    if (!marketplace.connected) {
      return (
        <Badge variant="outline" className="gap-1 text-muted-foreground">
          <AlertCircle className="h-3 w-3" />
          Not connected
        </Badge>
      )
    }

    return (
      <Badge variant="default" className="gap-1 bg-green-500">
        <CheckCircle2 className="h-3 w-3" />
        Connected
      </Badge>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Connect your accounts</CardTitle>
        <CardDescription>
          Connect your marketplace accounts to start crosslisting. Progress: {Math.round(connectionProgress)}%
        </CardDescription>
        <Progress value={connectionProgress} className="h-2" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center p-4">
            <Icon name="spinner" className="w-4 h-4 mr-2 animate-spin" />
            Loading marketplace connections...
          </div>
        ) : (
          <div className="grid gap-6">
            {marketplaces.map((marketplace) => (
              <div
                key={marketplace.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={marketplace.logo}
                      alt={marketplace.name}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    {marketplace.connected && (
                      <div className="absolute -top-1 -right-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{marketplace.name}</h3>
                    <div className="flex items-center gap-2">
                      {getConnectionStatus(marketplace)}
                      {marketplace.connected && marketplace.lastSync && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <span className="text-sm text-muted-foreground">
                                Last synced: {new Date(marketplace.lastSync).toLocaleDateString()}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Items synced: {marketplace.itemCount || 0}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
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
                  className="min-w-[100px]"
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
