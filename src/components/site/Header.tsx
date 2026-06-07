import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex justify-center px-6 py-2">
          <span className="tracking-wide">{SITE.hours}</span>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center gap-2 flex-none">
          <img
            src={logo}
            alt="Maximus Care Physio and Rehab Unit logo"
            className="h-16 md:h-20 w-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-primary/8 font-semibold" }}
              className="text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted px-3 py-2 rounded-md transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Book Appointment
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden p-2 text-foreground rounded-md hover:bg-muted transition-colors"
        >
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
              activeProps={{ className: "text-primary bg-primary/8 font-semibold" }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:bg-muted"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-3 py-2.5 mt-2 rounded-md bg-primary text-primary-foreground text-center text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
