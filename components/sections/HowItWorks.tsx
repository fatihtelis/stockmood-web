"use client";

import { Search, Brain, TrendingUp, type LucideIcon } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Brain,
  TrendingUp,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Three steps to{" "}
            <span className="text-gradient">smarter investing</span>
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Get from stock selection to actionable insights in minutes, not hours.
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerChildren className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[16.67%] right-[16.67%] h-[2px]">
            <div className="w-full h-full border-t-2 border-dashed border-brand-500/30" />
          </div>

          {/* Connecting line (mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-[2px]">
            <div className="w-full h-full border-l-2 border-dashed border-brand-500/30" />
          </div>

          {STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <StaggerItem key={step.number}>
                <div className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0">
                  {/* Step number bubble */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-surface-900 border-2 border-brand-500/30 flex items-center justify-center lg:mb-6">
                    {Icon && <Icon className="w-7 h-7 text-brand-400" />}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:text-center">
                    <h3 className="text-lg font-semibold text-surface-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-surface-400 leading-relaxed max-w-xs lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
