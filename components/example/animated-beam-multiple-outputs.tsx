"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedBeamMultipleOutputDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-xl border bg-background p-8",
        "group/cards cursor-default"
      )}
    >
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/cards:opacity-100">
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-[0.15] blur-xl"
          style={{
            translateX: mousePosition.x - 100,
            translateY: mousePosition.y - 100,
            width: 200,
            height: 200,
          }}
        />
      </div>
      <div className="relative z-10 space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Automated Cross-listing</h3>
          <p className="text-muted-foreground">
            List your items once, sell everywhere. Our automated cross-listing feature saves you hours of manual work.
          </p>
        </div>
      </div>
    </div>
  );
}
