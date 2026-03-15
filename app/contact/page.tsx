import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - StockMood",
  description:
    "Get in touch with the StockMood team. We'd love to hear from you.",
};

export default function Contact() {
  return (
    <main className="min-h-screen py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12 lg:py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 mb-8">
            <Mail className="w-7 h-7 text-brand-400" />
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-surface-50 mb-4">
            Get in Touch
          </h1>
          <p className="text-surface-400 text-base leading-relaxed max-w-md mx-auto mb-10">
            Have a question, feedback, or just want to say hello? We&apos;d love
            to hear from you.
          </p>

          <a
            href="mailto:support@stockmood.app"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            support@stockmood.app
          </a>

          <p className="text-surface-500 text-xs mt-6">
            We typically respond within 24 hours.
          </p>
        </div>
      </div>
    </main>
  );
}
