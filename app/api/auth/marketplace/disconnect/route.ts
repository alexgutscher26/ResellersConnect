import { NextRequest, NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { MarketplaceAuthService } from '@/lib/services/marketplace-auth'

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req)
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { marketplace } = await req.json()
    if (!marketplace) {
      return NextResponse.json(
        { error: 'Marketplace is required' },
        { status: 400 }
      )
    }

    await MarketplaceAuthService.removeCredentials(userId, marketplace)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error disconnecting marketplace:', error)
    return NextResponse.json(
      { error: 'Failed to disconnect marketplace' },
      { status: 500 }
    )
  }
}
