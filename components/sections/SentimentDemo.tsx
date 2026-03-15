"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SentimentBar } from "@/components/ui/SentimentBar";
import { DEMO_SENTIMENT } from "@/lib/constants";

function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.3 }}
    >
      {isInView ? value : 0}%
    </motion.span>
  );
}

export function SentimentDemo() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 bg-indigo-glow opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: explanation */}
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-3">
              Sentiment Analysis
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">
              See sentiment{" "}
              <span className="text-gradient">at a glance</span>
            </h2>
            <p className="text-surface-400 mb-8 leading-relaxed">
              Our tri-color system makes it instantly clear how the market feels about any stock.
              Each analysis scans dozens of posts and articles to deliver a comprehensive sentiment
              breakdown with confidence scoring.
            </p>

            {/* Sentiment legend */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-bullish" />
                <div>
                  <span className="text-sm font-medium text-surface-200">Bullish</span>
                  <span className="text-sm text-surface-500 ml-2">Positive market sentiment</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neutral-sentiment" />
                <div>
                  <span className="text-sm font-medium text-surface-200">Neutral</span>
                  <span className="text-sm text-surface-500 ml-2">Mixed or undecided signals</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-bearish" />
                <div>
                  <span className="text-sm font-medium text-surface-200">Bearish</span>
                  <span className="text-sm text-surface-500 ml-2">Negative market outlook</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: demo card */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-surface-900 border border-surface-700 rounded-2xl p-6 shadow-2xl shadow-brand-500/5">
              {/* Stock header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-surface-50">{DEMO_SENTIMENT.symbol}</h3>
                  <p className="text-sm text-surface-400">{DEMO_SENTIMENT.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-surface-50">{DEMO_SENTIMENT.price}</p>
                  <p className="text-sm font-medium text-bullish">{DEMO_SENTIMENT.change}</p>
                </div>
              </div>

              {/* Sentiment bar */}
              <div className="mb-6">
                <p className="text-xs text-surface-400 mb-3 uppercase tracking-wider">
                  Sentiment Distribution
                </p>
                <SentimentBar
                  bullish={DEMO_SENTIMENT.bullish}
                  neutral={DEMO_SENTIMENT.neutral}
                  bearish={DEMO_SENTIMENT.bearish}
                  className="h-4"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-bullish/5 border border-bullish/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-bullish">
                    <AnimatedNumber value={DEMO_SENTIMENT.bullish} delay={0.5} />
                  </p>
                  <p className="text-xs text-surface-400 mt-1">Bullish</p>
                </div>
                <div className="bg-neutral-sentiment/5 border border-neutral-sentiment/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-neutral-sentiment">
                    <AnimatedNumber value={DEMO_SENTIMENT.neutral} delay={0.7} />
                  </p>
                  <p className="text-xs text-surface-400 mt-1">Neutral</p>
                </div>
                <div className="bg-bearish/5 border border-bearish/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-bearish">
                    <AnimatedNumber value={DEMO_SENTIMENT.bearish} delay={0.9} />
                  </p>
                  <p className="text-xs text-surface-400 mt-1">Bearish</p>
                </div>
              </div>

              {/* Sources */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-reddit" />
                    <span className="text-xs text-surface-300">{DEMO_SENTIMENT.sources.reddit} posts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-twitter" />
                    <span className="text-xs text-surface-300">{DEMO_SENTIMENT.sources.twitter} posts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-bullish" />
                    <span className="text-xs text-surface-300">{DEMO_SENTIMENT.sources.news} articles</span>
                  </div>
                </div>
              </div>

              {/* Confidence */}
              <div className="flex items-center gap-2 bg-brand-500/10 rounded-xl px-4 py-3 border border-brand-500/20">
                <Shield className="w-4 h-4 text-brand-400" />
                <span className="text-sm font-medium text-brand-300">
                  {DEMO_SENTIMENT.confidence} Confidence Analysis
                </span>
                <span className="ml-auto text-xs text-surface-500">
                  {DEMO_SENTIMENT.totalPosts} sources analyzed
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
