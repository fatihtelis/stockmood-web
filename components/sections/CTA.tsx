"use client";

import { Apple, Smartphone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-50 mb-6">
            Start Reading Market{" "}
            <span className="text-gradient">Sentiment</span>{" "}
            Today
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Download StockMood and make data-driven investment decisions with
            AI-powered social sentiment analysis. Free to download, no credit
            card required.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button href="#" variant="primary" size="large">
              <Apple className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button href="#" variant="secondary" size="large">
              <Smartphone className="w-5 h-5" />
              Get on Android
            </Button>
          </div>

          <p className="text-xs text-surface-500">
            Available on iOS 15+ and Android 7.0+
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
