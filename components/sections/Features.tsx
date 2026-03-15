"use client";

import {
  Brain,
  Globe,
  FileText,
  Briefcase,
  History,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { FadeIn } from "@/components/ui/FadeIn";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Globe,
  FileText,
  Briefcase,
  History,
  Sparkles,
};

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Everything you need to read the{" "}
            <span className="text-gradient">market mood</span>
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Powerful AI analysis tools designed for modern investors who want an
            edge in understanding market sentiment.
          </p>
        </FadeIn>

        {/* Feature grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <div className="group relative p-6 rounded-2xl border border-surface-800 bg-surface-900/50 hover:bg-surface-800/50 hover:border-surface-700 transition-all duration-300 cursor-pointer h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-brand-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-brand-400" />}
                    </div>
                    <h3 className="text-lg font-semibold text-surface-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-surface-400 leading-relaxed">
                      {feature.description}
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
