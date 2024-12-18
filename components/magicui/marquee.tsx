"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden [--duration:40s] [--gap:1rem]",
        className,
        {
          "hover:[--play-state:paused]": pauseOnHover,
        }
      )}
    >
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-[--gap]"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-[--gap]"
        animate={{
          x: direction === "left" ? ["100%", "0%"] : ["0%", "100%"],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
