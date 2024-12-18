"use client"

import { UserProfile } from '@/components/user-profile'
import ModeToggle from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Bell, Menu, Search, Plus, Filter } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

export default function DashboardTopNav({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <span className="font-semibold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    ResellersConnect
                  </span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex flex-1 items-center gap-4 md:gap-6 md:px-6">
            <form className="hidden flex-1 lg:block">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products, listings, orders..."
                  className="w-full appearance-none pl-9 pr-12 bg-background/60"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1 h-7 w-7"
                >
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter results</span>
                </Button>
              </div>
            </form>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative hidden md:flex"
              >
                <Search className="h-5 w-5 lg:hidden" />
                <span className="sr-only">Search</span>
              </Button>
              
              <Button
                variant="default"
                size="sm"
                className="hidden md:flex gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              >
                <Plus className="h-4 w-4" />
                New Listing
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge variant="secondary" className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground">
                      2
                    </Badge>
                    <span className="sr-only">Notifications</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[380px]">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Notifications</p>
                      <p className="text-xs text-muted-foreground">
                        You have 2 unread messages
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-start justify-between">
                        <p className="text-sm font-medium">New Order Received</p>
                        <span className="text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5">New</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Order #1234 needs processing</p>
                      <span className="text-xs text-muted-foreground">2 minutes ago</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-start justify-between">
                        <p className="text-sm font-medium">Inventory Update Required</p>
                        <span className="text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5">New</span>
                      </div>
                      <p className="text-xs text-muted-foreground">3 items are low in stock</p>
                      <span className="text-xs text-muted-foreground">1 hour ago</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="w-full text-center cursor-pointer">
                    <Link href="/dashboard/notifications" className="w-full text-sm text-muted-foreground hover:text-foreground">
                      View all notifications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Separator orientation="vertical" className="h-6" />
              <ModeToggle />
              <UserProfile />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
