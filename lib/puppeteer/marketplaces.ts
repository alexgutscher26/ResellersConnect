import puppeteer from 'puppeteer'
import open from 'open';

interface MarketplaceCredentials {
  username: string
  password: string
}

const NAVIGATION_TIMEOUT = 60000 // 60 seconds
const WAIT_FOR_SELECTOR_TIMEOUT = 10000 // 10 seconds

interface LoginResult {
  success: boolean
  message: string
  cookies?: any[]
}

export async function loginToPoshmark(credentials: MarketplaceCredentials): Promise<LoginResult> {
  try {
    // Open Poshmark login page in default browser
    await open('https://poshmark.com/login', { wait: false });

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

export async function loginToDepop(credentials: MarketplaceCredentials): Promise<LoginResult> {
  try {
    // Open Depop login page in default browser
    await open('https://www.depop.com/login', { wait: false });

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

export async function loginToEbay(credentials: MarketplaceCredentials): Promise<LoginResult> {
  try {
    await open('https://signin.ebay.com/signin/', { wait: false });
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

export async function loginToFacebook(credentials: MarketplaceCredentials): Promise<LoginResult> {
  try {
    await open('https://www.facebook.com/login', { wait: false });
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

export async function loginToBonanza(credentials: MarketplaceCredentials): Promise<LoginResult> {
  try {
    await open('https://www.bonanza.com/login', { wait: false });
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
