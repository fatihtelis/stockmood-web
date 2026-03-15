"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SentimentBarProps {
  bullish: number;
  neutral: number;
  bearish: number;
  className?: string;
}

export function SentimentBar({ bullish, neutral, bearish, className = "" }: SentimentBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`flex gap-1 h-3 w-full rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="bg-bullish rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${bullish}%` } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      />
      <motion.div
        className="bg-neutral-sentiment rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${neutral}%` } : {}}
        transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      />
      <motion.div
        className="bg-bearish rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${bearish}%` } : {}}
        transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      />
    </div>
  );
}
