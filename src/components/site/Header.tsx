import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/maximus-logo-long.asset.json";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex justify-between px-6 py-2">
          <span>{SITE.hours}</span>
          <a href={`tel:${SITE.phoneIntl}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-3.5 w-3.5" /> {SITE.phone}
          </a>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo.url} alt="Maximus Care Physio and Rehab Unit logo" className="h-12 md:h-14 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="text-sm font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-md transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${SITE.phoneIntl}`}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:shadow-glow transition-all"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden p-2 text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-secondary"
            >
              {n.label}
            </Link>
          ))}
          <a href={`tel:${SITE.phoneIntl}`} className="block px-3 py-2 mt-2 rounded-md bg-gradient-accent text-accent-foreground text-center font-semibold">
            Call {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
