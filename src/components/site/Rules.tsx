import { Target, TrendingDown, Calendar, Trophy, Coins, Shield } from "lucide-react";

const rules = [
  { icon: Target, label: "Profit Target", value: "8% / 5%", note: "Phase 1 / Phase 2" },
  { icon: TrendingDown, label: "Max Daily Loss", value: "5%", note: "of starting balance" },
  { icon: Shield, label: "Max Overall DD", value: "10%", note: "of starting balance" },
  { icon: Calendar, label: "Min Trading Days", value: "0", note: "trade at your pace" },
  { icon: Trophy, label: "Profit Split", value: "Up to 90%", note: "after first payout" },
  { icon: Coins, label: "Scaling Plan", value: "+25% / 4mo", note: "up to $400K" },
];

export function Rules() {
  return (
    <section id="rules" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Simple, <span className="text-gradient-gold">Trader-First</span> Rules
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            No hidden gimmicks. Just clear targets that reward consistency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((r) => (
            <div key={r.label} className="glass rounded-2xl p-6 hover-lift group">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold-soft border border-gold/20 group-hover:scale-110 transition">
                  <r.icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{r.label}</span>
              </div>
              <div className="mt-5 text-3xl font-bold text-gradient-gold">{r.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
