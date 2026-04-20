import { ArrowRight, Play, ShieldCheck, Zap } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold-deep/15 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-foreground/90">Now funding traders worldwide — up to $400K</span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Trade Bigger.<br />
              <span className="text-gradient-gold">Get Funded</span> Faster.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Prove your edge in our 1-step or 2-step challenge and trade up to{" "}
              <span className="text-gold font-semibold">$400,000</span> of our capital. Keep up to{" "}
              <span className="text-gold font-semibold">90%</span> of profits with bi-weekly payouts.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.04] active:scale-95">
                Start Challenge
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-gold/40 hover:text-gold">
                <Play className="h-4 w-4" />
                View Plans
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Regulated & Secure
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-gold" /> Instant payouts
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">★★★★★</span> 4.9 / 5 Trustpilot
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border-gradient-gold shadow-elevated">
              <img
                src={heroImg}
                alt="Amber Markets premium trading dashboard"
                width={1536}
                height={1024}
                className="w-full h-auto"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex glass-strong rounded-2xl px-4 py-3 shadow-card animate-pulse-glow">
              <div>
                <div className="text-xs text-muted-foreground">Today's Payouts</div>
                <div className="text-lg font-bold text-gradient-gold">$1,284,950</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
