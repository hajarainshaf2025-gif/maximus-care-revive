import { createFileRoute } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { PROGRAMS } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Rehabilitation Programs — Stroke, Neuro, Sports | Maximus Care" },
      { name: "description", content: "Structured rehabilitation programs for stroke, Parkinson's, spinal cord injury, sports return-to-play, joint replacement and chronic pain in Sri Lanka." },
      { property: "og:title", content: "Rehabilitation Programs — Maximus Care" },
      { property: "og:description", content: "Structured rehabilitation programs designed for measurable, long-term recovery." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

function Programs() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Rehabilitation Programs" title="Structured programs built for measurable, long-term recovery." intro="Each program brings together physiotherapy, specialist therapy and family education in a clear, milestone-driven plan." />
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-6">
        {PROGRAMS.map(([title, desc], i) => (
          <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-card transition-shadow">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-accent text-accent-foreground font-bold text-lg shrink-0">{String(i+1).padStart(2,"0")}</div>
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">{title}</h2>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
