import puppeteer from 'puppeteer'
import open from 'open';

interface MarketplaceCredentials {
  username: string
  password: string
}

const NAVIGATION_TIMEOUT = 60000 // 60 seconds
const WAIT_FOR_SELECTOR_TIMEOUT = 10000 // 10 seconds

export async function loginToPoshmark(credentials: MarketplaceCredentials) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080'
    ]
  })

  try {
    const page = await browser.newPage()
    
    // Set navigation timeout
    page.setDefaultNavigationTimeout(NAVIGATION_TIMEOUT)
    page.setDefaultTimeout(WAIT_FOR_SELECTOR_TIMEOUT)

    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 })

    // Enable request interception
    await page.setRequestInterception(true)
    page.on('request', (request) => {
      // Block images, fonts, and stylesheets to speed up loading
      const blockedResourceTypes = ['image', 'font', 'stylesheet']
      if (blockedResourceTypes.includes(request.resourceType())) {
        request.abort()
      } else {
        request.continue()
      }
    })

    console.log('Navigating to Poshmark login page...')
    await page.goto('https://poshmark.com/login', {
      waitUntil: 'networkidle0',
      timeout: NAVIGATION_TIMEOUT
    })

    console.log('Waiting for login form...')
    const usernameSelector = 'input[name="login_form[username_email]"]'
    const passwordSelector = 'input[name="login_form[password]"]'
    
    await Promise.all([
      page.waitForSelector(usernameSelector, { visible: true }),
      page.waitForSelector(passwordSelector, { visible: true })
    ])

    console.log('Typing credentials...')
    await page.type(usernameSelector, credentials.username, { delay: 100 })
    await page.type(passwordSelector, credentials.password, { delay: 100 })

    console.log('Clicking submit button...')
    const submitButton = await page.waitForSelector('button[type="submit"]', { visible: true })
    if (!submitButton) {
      throw new Error('Submit button not found')
    }

    // Click the button and wait for navigation
    await Promise.all([
      page.waitForNavigation({ 
        waitUntil: 'networkidle0',
        timeout: NAVIGATION_TIMEOUT 
      }),
      submitButton.click()
    ]).catch(error => {
      if (error.name === 'TimeoutError') {
        throw new Error('Login timed out - the site might be slow or blocking automated access')
      }
      throw error
    })
    
    console.log('Getting cookies...')
    const cookies = await page.cookies()
    
    console.log('Checking login status...')
    const isLoggedIn = await page.evaluate(() => {
      return !document.querySelector('input[name="login_form[username_email]"]')
    })

    if (!isLoggedIn) {
      throw new Error('Login verification failed - still on login page')
    }

    return {
      success: true,
      cookies,
      message: 'Successfully logged into Poshmark'
    }
  } catch (error) {
    console.error('Poshmark login error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to login to Poshmark'
    }
  } finally {
    await browser.close()
  }
}

async function findChromeExecutable(): Promise<string> {
  const possiblePaths = [
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.PROGRAMFILES + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env['PROGRAMFILES(X86)'] + '\\Google\\Chrome\\Application\\chrome.exe'
  ];

  // Use puppeteer's default Chrome if none found
  return possiblePaths.find(path => {
    try {
      return require('fs').existsSync(path);
    } catch {
      return false;
    }
  }) || '';
}

export interface LoginResult {
  success: boolean;
  message: string;
  cookies?: any[];
}

export async function loginToMercari(credentials: MarketplaceCredentials): Promise<LoginResult> {
  try {
    // Open Mercari login page in default browser
    await open('https://www.mercari.com/login/', { wait: false });

    // Return success but indicate manual verification needed
    return {
      success: true,
      message: 'Please complete login in your default browser. Once logged in, you can continue using the app.',
    };
  } catch (error) {
    console.error('Error opening browser:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to open browser'
    };
  }
}

export async function loginToDepop(credentials: MarketplaceCredentials) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080'
    ]
  })

  try {
    const page = await browser.newPage()
    
    // Set navigation timeout
    page.setDefaultNavigationTimeout(NAVIGATION_TIMEOUT)
    page.setDefaultTimeout(WAIT_FOR_SELECTOR_TIMEOUT)

    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 })

    // Enable request interception
    await page.setRequestInterception(true)
    page.on('request', (request) => {
      // Block images, fonts, and stylesheets to speed up loading
      const blockedResourceTypes = ['image', 'font', 'stylesheet']
      if (blockedResourceTypes.includes(request.resourceType())) {
        request.abort()
      } else {
        request.continue()
      }
    })

    console.log('Navigating to Depop login page...')
    await page.goto('https://www.depop.com/login', {
      waitUntil: 'networkidle0',
      timeout: NAVIGATION_TIMEOUT
    })

    console.log('Waiting for login form...')
    const usernameSelector = 'input[name="username"]'
    const passwordSelector = 'input[name="password"]'
    
    await Promise.all([
      page.waitForSelector(usernameSelector, { visible: true }),
      page.waitForSelector(passwordSelector, { visible: true })
    ])

    console.log('Typing credentials...')
    await page.type(usernameSelector, credentials.username, { delay: 100 })
    await page.type(passwordSelector, credentials.password, { delay: 100 })

    console.log('Clicking submit button...')
    const submitButton = await page.waitForSelector('button[type="submit"]', { visible: true })
    if (!submitButton) {
      throw new Error('Submit button not found')
    }

    // Click the button and wait for navigation
    await Promise.all([
      page.waitForNavigation({ 
        waitUntil: 'networkidle0',
        timeout: NAVIGATION_TIMEOUT 
      }),
      submitButton.click()
    ]).catch(error => {
      if (error.name === 'TimeoutError') {
        throw new Error('Login timed out - the site might be slow or blocking automated access')
      }
      throw error
    })

    console.log('Getting cookies...')
    const cookies = await page.cookies()

    console.log('Checking login status...')
    const isLoggedIn = await page.evaluate(() => {
      return !document.querySelector('input[name="username"]')
    })

    if (!isLoggedIn) {
      throw new Error('Login verification failed - still on login page')
    }

    return {
      success: true,
      cookies,
      message: 'Successfully logged into Depop'
    }
  } catch (error) {
    console.error('Depop login error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to login to Depop'
    }
  } finally {
    await browser.close()
  }
}
