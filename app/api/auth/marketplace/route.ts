import { NextRequest, NextResponse } from 'next/server'
import { loginToPoshmark, loginToMercari, loginToDepop } from '@/lib/puppeteer/marketplaces'
import { getAuth } from '@clerk/nextjs/server'
import { MarketplaceAuthService } from '@/lib/services/marketplace-auth'

export async function POST(req: NextRequest) {
  console.log('Received marketplace auth request')
  
  try {
    // Parse request body first to catch JSON parsing errors
    let body;
    try {
      body = await req.json()
      console.log('Request body:', { ...body, password: '[REDACTED]' })
    } catch (error) {
      console.error('Failed to parse request body:', error)
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    // Check authentication
    try {
      const { userId } = getAuth(req)
      console.log('User ID:', userId)
      
      if (!userId) {
        console.log('Unauthorized: No user ID')
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        )
      }

      // Validate request body
      const { marketplace, username, password } = body
      if (!marketplace || !username || !password) {
        console.log('Missing fields:', { marketplace: !!marketplace, username: !!username, password: !!password })
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        )
      }

      // Attempt marketplace login
      console.log('Attempting login for marketplace:', marketplace)
      let result;
      try {
        switch (marketplace) {
          case 'poshmark':
            result = await loginToPoshmark({ username, password })
            if (result.success) {
              console.log('Poshmark login successful, storing credentials')
              await MarketplaceAuthService.storeCredentials(userId, marketplace, { username, password })
            }
            break
          case 'mercari':
            result = await loginToMercari({ username, password })
            if (result.success) {
              console.log('Mercari login successful, storing credentials')
              await MarketplaceAuthService.storeCredentials(userId, marketplace, { username, password })
              return NextResponse.json({
                success: true,
                message: result.message,
                requiresManualLogin: true
              })
            }
            break
          case 'depop':
            result = await loginToDepop({ username, password })
            if (result.success) {
              console.log('Depop login successful, storing credentials')
              await MarketplaceAuthService.storeCredentials(userId, marketplace, { username, password })
            }
            break
          default:
            console.log('Invalid marketplace:', marketplace)
            return NextResponse.json(
              { error: 'Invalid marketplace' },
              { status: 400 }
            )
        }

        if (!result.success) {
          console.log('Login failed:', result.message)
          return NextResponse.json(
            { error: result.message },
            { status: 400 }
          )
        }

        console.log('Login successful, returning response')
        return NextResponse.json(result)
      } catch (error) {
        console.error('Marketplace login error:', error)
        return NextResponse.json(
          { error: error instanceof Error ? error.message : 'Failed to login to marketplace' },
          { status: 500 }
        )
      }
    } catch (error) {
      console.error('Auth error:', error)
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Unhandled error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

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

    const url = new URL(req.url)
    const marketplace = url.searchParams.get('marketplace')
    
    if (!marketplace) {
      console.log('GET: Missing marketplace parameter')
      return NextResponse.json(
        { error: 'Marketplace parameter required' },
        { status: 400 }
      )
    }

    console.log('GET: Fetching credentials for:', { userId, marketplace })
    const credentials = await MarketplaceAuthService.getCredentials(userId, marketplace)
    
    console.log('GET: Returning connection status:', { 
      isConnected: credentials?.isConnected,
      hasCredentials: !!credentials
    })

    return NextResponse.json({
      isConnected: credentials?.isConnected || false,
      lastVerified: credentials?.lastVerified || null
    })
  } catch (error) {
    console.error('Error checking connection status:', error)
    return NextResponse.json(
      { error: 'Failed to check connection status' },
      { status: 500 }
    )
  }
}
