// Set to true when the app is released and available for download
export const IS_APP_ONLINE = false;

export const FEATURES = [
  {
    icon: "Brain",
    title: "AI Sentiment Analysis",
    description:
      "AI analyzes social media posts and news for each stock, delivering bullish, bearish, and neutral classification with confidence scores.",
  },
  {
    icon: "Globe",
    title: "Multi-Source Intelligence",
    description:
      "Data from Reddit, Twitter, and financial news combined into a single comprehensive sentiment view for smarter decisions.",
  },
  {
    icon: "FileText",
    title: "Executive Summaries",
    description:
      "AI-generated reports with key themes, bullish and bearish factors, and market observations for every analysis you run.",
  },
  {
    icon: "Briefcase",
    title: "Smart Portfolio",
    description:
      "Add stocks, drag-and-drop reorder, and monitor real-time prices in your personalized watchlist with instant access.",
  },
  {
    icon: "History",
    title: "Analysis History",
    description:
      "Every analysis is saved with timestamps. Search through past results to track how sentiment changes over time.",
  },
  {
    icon: "Sparkles",
    title: "Personalized Suggestions",
    description:
      "5-step onboarding tailors stock recommendations to your trader type, risk tolerance, and investment goals.",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Add Your Stocks",
    description:
      "Search and add any NYSE or NASDAQ stock to your portfolio. Build your personalized watchlist in seconds.",
    icon: "Search",
  },
  {
    number: "02",
    title: "AI Analyzes Sentiment",
    description:
      "Our AI scrapes Reddit, Twitter, and news articles, then classifies each post as bullish, neutral, or bearish.",
    icon: "Brain",
  },
  {
    number: "03",
    title: "Get Actionable Insights",
    description:
      "Receive sentiment distributions, executive summaries, and confidence-scored recommendations instantly.",
    icon: "TrendingUp",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "StockMood completely changed how I research stocks. The sentiment analysis gives me an edge I never had before.",
    author: "Alex M.",
    role: "Day Trader",
    rating: 5,
    initials: "AM",
  },
  {
    quote:
      "I love seeing what Reddit and Twitter are saying about my positions. The executive summaries save me hours of research.",
    author: "Sarah K.",
    role: "Retail Investor",
    rating: 5,
    initials: "SK",
  },
  {
    quote:
      "The confidence scores help me gauge how reliable the sentiment data is. Essential tool for any serious investor.",
    author: "Michael R.",
    role: "Portfolio Manager",
    rating: 5,
    initials: "MR",
  },
];

export const DEMO_SENTIMENT = {
  symbol: "AAPL",
  company: "Apple Inc.",
  price: "$189.24",
  change: "+2.35%",
  bullish: 62,
  neutral: 23,
  bearish: 15,
  totalPosts: 54,
  confidence: "High" as const,
  sources: { reddit: 24, twitter: 18, news: 12 },
};

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  ...(IS_APP_ONLINE
    ? [{ label: "Testimonials", href: "/#testimonials" }]
    : []),
];
