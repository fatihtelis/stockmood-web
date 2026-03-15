"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SentimentBar } from "@/components/ui/SentimentBar";
import { DEMO_SENTIMENT, IS_APP_ONLINE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-xs font-medium text-brand-300">
                AI-Powered Sentiment Analysis
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-50 leading-[1.1] tracking-tight mb-6">
              Know What the Market{" "}
              <span className="text-gradient">Thinks</span>{" "}
              Before It{" "}
              <span className="text-gradient">Moves</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-surface-400 max-w-lg mb-8 leading-relaxed">
              StockMood analyzes Reddit, Twitter, and financial news to deliver
              real-time sentiment insights with AI-powered confidence scores for
              smarter investing.
            </p>

            {IS_APP_ONLINE && (
              <>
                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button href="#download" variant="primary" size="large">
                    <Apple className="w-5 h-5" />
                    Download for iOS
                  </Button>
                  <Button href="#download" variant="secondary" size="large">
                    <Smartphone className="w-5 h-5" />
                    Get on Android
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-6 text-sm text-surface-500">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {["AM", "SK", "MR"].map((initials, i) => (
                        <div
                          key={initials}
                          className="w-7 h-7 rounded-full bg-surface-700 border-2 border-surface-950 flex items-center justify-center text-[10px] font-medium text-surface-300"
                          style={{ zIndex: 3 - i }}
                        >
                          {initials}
                        </div>
                      ))}
                    </div>
                    <span>1,000+ active traders</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="flex justify-center lg:justify-center relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Floating badges */}
            <motion.div
              className="absolute right-[75%] top-16 z-10 hidden lg:block"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-3 py-2 rounded-xl bg-bullish/10 border border-bullish/20 backdrop-blur-sm shadow-lg shadow-bullish/5">
                <span className="text-xs font-medium text-bullish">AAPL: Bullish 62%</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 top-[45%] z-10 hidden lg:block"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-3 py-2 rounded-xl bg-bearish/10 border border-bearish/20 backdrop-blur-sm shadow-lg shadow-bearish/5">
                <span className="text-xs font-medium text-bearish">TSLA: Bearish 52%</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute right-[50%] bottom-24 z-10 hidden lg:block"
              animate={{ y: [-3, 7, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-3 py-2 rounded-xl bg-neutral-sentiment/10 border border-neutral-sentiment/20 backdrop-blur-sm shadow-lg shadow-neutral-sentiment/5">
                <span className="text-xs font-medium text-neutral-sentiment">MSFT: Neutral 48%</span>
              </div>
            </motion.div>

            {/* Phone */}
            <PhoneMockup>
              <div className="p-4 pt-10">
                {/* App header mock */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[11px] text-surface-400">Analysis Result</p>
                    <p className="text-sm font-bold text-surface-50">{DEMO_SENTIMENT.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-surface-50">{DEMO_SENTIMENT.price}</p>
                    <p className="text-[11px] text-bullish">{DEMO_SENTIMENT.change}</p>
                  </div>
                </div>

                {/* Sentiment section */}
                <div className="bg-surface-800/50 rounded-2xl p-4 mb-4">
                  <p className="text-[11px] text-surface-400 mb-3">Sentiment Distribution</p>
                  <SentimentBar
                    bullish={DEMO_SENTIMENT.bullish}
                    neutral={DEMO_SENTIMENT.neutral}
                    bearish={DEMO_SENTIMENT.bearish}
                  />
                  <div className="flex justify-between mt-3">
                    <div className="text-center">
                      <p className="text-[11px] font-bold text-bullish">{DEMO_SENTIMENT.bullish}%</p>
                      <p className="text-[9px] text-surface-500">Bullish</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[11px] font-bold text-neutral-sentiment">{DEMO_SENTIMENT.neutral}%</p>
                      <p className="text-[9px] text-surface-500">Neutral</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[11px] font-bold text-bearish">{DEMO_SENTIMENT.bearish}%</p>
                      <p className="text-[9px] text-surface-500">Bearish</p>
                    </div>
                  </div>
                </div>

                {/* Sources mock */}
                <div className="bg-surface-800/50 rounded-2xl p-4 mb-4">
                  <p className="text-[11px] text-surface-400 mb-2">Sources Analyzed</p>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-reddit" />
                      <span className="text-[10px] text-surface-300">{DEMO_SENTIMENT.sources.reddit} posts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-twitter" />
                      <span className="text-[10px] text-surface-300">{DEMO_SENTIMENT.sources.twitter} posts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-bullish" />
                      <span className="text-[10px] text-surface-300">{DEMO_SENTIMENT.sources.news} articles</span>
                    </div>
                  </div>
                </div>

                {/* Confidence */}
                <div className="bg-brand-500/10 rounded-xl p-3 border border-brand-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-400" />
                    </div>
                    <span className="text-[11px] font-medium text-brand-300">
                      {DEMO_SENTIMENT.confidence} Confidence
                    </span>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
