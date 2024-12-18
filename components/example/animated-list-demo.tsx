"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedListDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    "Real-time inventory sync",
    "Automated price updates",
    "Cross-platform messaging",
    "Sales analytics",
    "Bulk listing tools",
  ];

  return (
    <div ref={ref} className="space-y-4">
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-muted-foreground">{feature}</span>
        </motion.div>
      ))}
    </div>
  );
}
