import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "StockMood - AI-Powered Stock Sentiment Analysis",
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
  description:
    "Analyze Reddit, Twitter, and financial news sentiment for any stock. Get AI-powered insights, executive summaries, and confidence-scored recommendations for smarter investing.",
  keywords: [
    "stock sentiment",
    "AI analysis",
    "Reddit stocks",
    "market mood",
    "investment insights",
    "sentiment analysis",
    "stock market",
  ],
  openGraph: {
    title: "StockMood - Know What the Market Thinks",
    description:
      "AI-powered stock sentiment analysis from Reddit, Twitter, and news. Make data-driven investment decisions.",
    type: "website",
    siteName: "StockMood",
  },
  twitter: {
    card: "summary_large_image",
    title: "StockMood - AI Stock Sentiment Analysis",
    description:
      "Real-time market sentiment from social media and news. Download now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-jakarta antialiased bg-surface-950 text-surface-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
