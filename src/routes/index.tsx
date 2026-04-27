import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Star, MapPin, Phone, Instagram, X, Truck, Store, Heart, Tag, Smile, Flame } from "lucide-react";
import hero from "@/assets/broad-hero.jpg";
import lifestyle from "@/assets/broad-lifestyle.jpg";
import tshirt from "@/assets/broad-tshirt.jpg";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BROAD. — Premium Mens Clothing in Mananthavady, Kerala" },
      { name: "description", content: "Wear Bold. Wear BROAD. Premium men's wear, trendy styles, surplus collections & best fashion in Mananthavady, Wayanad, Kerala." },
      { name: "keywords", content: "BROAD Mananthavady, Mens Wear Mananthavady, Clothing Store Kerala, Best Mens Fashion Wayanad, Trendy Clothes Kerala" },
      { property: "og:title", content: "BROAD. — Premium Mens Wear, Mananthavady" },
      { property: "og:description", content: "Trendy men's clothing, surplus & accessories in Mananthavady, Kerala." },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const testimonials = [
  { name: "Rahul K.", text: "Very good clothing store with nice quality clothes. Love the variety!", rating: 5 },
  { name: "Sreenivasan P.", text: "Friendly service and trendy collections — my go-to spot in Mananthavady.", rating: 5 },
  { name: "Ajith M.", text: "One of the best shops for men's wear in Wayanad. Highly recommended.", rating: 5 },
  { name: "Faisal R.", text: "Variety of collection, premium quality and great pricing.", rating: 5 },
  { name: "Vishnu T.", text: "Nice customer service. They genuinely help you find your fit.", rating: 5 },
];

function useCountdown(target: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function HomePage() {
  const featured = products.slice(0, 8);
  const [tIdx, setTIdx] = useState(0);
  const [showOffer, setShowOffer] = useState(false);
  const [loading, setLoading] = useState(true);
  const target = useState(() => Date.now() + 1000 * 60 * 60 * 30)[0];
  const cd = useCountdown(target);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowOffer(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Premium intro loader */}
      {loading && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-background">
          <div className="text-center animate-fade-up">
            <div className="font-display text-6xl md:text-8xl text-primary">
              BROAD<span className="text-blend-gradient">.</span>
            </div>
            <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-border">
              <div className="h-full w-1/2 animate-marquee bg-blend-gradient" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Wear Bold</p>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        {/* Animated gradient backdrop */}
        <div className="absolute inset-0 bg-blend-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-white/30 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-blob" />

        <div className="container-px relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 py-24 md:grid-cols-2">
          <div className="text-white">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] backdrop-blur animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> New Season · 2026
            </span>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7rem] animate-fade-up">
              Wear <em className="italic">Bold.</em><br />
              Wear <span className="underline decoration-2 underline-offset-8">BROAD.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg animate-fade-up">
              Premium Men's Wear, Trendy Styles & the Best Collections in
              Mananthavady — curated for the bold, made for the everyday.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-transform hover:scale-105">
                Shop Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/store"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-primary">
                Visit Store
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6 text-xs text-white/85">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-white text-white" />)}
              </div>
              <span className="tracking-wider">4.9 · Rated by Mananthavady</span>
            </div>
          </div>

          {/* Hero image card */}
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-[2rem] bg-white/20 blur-2xl" />
            <img
              src={hero}
              alt="BROAD. premium menswear hero model"
              width={1920}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
            />
            {/* Floating glass cards */}
            <div className="absolute -left-4 bottom-10 hidden rounded-2xl glass p-4 shadow-xl md:block">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Trending</p>
              <p className="mt-1 font-display text-xl text-primary">Sand Bomber</p>
              <p className="text-xs text-muted-foreground">From ₹2,899</p>
            </div>
            <div className="absolute -right-4 top-10 hidden rounded-2xl glass p-4 shadow-xl md:block">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Bestseller</p>
              <p className="mt-1 font-display text-xl text-primary">Indigo Slim</p>
              <p className="text-xs text-muted-foreground">From ₹1,899</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-border bg-background">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { icon: Sparkles, title: "Premium Quality", text: "Carefully curated" },
            { icon: Truck, title: "Home Delivery", text: "Across Wayanad" },
            { icon: Store, title: "In-Store Pickup", text: "Skip the wait" },
            { icon: ShieldCheck, title: "4.9 ★ Trusted", text: "Loved locally" },
          ].map((v) => (
            <div key={v.title} className="flex items-center gap-4 bg-background p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blend-gradient text-white">
                <v.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">{v.title}</p>
                <p className="text-xs text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">Categories</p>
            <h2 className="mt-3 font-display text-5xl text-primary md:text-7xl">Shop the Look</h2>
          </div>
          <Link to="/shop" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:text-accent md:inline-flex">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {categories.filter(c => c.name !== "All").map((c, i) => (
            <Link key={c.name} to="/shop"
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary transition-transform hover:-translate-y-1">
              {c.image && (
                <img src={c.image} alt={c.name} loading="lazy" width={800} height={600}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">{String(i + 1).padStart(2, "0")} · Edit</span>
                <h3 className="mt-1 font-display text-3xl md:text-4xl">{c.name}</h3>
                <p className="mt-1 text-xs opacity-80">{c.description}</p>
                <ArrowRight className="mt-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FLASH SALE / COUNTDOWN with rotating tee */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
        <div className="absolute inset-0 bg-blend-gradient opacity-30" />
        <div className="container-px relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] backdrop-blur">
              <Flame className="h-3 w-3" /> Flash Sale Live
            </span>
            <h2 className="mt-4 font-display text-5xl leading-[1] md:text-7xl">
              New Arrivals.<br />
              <span className="text-blend-gradient italic">Limited drops.</span>
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/70">
              Cop the latest BROAD. drops before the timer runs out.
              Surplus branded pieces & exclusive fits — only while stocks last.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-4 gap-3">
              {[
                { l: "Days", v: cd.d },
                { l: "Hours", v: cd.h },
                { l: "Mins", v: cd.m },
                { l: "Secs", v: cd.s },
              ].map((b) => (
                <div key={b.l} className="rounded-2xl border border-white/20 bg-white/5 p-3 text-center backdrop-blur">
                  <div className="font-display text-3xl text-white tabular-nums">{String(b.v).padStart(2, "0")}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">{b.l}</div>
                </div>
              ))}
            </div>
            <Link to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:scale-105 transition-transform">
              Shop the Drop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-blend-gradient opacity-30 blur-3xl animate-blob" />
            <img src={tshirt} alt="BROAD. flash sale tee" loading="lazy" width={800} height={800}
              className="relative aspect-square w-4/5 rounded-3xl object-cover animate-spin-slow" />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">Featured</p>
              <h2 className="mt-3 font-display text-5xl text-primary md:text-6xl">This Week's Edit</h2>
            </div>
            <Link to="/shop" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:text-accent md:inline-flex">
              Shop All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <img src={lifestyle} alt="BROAD. lifestyle campaign" aria-hidden width={1920} height={1080} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="container-px relative z-10 mx-auto max-w-7xl text-white">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">AI Style Recommendation</span>
          <h2 className="mt-3 max-w-2xl font-display text-5xl leading-tight md:text-7xl">
            Built for you. <em className="italic text-blend-gradient">Styled smarter.</em>
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            Our in-store stylists handpick complete looks for every vibe — from
            casual evenings to formal moments. Drop in for a free style consultation.
          </p>
          <Link to="/store"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-transform hover:scale-105">
            Book a Style Visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE BROAD */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">Why Choose</p>
          <h2 className="mt-3 font-display text-5xl text-primary md:text-6xl">The BROAD. Promise</h2>
          <div className="divider mx-auto mt-6 w-32" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Sparkles, t: "Premium Quality", d: "Hand-picked fabrics, finished to last." },
            { icon: Tag, t: "Trendy Collections", d: "New drops chasing every season." },
            { icon: Smile, t: "Friendly Staff", d: "Real help from people who know fashion." },
            { icon: Heart, t: "Affordable Pricing", d: "Premium fits at fair, honest prices." },
            { icon: Truck, t: "Delivery Available", d: "Order from anywhere in Wayanad." },
            { icon: Store, t: "In-Store Pickup", d: "Browse online, collect in person." },
          ].map((x) => (
            <div key={x.t} className="group rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blend-gradient text-white transition-transform group-hover:scale-110">
                <x.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-primary">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">Reviews</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Loved by Locals</h2>
          <div className="divider mx-auto mt-6 w-32" />
          <div className="relative mt-12 min-h-[220px]">
            {testimonials.map((tt, i) => (
              <figure key={i} className={`absolute inset-0 transition-opacity duration-700 ${tIdx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: tt.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-white text-white" />)}
                </div>
                <blockquote className="mt-5 font-display text-3xl leading-snug md:text-4xl">"{tt.text}"</blockquote>
                <figcaption className="mt-5 text-[11px] uppercase tracking-[0.3em] text-blend-gradient font-semibold">— {tt.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} aria-label={`Review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${tIdx === i ? "w-8 bg-blend-gradient" : "w-1.5 bg-white/30"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">@broadmananthavady</p>
            <h2 className="mt-3 font-display text-5xl text-primary md:text-6xl">On the 'Gram</h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:text-accent md:inline-flex">
            Follow Us <Instagram className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[hero, lifestyle, products[0].image, products[3].image, products[4].image, products[6].image, products[8].image, lifestyle].map((src, i) => (
            <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl">
              <img src={src} alt="Instagram post" loading="lazy" width={500} height={500}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-blend-gradient opacity-0 transition-opacity group-hover:opacity-90">
                <Instagram className="h-7 w-7 text-white" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* VISIT STORE */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">Visit Store</p>
            <h2 className="mt-3 font-display text-5xl text-primary md:text-6xl">Pull up to BROAD.</h2>
            <div className="divider mt-6 w-32" />
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              Step into our Mananthavady store, try the fits in person, and walk out
              feeling fresh. Open daily till 10 PM.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3 text-primary"><MapPin className="h-5 w-5 text-accent" /> Near Century Hotel Road, Mananthavady, Kerala 670645</li>
              <li className="flex gap-3 text-primary"><Phone className="h-5 w-5 text-accent" /> 062821 43757</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://maps.google.com/?q=BROAD+Century+Hotel+Road+Mananthavady+Kerala+670645" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:opacity-90">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a href="tel:06282143757"
                className="inline-flex items-center gap-2 rounded-full bg-blend-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" /> Call Store
              </a>
              <a href="https://wa.me/916282143757" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border">
            <iframe title="BROAD. Store Location"
              src="https://www.google.com/maps?q=Century+Hotel+Road+Mananthavady+Kerala+670645&output=embed"
              loading="lazy" className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Offer popup */}
      {showOffer && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/70 px-4 backdrop-blur-sm animate-fade-up">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-background shadow-2xl">
            <button onClick={() => setShowOffer(false)} aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-80">
              <X className="h-4 w-4" />
            </button>
            <div className="bg-blend-gradient p-8 text-center text-white">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold">First Visit Offer</p>
              <h3 className="mt-3 font-display text-5xl">Flat 20% Off</h3>
              <p className="mt-3 text-sm text-white/90">On your first in-store purchase. Show this screen at the counter — limited time.</p>
              <Link to="/shop" onClick={() => setShowOffer(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Browse Drops <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
