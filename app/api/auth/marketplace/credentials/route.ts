import { NextRequest, NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { MarketplaceAuthService } from '@/lib/services/marketplace-auth'

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req)
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get all marketplace credentials for the user
    const marketplaces = ['poshmark', 'mercari', 'depop']
    const credentials = await Promise.all(
      marketplaces.map(async (marketplace) => {
        const creds = await MarketplaceAuthService.getCredentials(userId, marketplace)
        return {
          marketplace,
          isConnected: !!creds?.isConnected
        }
      })
    )

    return NextResponse.json({ credentials })
  } catch (error) {
    console.error('Error fetching credentials:', error)
    return NextResponse.json(
      { error: 'Failed to fetch credentials' },
      { status: 500 }
    )
  }
}
