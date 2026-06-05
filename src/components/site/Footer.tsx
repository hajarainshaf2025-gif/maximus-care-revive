import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/maximus-logo-long.asset.json";
import { BRANCHES, NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white/95 inline-block rounded-lg p-3 mb-4">
            <img src={logo.url} alt="Maximus Care" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Sri Lanka's trusted physiotherapy & rehabilitation provider — restoring movement, independence and quality of life.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={SITE.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 hover:bg-accent transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-accent transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href={`https://wa.me/${SITE.whatsapp}`} aria-label="WhatsApp" className="rounded-full bg-white/10 p-2.5 hover:bg-success transition-colors"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-accent transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Branches</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            {BRANCHES.map((b) => (
              <li key={b.slug} className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                <span><strong className="text-primary-foreground block">{b.name}</strong>{b.address}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> <a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-accent" /> <a href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp {SITE.whatsappDisplay}</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-accent" /> <a href={`https://wa.me/${SITE.whatsapp2}`}>WhatsApp {SITE.whatsapp2Display}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="text-primary-foreground/70">{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE.full}. All rights reserved.</p>
          <p>Physiotherapy • Rehabilitation • Inpatient Care • Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
