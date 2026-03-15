"use client";

import { type ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[280px] h-[580px] rounded-[44px] border-[3px] border-surface-700 bg-surface-900 shadow-2xl shadow-brand-500/20 ${className}`}
    >
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-surface-950 rounded-full z-10" />

      {/* Screen content */}
      <div className="absolute inset-[3px] rounded-[40px] overflow-hidden bg-surface-950">
        {children}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-surface-600 rounded-full" />
    </div>
  );
}
