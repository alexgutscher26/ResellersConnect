"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  Package,
  Store,
  BarChart2,
  Tags,
  Truck,
  Clock,
  FileText,
  DollarSign,
  Settings,
  Plus,
  BoxesIcon,
  Users,
  MessageSquare,
  HelpCircle
} from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavSection {
  title: string
  items: NavItem[]
}

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string | number
}

const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: Home
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart2
      }
    ]
  },
  {
    title: "Inventory",
    items: [
      {
        title: "Products",
        href: "/dashboard/products",
        icon: Package,
        badge: "23"
      },
      {
        title: "Categories",
        href: "/dashboard/categories",
        icon: Tags
      },
      {
        title: "Collections",
        href: "/dashboard/collections",
        icon: BoxesIcon
      }
    ]
  },
  {
    title: "Listings",
    items: [
      {
        title: "Active Listings",
        href: "/dashboard/listings",
        icon: Store,
        badge: "12"
      },
      {
        title: "Draft Listings",
        href: "/dashboard/drafts",
        icon: FileText,
        badge: "3"
      }
    ]
  },
  {
    title: "Sales",
    items: [
      {
        title: "Orders",
        href: "/dashboard/orders",
        icon: Truck,
        badge: "5"
      },
      {
        title: "Sales History",
        href: "/dashboard/sales",
        icon: DollarSign
      },
      {
        title: "Customers",
        href: "/dashboard/customers",
        icon: Users
      }
    ]
  },
  {
    title: "Support",
    items: [
      {
        title: "Messages",
        href: "/dashboard/messages",
        icon: MessageSquare,
        badge: "2"
      },
      {
        title: "Help Center",
        href: "/dashboard/help",
        icon: HelpCircle
      }
    ]
  }
]

export default function DashboardSideBar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-gradient-to-b from-background to-background/95 lg:block">
      <div className="flex h-full flex-col">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2" href="/dashboard">
            <span className="font-semibold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              ResellersConnect
            </span>
          </Link>
        </div>
        <ScrollArea className="flex-1 py-2">
          <div className="px-3 space-y-4">
            <div className="mb-4">
              <Button className="w-full justify-start gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary" size="sm">
                <Plus className="h-4 w-4" />
                Create Listing
              </Button>
            </div>
            {navSections.map((section, i) => (
              <div key={section.title} className="space-y-2">
                <h4 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </h4>
                <nav className="space-y-1">
                  {section.items.map((item) => (
                    <NavItem key={item.href} item={item} pathname={pathname} />
                  ))}
                </nav>
                {i < navSections.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="mt-auto border-t p-4">
          <Link href="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-muted">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function NavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const Icon = item.icon
  const isActive = pathname === item.href

  return (
    <Link href={item.href} className="block">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={cn(
          "w-full justify-start gap-2 relative",
          isActive && "bg-primary/10 hover:bg-primary/15 text-primary"
        )}
        size="sm"
      >
        <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
        <span>{item.title}</span>
        {item.badge && (
          <span className={cn(
            "ml-auto rounded-full px-2 py-0.5 text-xs font-medium",
            isActive 
              ? "bg-primary/15 text-primary" 
              : "bg-muted text-muted-foreground"
          )}>
            {item.badge}
          </span>
        )}
      </Button>
    </Link>
  )
}
