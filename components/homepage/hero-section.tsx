"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, ShoppingBag, Repeat2, BarChart3 } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import GradualSpacing from "@/components/ui/gradual-spacing";

export default function HeroSection() {
  const { userId, isSignedIn } = useAuth();
  
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gradient-to-t from-background to-muted shadow-xl ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" />
      <div className="mx-auto max-w-3xl text-center px-4">
        <Badge variant="outline" className="inline-flex animate-fade-in">
          <GradualSpacing
            text="Simplify Your Reselling Business"
            className="text-muted-foreground"
          />
          <ArrowRightIcon className="h-3 w-3 ml-2" />
        </Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent animate-fade-in">
          Your All-in-One Reselling Platform
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground animate-fade-in max-w-2xl mx-auto">
          Manage inventory, crosslist items, and sync updates across multiple marketplaces. Save time and grow your reselling business with our powerful automation tools.
        </p>
        <div className="mt-6 flex justify-center items-center gap-x-6 animate-fade-in">
          {isSignedIn ? (
            <Link href="/dashboard">
              <Button size="lg" variant="shine" className="gap-2">
                Go to Dashboard
                <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <div className="flex gap-4">
              <Link href="/sign-in">
                <Button variant="ghost" size="lg">Sign in</Button>
              </Link>
              <Link href="/sign-up">
                <Button size="lg">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
        
        <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-fade-in">
          {[
            { name: 'Active Sellers', value: '10,000+', icon: ShoppingBag },
            { name: 'Items Listed', value: '1M+', icon: Repeat2 },
            { name: 'Revenue Generated', value: '$50M+', icon: BarChart3 },
          ].map((stat) => (
            <div key={stat.name} className="flex flex-col items-center gap-y-3">
              <dt className="text-sm leading-6 text-muted-foreground flex items-center gap-2">
                <stat.icon className="h-5 w-5" />
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
