import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import inpatientImg from "@/assets/inpatient.jpg";
import facilityImg from "@/assets/facility.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/inpatient")({
  head: () => ({
    meta: [
      { title: "Inpatient Rehabilitation Sri Lanka — Maximus Care" },
      {
        name: "description",
        content:
          "Dedicated inpatient rehabilitation in Sri Lanka with 3-4 daily sessions, neurological and post-surgical care, comfortable accommodation and family stay.",
      },
      { property: "og:title", content: "Inpatient Rehabilitation — Maximus Care" },
      {
        property: "og:description",
        content:
          "Round-the-clock rehabilitation with intensive daily therapy and supportive accommodation.",
      },
      { property: "og:url", content: "/inpatient" },
    ],
    links: [{ rel: "canonical", href: "/inpatient" }],
  }),
  component: Inpatient,
});

const FEATURES = [
  "3 to 4 rehabilitation sessions per day",
  "Personalized treatment plans",
  "Faster recovery approach",
  "Neurological rehabilitation",
  "Stroke rehabilitation",
  "Post-surgical rehabilitation",
  "Physiotherapy and exercise therapy",
  "Speech therapy support",
  "Pain management treatments",
  "Affordable rehabilitation packages",
  "Daily meals available",
  "Comfortable patient accommodation",
  "One family member or caregiver can stay",
  "Continuous monitoring and guidance",
  "Home transition planning",
];

function Inpatient() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Inpatient Rehabilitation"
        title="Dedicated Inpatient Rehabilitation for Faster Recovery."
        intro="For patients who need intensive therapy and close monitoring — multiple daily sessions, structured programs and a supportive recovery environment."
      />
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={inpatientImg}
          alt="Inpatient rehabilitation room"
          loading="lazy"
          className="rounded-3xl shadow-card object-cover aspect-[4/3] w-full"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything your recovery needs, under one roof.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Our inpatient unit is designed around intensive, structured recovery — combining
            physiotherapy, neurological rehab, speech therapy, pain management and 24-hour clinical
            support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              <Phone className="h-4 w-4" /> Call to enquire
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="inline-flex items-center gap-2 rounded-full bg-success text-success-foreground px-6 py-3 font-semibold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Key features of our inpatient program
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-xl bg-card border border-border p-5 shadow-soft"
              >
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 container mx-auto px-6">
        <img
          src={facilityImg}
          alt="Modern inpatient facility"
          loading="lazy"
          className="rounded-3xl shadow-card object-cover w-full aspect-[21/9]"
        />
      </section>
    </SiteLayout>
  );
}
