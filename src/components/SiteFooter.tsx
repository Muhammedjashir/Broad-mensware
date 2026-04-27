import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blend-gradient text-white font-display text-xl italic">B</span>
              <span className="font-display text-3xl">BROAD<span className="text-blend-gradient">.</span></span>
            </div>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
              Mananthavady's premium destination for trendy men's fashion — curated
              collections, surplus drops, and friendly service that keeps you coming back.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-sm items-center gap-2 border-b border-primary-foreground/30 pb-2">
              <input
                type="email"
                required
                placeholder="Get drops in your inbox"
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-primary-foreground/50"
              />
              <button type="submit" aria-label="Subscribe" className="text-primary-foreground hover:text-blend-gradient hover:scale-110 transition-transform">
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-blend-gradient hover:border-transparent"
                aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="tel:06282143757"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-blend-gradient hover:border-transparent"
                aria-label="Call">
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-semibold text-blend-gradient">Shop</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-accent">T-Shirts</Link></li>
              <li><Link to="/shop" className="hover:text-accent">Hoodies</Link></li>
              <li><Link to="/shop" className="hover:text-accent">Jeans</Link></li>
              <li><Link to="/shop" className="hover:text-accent">Surplus</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-semibold text-blend-gradient">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" /> Near Century Hotel Road, Mananthavady, Kerala 670645</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" /> 062821 43757</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0" /> Open · Closes 10 PM</li>
            </ul>
          </div>
        </div>

        <div className="divider mt-12" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} BROAD. All rights reserved.</p>
          <p>Premium Mens Wear · Mananthavady · Kerala</p>
        </div>
      </div>
    </footer>
  );
}
