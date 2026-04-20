import { useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = {
  "2-step": [
    { size: "$10K", price: "$89", profit: "80%", target: "8% / 5%" },
    { size: "$25K", price: "$199", profit: "80%", target: "8% / 5%" },
    { size: "$50K", price: "$299", profit: "85%", target: "8% / 5%", popular: true },
    { size: "$100K", price: "$499", profit: "90%", target: "8% / 5%" },
  ],
  "1-step": [
    { size: "$10K", price: "$119", profit: "80%", target: "10%" },
    { size: "$25K", price: "$249", profit: "80%", target: "10%" },
    { size: "$50K", price: "$399", profit: "85%", target: "10%", popular: true },
    { size: "$100K", price: "$649", profit: "90%", target: "10%" },
  ],
};

export function Pricing() {
  const [tab, setTab] = useState<"2-step" | "1-step">("2-step");

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Choose Your <span className="text-gradient-gold">Challenge</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            Pick the path that fits your style. Pass once, get funded for life.
          </p>

          <div className="mt-8 inline-flex glass rounded-full p-1.5">
            {(["2-step", "1-step"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  tab === k ? "bg-gradient-gold text-primary-foreground shadow-glow-sm" : "text-foreground/70"
                }`}
              >
                {k === "2-step" ? "2-Step Challenge" : "1-Step Express"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans[tab].map((p) => (
            <div
              key={p.size}
              className={`relative rounded-2xl p-6 hover-lift transition ${
                p.popular
                  ? "border-gradient-gold glow-gold-sm bg-card"
                  : "glass"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow-sm">
                  <Zap className="h-3 w-3" /> Most Popular
                </div>
              )}
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Account Size</div>
              <div className="mt-1 text-3xl font-bold text-gradient-gold">{p.size}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  `Profit Split: ${p.profit}`,
                  `Profit Target: ${p.target}`,
                  "5% Daily / 10% Max DD",
                  "Bi-weekly payouts",
                  "Scale up to $400K",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-7 w-full rounded-xl py-3 text-sm font-semibold transition active:scale-95 ${
                  p.popular
                    ? "bg-gradient-gold text-primary-foreground shadow-glow-sm hover:shadow-glow"
                    : "glass hover:border-gold/40 hover:text-gold"
                }`}
              >
                Start Challenge
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
