'use client'

import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import ModeToggle from "../mode-toggle";
import { UserProfile } from "../user-profile";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/ui/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <Link 
    href={href} 
    className={`text-muted-foreground hover:text-foreground transition-colors ${className}`}
  >
    {children}
  </Link>
);

const DashboardDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="hidden md:flex items-center gap-1">
        Dashboard <ChevronDown className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/dashboard">Overview</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/dashboard/inventory">Inventory</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/dashboard/listings">Listings</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/dashboard/analytics">Analytics</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function Navbar() {
  const { userId, isSignedIn } = useAuth();
  
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft className="gap-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <LaunchUI />
              <span className="hidden sm:inline">ResellersConnect</span>
            </Link>
            <Navigation />
          </NavbarLeft>

          <NavbarRight className="flex items-center gap-4">
            {isSignedIn ? (
              <>
                <DashboardDropdown />
                <Button variant="ghost" size="icon" className="hidden md:flex relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                    3
                  </span>
                </Button>
                <UserProfile />
              </>
            ) : (
              <div className="hidden space-x-2 md:flex">
                <Link href="/sign-in">
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <LaunchUI />
                    <span>ResellersConnect</span>
                  </Link>
                  
                  {isSignedIn ? (
                    <div className="grid gap-4">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search..."
                          className="pl-8"
                        />
                      </div>
                      <div className="grid gap-2">
                        <NavLink href="/dashboard">Overview</NavLink>
                        <NavLink href="/dashboard/inventory">Inventory</NavLink>
                        <NavLink href="/dashboard/listings">Listings</NavLink>
                        <NavLink href="/dashboard/analytics">Analytics</NavLink>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link href="/sign-in">
                        <Button variant="ghost" className="w-full">Sign in</Button>
                      </Link>
                      <Link href="/sign-up">
                        <Button className="w-full">Sign up</Button>
                      </Link>
                    </div>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
