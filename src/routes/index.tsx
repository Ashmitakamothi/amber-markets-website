import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Payouts } from "@/components/site/Payouts";
import { Pricing } from "@/components/site/Pricing";
import { Platform } from "@/components/site/Platform";
import { Rules } from "@/components/site/Rules";
import { Affiliate } from "@/components/site/Affiliate";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amber Markets — Premium Prop Trading Firm | Get Funded up to $400K" },
      {
        name: "description",
        content:
          "Trade up to $400,000 of our capital. Pass our 1-step or 2-step challenge and keep up to 90% of profits with bi-weekly payouts. Join 48,000+ funded traders.",
      },
      { property: "og:title", content: "Amber Markets — Get Funded up to $400K" },
      { property: "og:description", content: "Premium prop trading firm. 90% profit split. Bi-weekly payouts." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Payouts />
        <Pricing />
        <Platform />
        <Rules />
        <Affiliate />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
