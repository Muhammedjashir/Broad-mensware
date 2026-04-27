import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import lifestyle from "@/assets/broad-lifestyle.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BROAD. — Mananthavady Premium Mens Wear" },
      { name: "description", content: "BROAD. is one of the top-rated clothing stores in Mananthavady offering stylish men's fashion, surplus collections and premium quality clothing." },
      { property: "og:title", content: "About — BROAD. Mananthavady" },
      { property: "og:description", content: "Premium men's fashion in Mananthavady, Kerala." },
      { property: "og:image", content: lifestyle },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-blend-gradient opacity-90" />
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-white/30 blur-3xl animate-blob" />
        <div className="container-px relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold">About BROAD.</p>
          <h1 className="mt-3 max-w-3xl font-display text-6xl leading-[1] md:text-8xl">
            <em className="italic">Bold</em> by design.<br />
            <span className="underline decoration-2 underline-offset-8">Built</span> for everyone.
          </h1>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={lifestyle} alt="BROAD. lifestyle" loading="lazy" width={1600} height={1024}
            className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">Our Story</p>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-6xl">A premium home for trendy men's fashion.</h2>
            <div className="divider mt-6 w-32" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              BROAD. is one of the top-rated clothing stores in Mananthavady offering
              stylish men's fashion, surplus collections, premium quality clothing,
              and friendly customer service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From everyday essentials and street-ready hoodies to formal suits and
              imported surplus drops — we curate every piece so you don't have to.
              Our mission: make great style accessible to every guy in Wayanad.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
            {[
              ["4.9 ★", "Google Rating"],
              ["1000+", "Happy Customers"],
              ["#1", "Mens Store · Mananthavady"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-10 text-center">
                <div className="font-display text-6xl text-blend-gradient md:text-7xl">{k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 text-center">
        <h2 className="font-display text-5xl text-primary md:text-6xl">Step into the BROAD. world</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          Whether it's the perfect tee, a smart shirt or a fresh jacket — find your fit at BROAD.
        </p>
        <Link to="/shop"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blend-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:scale-105 transition-transform">
          Browse Collection <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
