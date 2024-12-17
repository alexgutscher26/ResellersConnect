export interface Marketplace {
  id: string
  name: string
  logo: string
  connected: boolean
  loginUrl: string
}

export const defaultMarketplaces: Marketplace[] = [
  {
    id: "poshmark",
    name: "Poshmark",
    logo: "/logos/poshmark.png",
    connected: false,
    loginUrl: "https://poshmark.com/login"
  },
  {
    id: "mercari",
    name: "Mercari",
    logo: "/logos/mercari.png",
    connected: false,
    loginUrl: "https://www.mercari.com/login/"
  },
  {
    id: "depop",
    name: "Depop",
    logo: "/logos/depop.png",
    connected: false,
    loginUrl: "https://www.depop.com/login"
  },
  {
    id: "ebay",
    name: "eBay",
    logo: "/logos/ebay.png",
    connected: false,
    loginUrl: "https://signin.ebay.com/signin/"
  },
  {
    id: "facebook",
    name: "Facebook Marketplace",
    logo: "/logos/facebook.png",
    connected: false,
    loginUrl: "https://www.facebook.com/login"
  },
  {
    id: "bonanza",
    name: "Bonanza",
    logo: "/logos/bonanza.png",
    connected: false,
    loginUrl: "https://www.bonanza.com/login"
  }
]
