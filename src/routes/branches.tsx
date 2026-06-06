import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, Phone } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { BRANCHES, SITE } from "@/lib/site";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — Maximus Care Rehab Centres in Sri Lanka" },
      {
        name: "description",
        content:
          "Visit Maximus Care at Dehiwala (main branch), Bandaragama, Beruwala and our specialised Neuro Unit in Kalubowila.",
      },
      { property: "og:title", content: "Branches — Maximus Care" },
      { property: "og:description", content: "Four rehabilitation centres across Sri Lanka." },
      { property: "og:url", content: "/branches" },
    ],
    links: [{ rel: "canonical", href: "/branches" }],
  }),
  component: Branches,
});

function Branches() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Branches"
        title="Quality rehabilitation, close to home."
        intro="Four rehabilitation centres across Sri Lanka — including a dedicated neurological unit and a partner physio centre."
      />
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-2 gap-8">
        {BRANCHES.map((b) => (
          <article
            key={b.slug}
            className="rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-card transition-shadow"
          >
            <iframe
              src={b.maps}
              title={`Map of ${b.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 border-0"
            />
            <div className="p-7">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-3 py-1">
                {b.tag}
              </span>
              <h2 className="mt-3 text-2xl font-semibold">{b.name}</h2>
              <p className="mt-2 text-muted-foreground flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary" />
                {b.address}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Open daily · {SITE.hours}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={b.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
                >
                  <Navigation className="h-4 w-4" /> Directions
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
