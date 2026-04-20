import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-amber.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Trading Rules", href: "#rules" },
  { label: "About Us", href: "#about" },
  { label: "Affiliate", href: "#affiliate" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass-strong border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Amber Markets" className="h-9 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/90 transition hover:text-gold">
            Login
          </button>
          <button className="rounded-lg bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition hover:scale-[1.03] hover:shadow-glow active:scale-95">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-md p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 glass-strong">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium">Login</button>
              <button className="rounded-lg bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
