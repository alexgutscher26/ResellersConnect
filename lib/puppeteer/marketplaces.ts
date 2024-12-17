import puppeteer from 'puppeteer'

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

export async function loginToMercari(credentials: MarketplaceCredentials) {
  let browser;
  try {
    // Try connecting to existing Chrome instance
    browser = await puppeteer.connect({
      browserURL: 'http://localhost:9222',
      defaultViewport: null
    });
  } catch (error) {
    console.log('No debugging instance found, launching new browser...');
    
    const chromePath = await findChromeExecutable();
    console.log('Using Chrome at:', chromePath);

    // Launch new browser instance
    browser = await puppeteer.launch({
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--remote-debugging-port=9222',
        '--disable-blink-features=AutomationControlled'
      ],
      defaultViewport: null,
      executablePath: chromePath || undefined // Use default if no Chrome found
    });
  }

  let page: puppeteer.Page | null = null;

  try {
    // Get existing pages
    const pages = await browser.pages();
    page = pages[0];
    
    // If no pages exist, create a new one
    if (!page) {
      page = await browser.newPage();
    }

    // Increase timeout values but not too high to look suspicious
    page.setDefaultNavigationTimeout(45000);
    page.setDefaultTimeout(30000);

    console.log('Navigating to Mercari login page...');
    await page.goto('https://www.mercari.com/login/', {
      waitUntil: 'domcontentloaded',
      timeout: 45000
    });

    // Randomize wait times to appear more human-like
    const randomWait = (min: number, max: number) => 
      page!.waitForTimeout(Math.floor(Math.random() * (max - min + 1) + min));

    await randomWait(1000, 2000);

    console.log('Looking for email input...');
    const emailSelector = 'input[type="email"], input[name="email"]';
    await page.waitForSelector(emailSelector, { visible: true });
    
    // Type like a human with variable delays
    for (const char of credentials.username) {
      await page.type(emailSelector, char);
      await randomWait(50, 150);
    }

    await randomWait(500, 1000);

    console.log('Looking for password input...');
    const passwordSelector = 'input[type="password"], input[name="password"]';
    await page.waitForSelector(passwordSelector, { visible: true });
    
    // Type like a human with variable delays
    for (const char of credentials.password) {
      await page.type(passwordSelector, char);
      await randomWait(50, 150);
    }

    await randomWait(800, 1200);

    console.log('Looking for submit button...');
    const submitSelector = 'button[type="submit"], button[data-testid="signin-submit-button"]';
    const submitButton = await page.waitForSelector(submitSelector, { visible: true });
    
    if (!submitButton) {
      throw new Error('Submit button not found');
    }

    // Move mouse naturally to the button
    const buttonBox = await submitButton.boundingBox();
    if (buttonBox) {
      await page.mouse.move(
        buttonBox.x + buttonBox.width / 2,
        buttonBox.y + buttonBox.height / 2,
        { steps: 10 }
      );
      await randomWait(100, 300);
    }

    console.log('Clicking submit button...');
    await submitButton.click();
    
    // Wait for navigation with less strict conditions
    await Promise.race([
      page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 45000 }),
      page.waitForSelector('[data-testid="error-message"]', { timeout: 45000 }).catch(() => null)
    ]);

    await randomWait(1500, 2500);

    // Check login status
    const loginStatus = await page.evaluate(() => {
      const errorSelectors = [
        '.error-message',
        '[data-testid="error-message"]',
        '.alert-error',
        '.login-error'
      ];
      
      for (const selector of errorSelectors) {
        const errorElement = document.querySelector(selector);
        if (errorElement?.textContent) {
          return { error: errorElement.textContent.trim() };
        }
      }

      const currentUrl = window.location.href;
      if (currentUrl.includes('signin') || currentUrl.includes('login')) {
        return { stillOnLoginPage: true };
      }

      return { success: true };
    });

    if (loginStatus.error) {
      throw new Error(`Login failed: ${loginStatus.error}`);
    }

    if (loginStatus.stillOnLoginPage) {
      throw new Error('Login verification required - please complete verification manually');
    }

    console.log('Getting cookies...');
    const cookies = await page.cookies();

    return {
      success: true,
      cookies,
      message: 'Successfully logged into Mercari'
    };

  } catch (error) {
    console.error('Mercari login error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to login to Mercari'
    };
  } finally {
    try {
      if (page) {
        await page.close().catch(() => {});
      }
      // Don't close the browser if we connected to an existing instance
      if (browser && !browser.isConnected()) {
        await browser.close().catch(() => {});
      } else {
        await browser.disconnect().catch(() => {});
      }
    } catch (error) {
      console.error('Error cleaning up:', error);
    }
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
