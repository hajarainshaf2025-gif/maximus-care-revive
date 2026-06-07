import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import facility from "@/assets/clinic.png";
import hero from "@/assets/main-web.png";
import neuro from "@/assets/neuro-rehab.jpg";
import inpatient from "@/assets/inpatient.jpg";
import aqua from "@/assets/aqua.jpg";
import sports from "@/assets/sport.png";
import home from "@/assets/home-visit.jpg";
import physio from "@/assets/physio1.png";
import elderly from "@/assets/elderly.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Maximus Care Facilities, Sessions & Patient Stories" },
      {
        name: "description",
        content:
          "See our clinic facilities, rehabilitation sessions, inpatient unit, neuro rehab, aqua therapy, home visits and patient success stories.",
      },
      { property: "og:title", content: "Gallery — Maximus Care" },
      { property: "og:description", content: "Inside Sri Lanka's leading rehabilitation centre." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: facility, cat: "Clinic Facilities", label: "Reception & facility" },
  { src: physio, cat: "Rehabilitation Sessions", label: "Modern physio gym" },
  { src: inpatient, cat: "Inpatient Rehabilitation", label: "Inpatient suite" },
  { src: neuro, cat: "Neurological Rehabilitation", label: "Neuro therapy" },
  { src: hero, cat: "Stroke Recovery", label: "Gait training" },
  { src: home, cat: "Home Visits", label: "Home therapy session" },
  { src: sports, cat: "Sports Rehabilitation", label: "Strength rehab" },
  { src: aqua, cat: "Aqua Therapy", label: "Hydrotherapy pool" },
  { src: elderly, cat: "Patient Success Stories", label: "Active recovery" },
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Gallery"
        title="Inside Maximus Care."
        intro="A glimpse of our facilities, our therapists at work, and the patients we are proud to serve."
      />
      <section className="py-16 container mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {ITEMS.map((it) => (
            <figure
              key={it.label}
              className="mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow group relative"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-primary/90 to-transparent text-white">
                <span className="block text-xs uppercase tracking-widest text-accent font-semibold">
                  {it.cat}
                </span>
                <span className="text-sm font-medium">{it.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
