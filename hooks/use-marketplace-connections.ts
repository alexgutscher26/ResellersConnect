import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface MarketplaceConnection {
  marketplace: string
  isConnected: boolean
  lastVerified: string
}

export function useMarketplaceConnections() {
  return useQuery({
    queryKey: ['marketplace-connections'],
    queryFn: async () => {
      const marketplaces = ['mercari', 'poshmark', 'depop']
      const connections = await Promise.all(
        marketplaces.map(async (marketplace) => {
          try {
            const { data } = await axios.get(`/api/auth/marketplace?marketplace=${marketplace}`)
            return {
              marketplace,
              isConnected: data.isConnected,
              lastVerified: data.lastVerified
            }
          } catch (error) {
            return {
              marketplace,
              isConnected: false,
              lastVerified: null
            }
          }
        })
      )
      return connections
    }
  })
}
