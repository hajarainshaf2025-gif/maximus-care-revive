import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Heart, Target, Eye } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import facilityImg from "@/assets/facility.jpg";
import heroImg from "@/assets/hero-rehab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Maximus Care — Sri Lanka's Physiotherapy Specialists" },
      { name: "description", content: "Maximus Care is a leading physiotherapy and rehabilitation provider in Sri Lanka — restoring independence through evidence-based, affordable care." },
      { property: "og:title", content: "About Maximus Care" },
      { property: "og:description", content: "A physiotherapy home built on healing, dignity and science." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About Us" title="A physiotherapy home built on healing, dignity and science." intro="Maximus Care Physio & Rehab Unit (Pvt) Ltd is one of Sri Lanka's leading physiotherapy and rehabilitation providers." />
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img src={facilityImg} alt="Maximus Care facility" loading="lazy" className="rounded-3xl shadow-card object-cover aspect-[4/3] w-full" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Restoring lives, one recovery at a time</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            We are dedicated to helping patients recover from neurological conditions, stroke, surgery, sports injuries, chronic pain and mobility limitations. Our multidisciplinary team combines clinical excellence with genuine human care.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With four branches across Sri Lanka, a dedicated inpatient rehabilitation facility, and trusted home-visit services, we make world-class rehabilitation accessible to families everywhere.
          </p>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Our Mission", d: "To deliver affordable, evidence-based rehabilitation that restores independence and improves quality of life." },
            { i: Eye, t: "Our Vision", d: "To be Sri Lanka's most trusted rehabilitation network, known for long-term outcomes and patient dignity." },
            { i: Heart, t: "Our Values", d: "Compassion, clinical excellence, accessibility, and a relentless focus on each patient's recovery story." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card border border-border p-7 shadow-soft">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">What sets us apart</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Rehabilitation hospital standards. Community healthcare heart.</h2>
          <ul className="mt-6 space-y-3">
            {["Rehabilitation-focused care across every specialty","Community healthcare mission with affordable packages","Professional multidisciplinary team — physios, neuro-rehab, speech, pain","Long-term recovery support beyond discharge","Continuous patient and family education"].map(x => (
              <li key={x} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-success mt-1 shrink-0" /><span>{x}</span></li>
            ))}
          </ul>
          <Link to="/services" className="mt-8 inline-flex rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold">Explore our services</Link>
        </div>
        <img src={heroImg} alt="Therapy session" loading="lazy" className="rounded-3xl shadow-card object-cover aspect-[4/3] w-full" />
      </section>
    </SiteLayout>
  );
}
