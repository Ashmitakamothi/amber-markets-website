const payouts = [
  { name: "Marcus W.", flag: "🇺🇸", amount: "$12,480", account: "$200K" },
  { name: "Alina K.", flag: "🇦🇪", amount: "$8,920", account: "$100K" },
  { name: "Hiroshi T.", flag: "🇯🇵", amount: "$22,150", account: "$400K" },
  { name: "Sofia M.", flag: "🇪🇸", amount: "$5,640", account: "$50K" },
  { name: "Liam O.", flag: "🇮🇪", amount: "$15,300", account: "$200K" },
  { name: "Priya R.", flag: "🇮🇳", amount: "$9,870", account: "$100K" },
  { name: "Carlos V.", flag: "🇧🇷", amount: "$18,420", account: "$200K" },
  { name: "Noah B.", flag: "🇨🇦", amount: "$31,500", account: "$400K" },
  { name: "Elena P.", flag: "🇮🇹", amount: "$6,720", account: "$50K" },
  { name: "Ahmed S.", flag: "🇪🇬", amount: "$14,090", account: "$200K" },
];

export function Payouts() {
  const loop = [...payouts, ...payouts];
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-4">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span>Live Payouts</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Real Traders. <span className="text-gradient-gold">Real Payouts.</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          Every week we pay out millions to traders just like you. Join the winning side.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-4 animate-scroll-x w-max">
          {loop.map((p, i) => (
            <div
              key={i}
              className="glass rounded-2xl px-6 py-5 min-w-[260px] hover-lift"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{p.flag}</div>
                  <div>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.account} account</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Payout</div>
                  <div className="text-2xl font-bold text-gradient-gold">{p.amount}</div>
                </div>
                <div className="text-xs text-success">✓ Paid</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
