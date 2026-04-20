import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How does the Amber Markets challenge work?",
    a: "Choose a 1-step or 2-step evaluation, hit the profit target while respecting the drawdown rules, and you'll get funded with a live capital account. Keep up to 90% of profits.",
  },
  {
    q: "How long does it take to get funded?",
    a: "Most traders pass within 2–4 weeks. There's no minimum trading day requirement — once you hit the targets, your funded account is issued within 24 hours.",
  },
  {
    q: "What instruments can I trade?",
    a: "Forex pairs (majors, minors, exotics), indices, metals (XAU, XAG), commodities and major cryptocurrencies — all with tight institutional spreads.",
  },
  {
    q: "How and when do I get paid?",
    a: "Payouts run bi-weekly. Withdraw via crypto (USDT/BTC), wire transfer or e-wallet. First payout available 14 days after your first trade on the funded account.",
  },
  {
    q: "Can I use Expert Advisors (EAs) and copy trading?",
    a: "Yes — most automated strategies are allowed. HFT, latency arbitrage and tick-scalping bots are restricted. Full list in our Trading Rules page.",
  },
  {
    q: "What happens if I break a rule?",
    a: "You'll receive an instant breach notification. You can purchase a new challenge with our 25% reset discount and start fresh.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface-alt">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Everything you need to know before starting.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`glass rounded-2xl overflow-hidden transition-all ${isOpen ? "border-gold/30 glow-gold-sm" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-base">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 text-gold flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
