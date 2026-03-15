import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { SentimentDemo } from "@/components/sections/SentimentDemo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { IS_APP_ONLINE } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <SentimentDemo />
      <HowItWorks />
      {IS_APP_ONLINE && <Testimonials />}
      {IS_APP_ONLINE && <CTA />}
    </main>
  );
}
