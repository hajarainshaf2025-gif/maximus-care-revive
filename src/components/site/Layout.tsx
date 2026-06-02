import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="container mx-auto relative px-6 py-20 md:py-28">
        {eyebrow && <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-bold text-balance max-w-4xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">{intro}</p>}
      </div>
    </section>
  );
}
