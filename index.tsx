import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, Award, Brain, CheckCircle2, ChevronRight, Heart, Home as HomeIcon, MapPin, MessageCircle, Phone, Sparkles, Star, Stethoscope, Users, Waves } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BRANCHES, GOOGLE_REVIEWS, SERVICES, SITE, STATS, TESTIMONIALS, WHY } from "@/lib/site";
import heroImg from "@/assets/hero-rehab.jpg";
import neuroImg from "@/assets/neuro-rehab.jpg";
import inpatientImg from "@/assets/inpatient.jpg";
import aquaImg from "@/assets/aqua.jpg";
import sportsImg from "@/assets/sports.jpg";
import homeImg from "@/assets/home-visit.jpg";
import physioImg from "@/assets/physio.jpg";
import elderlyImg from "@/assets/elderly.jpg";
import facilityImg from "@/assets/facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maximus Care" },
      { name: "description", content: "Sri Lanka's trusted physiotherapy & rehabilitation centre. Stroke, neurological, inpatient, sports & home-visit care. 5000+ patients, 4 branches." },
      { property: "og:title", content: "Maximus Care — Physiotherapy & Rehabilitation Sri Lanka" },
      { property: "og:description", content: "Helping patients recover, regain independence and rebuild their lives." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHY_ICONS = [Users, Sparkles, CheckCircle2, Brain, Heart, Award, HomeIcon, Stethoscope, MapPin, Activity, Heart, Users];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_20%,white,transparent_45%),radial-gradient(circle_at_85%_70%,oklch(0.74_0.16_60),transparent_50%)]" />
        <div className="container mx-auto relative px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Physiotherapy • Rehabilitation • Inpatient Care
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
              Sri Lanka's Trusted <span className="text-accent">Physiotherapy</span> & Rehabilitation Centre
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed">
              Helping patients recover, regain independence and rebuild their lives through advanced physiotherapy, rehabilitation and personalised care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-glow hover:scale-[1.02] transition-transform">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold hover:bg-white/90 transition-colors">
                <MessageCircle className="h-5 w-5" /> WhatsApp {SITE.whatsappDisplay}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp2}`} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold hover:bg-white/90 transition-colors">
                <MessageCircle className="h-5 w-5" /> WhatsApp {SITE.whatsapp2Display}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <div><strong className="text-3xl block text-white">5000+</strong>Patients Treated</div>
              <div><strong className="text-3xl block text-white">10,000+</strong>Treatment Sessions</div>
              <div><strong className="text-3xl block text-white">4</strong>Branches</div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-8 bg-gradient-accent opacity-30 blur-3xl rounded-full" />
            <img src={heroImg} alt="Physiotherapist helping elderly patient walk between parallel bars in rehabilitation gym" className="relative rounded-3xl shadow-glow w-full object-cover aspect-[4/3]" width={1600} height={1100} />
            <div className="absolute -bottom-6 -left-6 bg-white text-foreground rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[260px] animate-float">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-success/15 text-success"><Heart className="h-6 w-6" /></div>
              <div className="text-sm"><strong className="block">Long-Term Recovery</strong><span className="text-muted-foreground">Patient-centred care</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE GRID */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            [neuroImg, "Stroke & Neuro Rehab"],
            [physioImg, "Physiotherapy"],
            [sportsImg, "Sports Rehabilitation"],
            [elderlyImg, "Elderly Rehab"],
            [inpatientImg, "Inpatient Care"],
            [aquaImg, "Aqua Therapy"],
            [homeImg, "Home Visit Therapy"],
            [heroImg, "Modern Facilities"],
          ].map(([src, label]) => (
            <div key={label as string} className="group relative overflow-hidden rounded-2xl aspect-square shadow-soft">
              <img src={src as string} alt={label as string} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-white font-semibold text-sm md:text-base">{label as string}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Why Maximus Care</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">Comprehensive rehabilitation built around every patient</h2>
            <p className="mt-4 text-muted-foreground text-lg">Twelve reasons families across Sri Lanka trust Maximus Care with their most important recovery journeys.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w, i) => {
              const Icon = WHY_ICONS[i] ?? CheckCircle2;
              return (
                <div key={w} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shrink-0"><Icon className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">{w}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={facilityImg} alt="Modern physiotherapy and rehabilitation facility" loading="lazy" className="rounded-3xl shadow-card aspect-[4/3] object-cover w-full" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground rounded-2xl p-6 shadow-glow max-w-[220px]">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm text-primary-foreground/80 mt-1">years of dedicated physiotherapy service</p>
            </div>
          </div>
          <div>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">About Maximus Care</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">A physiotherapy home built on healing, dignity and science.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Maximus Care Physio & Rehab Unit (Pvt) Ltd is a leading physiotherapy and rehabilitation provider dedicated to helping patients recover from neurological conditions, stroke, surgery, sports injuries, chronic pain, and mobility limitations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission is to deliver affordable, evidence-based physiotherapy and rehabilitation that restores independence, improves quality of life, and supports long-term recovery.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Rehabilitation-focused care", "Community healthcare mission", "Professional multidisciplinary team", "Affordable & accessible services", "Long-term recovery support"].map(x => (
                <li key={x} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-success shrink-0" /> {x}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
              Read our full story <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Our Services</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">20 specialised physiotherapy & rehabilitation therapies under one roof</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent">All services <ChevronRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.slice(0, 8).map(([title, desc]) => (
              <div key={title} className="group rounded-2xl bg-card p-6 shadow-soft hover:shadow-card transition-shadow border border-transparent hover:border-primary/20">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground"><Stethoscope className="h-6 w-6" /></div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INPATIENT */}
      <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,white,transparent_45%)]" />
        <div className="container mx-auto relative px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Inpatient Rehabilitation</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">Dedicated Inpatient Rehabilitation for Faster Recovery</h2>
            <p className="mt-5 text-lg text-primary-foreground/85 leading-relaxed">
              Our inpatient program is built for patients who need intensive therapy and round-the-clock monitoring — with structured plans, multiple daily sessions and a supportive recovery environment.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {["3–4 sessions per day", "Personalised treatment plans", "Neurological & stroke rehab", "Post-surgical recovery", "Speech & pain therapy", "Comfortable accommodation", "One caregiver may stay", "Daily meals included", "Home transition planning"].map(x => (
                <div key={x} className="flex items-start gap-2 text-primary-foreground/90 text-sm"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> {x}</div>
              ))}
            </div>
            <Link to="/inpatient" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:bg-white/90 transition-colors">
              Explore inpatient program <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={inpatientImg} alt="Modern inpatient rehabilitation room" loading="lazy" className="rounded-3xl shadow-glow aspect-[4/3] object-cover w-full" />
          </div>
        </div>
      </section>

      {/* RESULTS / STATS */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {STATS.map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-gradient-soft border border-border p-6 shadow-soft">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">{n}</p>
                <p className="mt-2 text-sm text-muted-foreground font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME VISIT */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={homeImg} alt="Home visit physiotherapy" loading="lazy" className="rounded-3xl shadow-card aspect-[4/3] object-cover w-full order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Home Visit Service</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">Professional Physiotherapy & Rehabilitation at Your Home</h2>
            <p className="mt-5 text-muted-foreground text-lg">For patients who cannot travel, our therapists bring world-class rehabilitation directly to your doorstep.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
              {["Stroke Rehabilitation","Neurological Rehabilitation","Elderly Care","Post-Surgical Recovery","Pain Management","Wheelchair Patient Rehab","Home Exercise Programs","Long-Term Support"].map(x => (
                <li key={x} className="flex items-start gap-2"><Waves className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {x}</li>
              ))}
            </ul>
            <a href={`tel:${SITE.phoneIntl}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold shadow-soft hover:shadow-glow transition-all"><Phone className="h-4 w-4" /> Request a Home Visit</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Patient Stories</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Recoveries we are proud of</h2>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-secondary border border-border px-5 py-2.5 shadow-soft">
              <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <span className="text-sm font-bold text-foreground">{GOOGLE_REVIEWS.rating} Google Rating</span>
              <span className="text-sm text-muted-foreground">· {GOOGLE_REVIEWS.count} Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex gap-0.5 text-accent">{Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Our Branches</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Quality physiotherapy & rehabilitation, close to home</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BRANCHES.map((b) => (
              <div key={b.slug} className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-3 py-1">{b.tag}</span>
                <h3 className="mt-3 font-semibold text-lg">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />{b.address}</p>
                <a href={b.directions} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">Get directions <ChevronRight className="h-4 w-4" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-balance max-w-3xl mx-auto">Start the recovery journey today.</h2>
          <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">Speak directly with our physiotherapy team. We will guide you through the right program for your needs.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-glow"><Phone className="h-5 w-5" /> Call {SITE.phone}</a>
            <a href={`https://wa.me/${SITE.whatsapp}`} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold"><MessageCircle className="h-5 w-5" /> WhatsApp {SITE.whatsappDisplay}</a>
            <a href={`https://wa.me/${SITE.whatsapp2}`} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold"><MessageCircle className="h-5 w-5" /> WhatsApp {SITE.whatsapp2Display}</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

