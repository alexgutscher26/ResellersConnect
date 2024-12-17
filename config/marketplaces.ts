export interface Marketplace {
  id: string
  name: string
  logo: string
  connected: boolean
}

export const defaultMarketplaces: Marketplace[] = [
  {
    id: "poshmark",
    name: "Poshmark",
    logo: "/logos/poshmark.png",
    connected: false
  },
  {
    id: "mercari",
    name: "Mercari",
    logo: "/logos/mercari.png",
    connected: false
  },
  {
    id: "depop",
    name: "Depop",
    logo: "/logos/depop.png",
    connected: false
  }
]
