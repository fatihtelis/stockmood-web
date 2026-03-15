"use client";

import { Star } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Trusted by{" "}
            <span className="text-gradient">smart investors</span>
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Join thousands of traders who use StockMood to gain an edge in
            understanding market sentiment.
          </p>
        </FadeIn>

        {/* Testimonial cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <div className="relative p-6 rounded-2xl border border-surface-800 bg-surface-900/50 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-brand-400 fill-brand-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-surface-300 text-sm leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-brand-300">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-surface-200">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-surface-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Trust metrics */}
        <FadeIn delay={0.4} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-surface-50">4.8</p>
              <div className="flex items-center gap-0.5 justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-brand-400 fill-brand-400"
                  />
                ))}
              </div>
              <p className="text-xs text-surface-500 mt-1">App Store Rating</p>
            </div>
            <div className="w-px h-10 bg-surface-800 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-surface-50">1,000+</p>
              <p className="text-xs text-surface-500 mt-1">Active Traders</p>
            </div>
            <div className="w-px h-10 bg-surface-800 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-surface-50">50+</p>
              <p className="text-xs text-surface-500 mt-1">Stocks Analyzed Daily</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
