"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";

export function BentoDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <BentoGrid className="max-w-4xl mx-auto px-4">
      <BentoCard className="md:col-span-2">
        <AnimatedBeamMultipleOutputDemo />
      </BentoCard>
      
      <BentoCard>
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-bold">Smart Inventory</h3>
          <AnimatedListDemo />
        </div>
      </BentoCard>

      <BentoCard className="md:col-span-2">
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-bold">Sales Performance</h3>
          <div className="h-[200px] w-full bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg" />
        </div>
      </BentoCard>

      <BentoCard>
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-bold">Schedule Posts</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </BentoCard>

      <BentoCard className="md:col-span-3">
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-bold">Supported Platforms</h3>
          <Marquee className="py-4" pauseOnHover>
            {[
              "eBay",
              "Poshmark",
              "Mercari",
              "Facebook Marketplace",
              "Depop",
              "Etsy",
              "Amazon",
            ].map((platform) => (
              <motion.div
                key={platform}
                className="mx-4 flex items-center space-x-2"
              >
                <span className="text-sm font-medium">{platform}</span>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </BentoCard>
    </BentoGrid>
  );
}
