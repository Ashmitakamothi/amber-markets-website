import { ArrowRight, Users, DollarSign, BarChart3 } from "lucide-react";

export function Affiliate() {
  return (
    <section id="affiliate" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border-gradient-gold p-8 sm:p-12 lg:p-16 shadow-elevated">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-deep/20 blur-[120px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
                <span className="text-gold">AFFILIATE PROGRAM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Earn up to <span className="text-gradient-gold">25%</span><br />
                lifetime commission
              </h2>
              <p className="text-muted-foreground max-w-md">
                Refer traders to Amber Markets and earn recurring revenue on every challenge they buy — forever.
                Industry-leading payouts, real-time dashboard, dedicated affiliate manager.
              </p>
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.04] active:scale-95">
                Become an Affiliate
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: DollarSign, title: "25% Commission", desc: "On every challenge purchase, lifetime." },
                { icon: Users, title: "Unlimited Referrals", desc: "No caps. The more you refer, the more you earn." },
                { icon: BarChart3, title: "Real-Time Tracking", desc: "Dashboard updates live with every conversion." },
              ].map((f) => (
                <div key={f.title} className="glass-strong rounded-xl p-5 flex items-start gap-4 hover-lift">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground shadow-glow-sm">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
