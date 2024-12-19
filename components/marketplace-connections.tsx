import { useMarketplaceConnections } from '@/hooks/use-marketplace-connections'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query'

export function MarketplaceConnections() {
  const { data: connections, isLoading } = useMarketplaceConnections()
  const [disconnecting, setDisconnecting] = useState<string | null>(null)
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const handleDisconnect = async (marketplace: string) => {
    try {
      setDisconnecting(marketplace)
      await axios.post('/api/auth/marketplace/disconnect', { marketplace })
      await queryClient.invalidateQueries({ queryKey: ['marketplace-connections'] })
      toast({
        title: 'Marketplace disconnected',
        description: `Successfully disconnected from ${marketplace}`,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to disconnect marketplace',
        variant: 'destructive',
      })
    } finally {
      setDisconnecting(null)
    }
  }

  if (isLoading) {
    return <div>Loading marketplace connections...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Marketplaces</CardTitle>
        <CardDescription>
          Manage your marketplace connections
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {connections?.map((connection) => (
            <div
              key={connection.marketplace}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="font-medium capitalize">
                  {connection.marketplace}
                </div>
                <Badge variant={connection.isConnected ? "default" : "secondary"}>
                  {connection.isConnected ? "Connected" : "Not Connected"}
                </Badge>
                {connection.lastVerified && (
                  <span className="text-sm text-muted-foreground">
                    Last verified {formatDistanceToNow(new Date(connection.lastVerified))} ago
                  </span>
                )}
              </div>
              <Button
                variant={connection.isConnected ? "destructive" : "default"}
                onClick={() => {
                  if (connection.isConnected) {
                    handleDisconnect(connection.marketplace)
                  } else {
                    window.location.href = `/auth/${connection.marketplace}`
                  }
                }}
                disabled={disconnecting === connection.marketplace}
              >
                {disconnecting === connection.marketplace ? (
                  "Disconnecting..."
                ) : connection.isConnected ? (
                  "Disconnect"
                ) : (
                  "Connect"
                )}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
