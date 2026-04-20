import { BarChart3, Globe2, Smartphone, Wallet } from "lucide-react";
import platformImg from "@/assets/platform-preview.jpg";

const features = [
  { icon: BarChart3, title: "Advanced Charts", desc: "MT4, MT5 & cTrader with 100+ indicators." },
  { icon: Globe2, title: "Global Markets", desc: "Forex, indices, metals, crypto & commodities." },
  { icon: Smartphone, title: "Mobile First", desc: "Trade anywhere from our native iOS & Android apps." },
  { icon: Wallet, title: "Instant Payouts", desc: "Withdraw via crypto, wire, or e-wallets in minutes." },
];

export function Platform() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-gold opacity-25 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border-gradient-gold shadow-elevated">
              <img
                src={platformImg}
                alt="Amber Markets trading platform"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <span className="text-gold">PLATFORM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              The <span className="text-gradient-gold">Pro-Grade</span> Trading Suite
            </h2>
            <p className="text-muted-foreground">
              Built for serious traders. Lightning-fast execution, deep liquidity, transparent pricing — and a
              dashboard that makes your edge unmissable.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {features.map((f) => (
                <div key={f.title} className="glass rounded-xl p-4 hover-lift">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground shadow-glow-sm">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
