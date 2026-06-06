import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { BRANCHES, SITE } from "@/lib/site";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Maximus Care — Call, WhatsApp or Visit" },
      { name: "description", content: "Contact Maximus Care Physio & Rehab Unit. Call 077 647 9364, WhatsApp us, or visit any of our 4 branches across Sri Lanka. Open daily 9am-9pm." },
      { property: "og:title", content: "Contact — Maximus Care" },
      { property: "og:description", content: "Reach our rehabilitation team — daily 9am-9pm." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! Our team will reach out shortly.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact Us" title="We're here whenever recovery begins." intro="Speak with our rehabilitation team — by phone, WhatsApp or message. We respond every day, 9 AM to 9 PM." />
      <section className="py-16 container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <div className="mt-6 space-y-4">
            <a href={`tel:${SITE.phoneIntl}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card transition-shadow">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground"><Phone className="h-5 w-5" /></div>
              <div><p className="font-semibold">Call us</p><p className="text-muted-foreground">{SITE.phone}</p></div>
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card transition-shadow">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-success text-success-foreground"><MessageCircle className="h-5 w-5" /></div>
              <div><p className="font-semibold">WhatsApp</p><p className="text-muted-foreground">{SITE.whatsappDisplay}</p></div>
            </a>
            <a href={`https://wa.me/${SITE.whatsapp2}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card transition-shadow">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-success text-success-foreground"><MessageCircle className="h-5 w-5" /></div>
              <div><p className="font-semibold">WhatsApp</p><p className="text-muted-foreground">{SITE.whatsapp2Display}</p></div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card transition-shadow">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-accent text-accent-foreground"><Mail className="h-5 w-5" /></div>
              <div><p className="font-semibold">Email</p><p className="text-muted-foreground">{SITE.email}</p></div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-secondary text-primary"><Clock className="h-5 w-5" /></div>
              <div><p className="font-semibold">Operating hours</p><p className="text-muted-foreground">{SITE.hours}</p></div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={SITE.facebook} aria-label="Facebook" className="grid place-items-center h-11 w-11 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href={SITE.instagram} aria-label="Instagram" className="grid place-items-center h-11 w-11 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href={`https://wa.me/${SITE.whatsapp}`} aria-label="WhatsApp" className="grid place-items-center h-11 w-11 rounded-full bg-success text-success-foreground"><MessageCircle className="h-5 w-5" /></a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-8 shadow-card space-y-4">
          <h2 className="text-2xl font-bold">Send a message</h2>
          <p className="text-sm text-muted-foreground">Tell us about your condition. Our care team will reply within working hours.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block text-sm">Name<input required name="name" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" /></label>
            <label className="block text-sm">Phone<input required name="phone" type="tel" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" /></label>
          </div>
          <label className="block text-sm">Email<input name="email" type="email" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" /></label>
          <label className="block text-sm">How can we help?<textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring resize-none" /></label>
          <button disabled={sending} type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3 font-semibold shadow-soft hover:shadow-glow transition-all disabled:opacity-60">
            <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send message"}
          </button>
        </form>
      </section>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold">Visit a branch</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BRANCHES.map((b) => (
              <a key={b.slug} href={b.directions} target="_blank" rel="noreferrer" className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                <span className="text-xs uppercase tracking-wider text-accent font-bold">{b.tag}</span>
                <h3 className="mt-2 font-semibold">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />{b.address}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
