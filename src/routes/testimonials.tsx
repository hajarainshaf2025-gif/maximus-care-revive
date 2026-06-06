import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { GOOGLE_REVIEWS, TESTIMONIALS } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials — Maximus Care Recoveries" },
      {
        name: "description",
        content:
          "Real recovery stories from patients we have treated across Sri Lanka — stroke, surgery, sports injuries, chronic pain and more.",
      },
      { property: "og:title", content: "Patient Testimonials — Maximus Care" },
      { property: "og:description", content: "Recoveries we are proud of." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Patient Stories"
        title="Recoveries we are proud of."
        intro="Real patients. Real recoveries. Real lives restored."
      />
      <section className="pt-16 container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-3xl bg-card border border-border p-6 shadow-soft">
          <div className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <span className="text-2xl font-bold text-foreground">
            {GOOGLE_REVIEWS.rating} Google Rating
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="text-lg font-semibold text-muted-foreground">
            {GOOGLE_REVIEWS.count} Reviews
          </span>
        </div>
      </section>
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-card transition-shadow"
          >
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-lg text-foreground/90 leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border">
              <p className="font-semibold text-lg">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </SiteLayout>
  );
}
