"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart2,
  Box,
  Camera,
  Clock,
  CreditCard,
  DollarSign,
  Image,
  LayoutGrid,
  MessageSquare,
  RefreshCcw,
  Settings,
  ShoppingBag,
  Tags,
  Truck,
  Users,
  Zap
} from "lucide-react";
import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";

const platformStats = [
  { name: "eBay", revenue: "12.5M", growth: "+24%" },
  { name: "Poshmark", revenue: "8.2M", growth: "+18%" },
  { name: "Mercari", revenue: "6.7M", growth: "+32%" },
  { name: "Depop", revenue: "4.3M", growth: "+28%" },
];

const features = [
  { name: "Active Users", value: "10,000+", change: "+25%" },
  { name: "Items Listed", value: "1.2M+", change: "+42%" },
  { name: "Monthly Sales", value: "$2.5M+", change: "+38%" },
  { name: "Time Saved", value: "120k hrs", change: "+55%" },
];

export function BentoDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-8 text-center">
        <Badge variant="outline" className="mb-4">
          Platform Features
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Everything you need to scale your reselling business
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Powerful tools and automation to help you list more, sell faster, and grow your business across multiple platforms.
        </p>
      </div>

      <BentoGrid className="gap-6">
        {/* Main Feature Card */}
        <BentoCard className="md:col-span-2 row-span-2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-xl">Cross-Platform Automation</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              List once, sell everywhere. Our intelligent automation syncs your inventory across all major marketplaces.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature) => (
                <div key={feature.name} className="space-y-1">
                  <div className="text-2xl font-bold text-primary">{feature.value}</div>
                  <div className="text-sm text-muted-foreground">{feature.name}</div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.change}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full group">
                Watch Demo
                <Camera className="h-4 w-4 ml-2" />
              </Button>
              <Button className="w-full group">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </BentoCard>

        {/* Smart Inventory */}
        <BentoCard className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <ShoppingBag className="h-5 w-5 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Smart Inventory</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Total Items</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-primary rounded-full transition-all duration-500" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">324</div>
                  <div className="text-muted-foreground">Low Stock</div>
                </div>
                <div>
                  <div className="font-medium">89%</div>
                  <div className="text-muted-foreground">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Analytics Card */}
        <BentoCard className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <BarChart2 className="h-5 w-5 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-4">Platform Performance</h3>
            <div className="space-y-4">
              {platformStats.map((platform) => (
                <div key={platform.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">${platform.revenue}</span>
                    <Badge variant="secondary" className="text-xs">{platform.growth}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Features Grid */}
        <BentoCard className="md:col-span-2 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <LayoutGrid className="h-5 w-5 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-4">Powerful Features</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Image, label: "Bulk Photos" },
                { icon: Tags, label: "Auto Pricing" },
                { icon: MessageSquare, label: "Chat Support" },
                { icon: Truck, label: "Shipping" },
                { icon: Settings, label: "Automation" },
                { icon: Users, label: "Team Access" },
                { icon: Clock, label: "Scheduling" },
                { icon: CreditCard, label: "Payments" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Scheduling Card */}
        <BentoCard className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <RefreshCcw className="h-5 w-5 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Smart Scheduling</h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Upcoming Posts</span>
              <Badge>12</Badge>
            </div>
          </div>
        </BentoCard>

        {/* Revenue Stats */}
        <BentoCard className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <DollarSign className="h-5 w-5 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-4">Revenue Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                <span className="font-medium">$45,231</span>
              </div>
              <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-primary rounded-full transition-all duration-500" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-green-500">+22%</div>
                  <div className="text-muted-foreground">vs Last Month</div>
                </div>
                <div>
                  <div className="font-medium">98.3%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Platforms Card */}
        <BentoCard className="md:col-span-2 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <Box className="h-5 w-5 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-4">Supported Platforms</h3>
            <Marquee className="py-4" pauseOnHover>
              {["eBay", "Poshmark", "Mercari", "Facebook Marketplace", "Depop", "Etsy", "Amazon"].map((platform) => (
                <div
                  key={platform}
                  className="mx-4 px-6 py-3 rounded-full bg-muted flex items-center space-x-2"
                >
                  <span className="text-sm font-medium">{platform}</span>
                  <Badge variant="secondary" className="text-xs">Active</Badge>
                </div>
              ))}
            </Marquee>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-muted-foreground">7 Platforms Connected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">24/7 Sync Active</span>
              </div>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
