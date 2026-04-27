import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Visit BROAD. — Century Hotel Road, Mananthavady" },
      { name: "description", content: "Visit BROAD. near Century Hotel Road, Mananthavady, Kerala 670645. Open daily till 10 PM. Call 062821 43757." },
      { property: "og:title", content: "Visit Our Store — BROAD. Mananthavady" },
      { property: "og:description", content: "Premium men's wear store in Mananthavady, Kerala." },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-blend-gradient opacity-90" />
        <div className="container-px relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold">Visit Us</p>
          <h1 className="mt-3 font-display text-6xl md:text-8xl">Our Store</h1>
          <p className="mt-4 max-w-xl text-base text-white/85">
            Pull up. Try the fits. Walk out fresh.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <Card icon={MapPin} title="Address">
              Near Century Hotel Road,<br />Mananthavady,<br />Kerala 670645
            </Card>
            <Card icon={Phone} title="Phone">
              <a href="tel:06282143757" className="hover:text-accent">062821 43757</a>
            </Card>
            <Card icon={Clock} title="Opening Hours">
              Open Daily · Closes 10 PM
            </Card>
            <Card icon={Instagram} title="Instagram">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent">Follow our drops</a>
            </Card>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://maps.google.com/?q=Century+Hotel+Road+Mananthavady+Kerala+670645" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:opacity-90">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a href="tel:06282143757"
                className="inline-flex items-center gap-2 rounded-full bg-blend-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 aspect-[4/3] overflow-hidden rounded-3xl border border-border">
            <iframe title="BROAD. Store Map"
              src="https://www.google.com/maps?q=Century+Hotel+Road+Mananthavady+Kerala+670645&output=embed"
              loading="lazy" className="h-full w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blend-gradient text-white">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{title}</h3>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
