import { NextRequest, NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { MarketplaceAuthService } from '@/lib/services/marketplace-auth'
import { defaultMarketplaces } from '@/config/marketplaces'

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req)
    if (!userId) {
      console.log('GET: Unauthorized, no user ID')
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get credentials for all marketplaces
    const credentials = await Promise.all(
      defaultMarketplaces.map(async (marketplace) => {
        const cred = await MarketplaceAuthService.getCredentials(userId, marketplace.id)
        return {
          marketplace: marketplace.id,
          isConnected: cred?.isConnected || false,
          lastVerified: cred?.lastVerified || null
        }
      })
    )

    return NextResponse.json({
      success: true,
      credentials
    })
  } catch (error) {
    console.error('Error fetching credentials:', error)
    return NextResponse.json(
      { error: 'Failed to fetch credentials' },
      { status: 500 }
    )
  }
}
