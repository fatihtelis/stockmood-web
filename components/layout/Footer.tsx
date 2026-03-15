import Image from "next/image";
import Link from "next/link";
import { IS_APP_ONLINE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface-950 border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center mb-4">
              <Image
                src="/logo-white.svg"
                alt="StockMood"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-surface-400 text-sm max-w-sm leading-relaxed">
              AI-powered stock sentiment analysis from Reddit, Twitter, and financial news.
              Make data-driven investment decisions with real-time market mood insights.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold text-surface-200 mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#features" className="text-sm text-surface-400 hover:text-surface-200 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-sm text-surface-400 hover:text-surface-200 transition-colors">
                  How It Works
                </a>
              </li>
              {IS_APP_ONLINE && (
                <li>
                  <a href="/#testimonials" className="text-sm text-surface-400 hover:text-surface-200 transition-colors">
                    Testimonials
                  </a>
                </li>
              )}
              {IS_APP_ONLINE && (
                <li>
                  <a href="/#download" className="text-sm text-surface-400 hover:text-surface-200 transition-colors">
                    Download
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-surface-200 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-surface-400 hover:text-surface-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-surface-400 hover:text-surface-200 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-surface-400 hover:text-surface-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="mt-12 pt-8 border-t border-surface-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-surface-500">
              &copy; {new Date().getFullYear()} StockMood. All rights reserved.
            </p>
            <p className="text-xs text-surface-600 max-w-md text-center sm:text-right">
              StockMood provides sentiment analysis for informational purposes only.
              This is not financial advice. Always do your own research before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
