import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Physiotherapy & Rehabilitation Services — Maximus Care Sri Lanka" },
      { name: "description", content: "20+ specialised physiotherapy and rehabilitation services in Sri Lanka including stroke, neuro, sports, pain management, hijama, acupuncture and aqua therapy." },
      { property: "og:title", content: "Services — Maximus Care" },
      { property: "og:description", content: "20+ specialised physiotherapy and rehabilitation services in Sri Lanka." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our Services" title="20 specialised rehabilitation therapies under one roof." intro="From neurological rehabilitation to traditional therapies, every Maximus Care service is delivered by qualified clinicians using evidence-based methods." />
      <section className="py-20 container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(([title, desc]) => (
            <article key={title} className="group rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground"><Stethoscope className="h-6 w-6" /></div>
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
