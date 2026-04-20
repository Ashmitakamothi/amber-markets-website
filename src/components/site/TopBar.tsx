import { Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <div className="relative z-50 overflow-hidden border-b border-border/40 bg-gradient-gold-soft">
      <div className="container mx-auto flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm">
        <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
        <span className="text-foreground/90">
          🔥 Limited offer: <span className="font-semibold text-gradient-gold">25% OFF</span> all challenges — use code{" "}
          <span className="font-mono font-bold text-gold">AMBER25</span>
        </span>
      </div>
    </div>
  );
}
