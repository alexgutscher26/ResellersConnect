import { NextRequest, NextResponse } from 'next/server'
import { loginToPoshmark, loginToMercari, loginToDepop } from '@/lib/puppeteer/marketplaces'
import { getAuth } from '@clerk/nextjs/server'

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
    } catch (error) {
      console.error('Auth error:', error)
      return NextResponse.json(
        { error: 'Authentication failed' },
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
          break
        case 'mercari':
          result = await loginToMercari({ username, password })
          break
        case 'depop':
          result = await loginToDepop({ username, password })
          break
        default:
          console.log('Invalid marketplace:', marketplace)
          return NextResponse.json(
            { error: 'Invalid marketplace' },
            { status: 400 }
          )
      }

      console.log('Login result:', { ...result, cookies: '[REDACTED]' })

      if (!result.success) {
        return NextResponse.json(
          { error: result.message },
          { status: 400 }
        )
      }

      // TODO: Store cookies securely for future use
      // You might want to encrypt these before storing in your database

      return NextResponse.json(result)
    } catch (error) {
      console.error('Marketplace login error:', error)
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Failed to login to marketplace' },
        { status: 500 }
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
