import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-amber.png";

const cols = [
  {
    title: "Product",
    links: ["Challenges", "Trading Rules", "Platform", "Scaling Plan"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["FAQ", "Blog", "Affiliate Program", "Help Center"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={logo} alt="Amber Markets" className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              The premium prop trading firm trusted by 48,000+ funded traders worldwide. Trade smart. Trade Amber.
            </p>
            <div className="flex gap-2 pt-2">
              {["𝕏", "in", "f", "▶"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:border-gold/40 hover:text-gold transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-semibold mb-4 text-sm">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-gold transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2025 Amber Markets. All rights reserved. Trading involves substantial risk and may not be suitable
            for all investors.
          </p>
          <p className="text-xs text-muted-foreground">Made with 🔥 for traders</p>
        </div>
      </div>
    </footer>
  );
}
