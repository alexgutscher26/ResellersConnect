'use client'

import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import ModeToggle from "../mode-toggle";
import { UserProfile } from "../user-profile";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { userId, isSignedIn } = useAuth();
  
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <LaunchUI />
              Launch UI
            </Link>
            <Navigation />
          </NavbarLeft>
          <NavbarRight className="flex items-center gap-4">
            {isSignedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" className="hidden md:flex">
                    Dashboard
                  </Button>
                </Link>
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
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <span>Launch UI</span>
                  </Link>
                  {!isSignedIn && (
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
