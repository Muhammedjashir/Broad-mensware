import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X, Heart, Moon, Sun } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/store", label: "Store" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      {/* Offer marquee */}
      <div className="overflow-hidden bg-blend-gradient text-white text-xs">
        <div className="flex animate-marquee whitespace-nowrap py-2 font-medium tracking-[0.25em] uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-12 px-6">
              <span>◆</span><span>New Drops Every Week</span>
              <span>◆</span><span>Free Delivery in Wayanad</span>
              <span>◆</span><span>In-Store Pickup Available</span>
              <span>◆</span><span>Call 062821 43757</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all ${
          scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
          <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blend-gradient text-white font-display text-lg italic transition-transform group-hover:rotate-6">B</span>
            <span className="font-display text-2xl tracking-tight md:text-3xl text-primary">
              BROAD<span className="text-blend-gradient">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
                className="text-[12px] font-medium uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setSearch((s) => !s)} aria-label="Search" className="hover:text-accent transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button onClick={() => setDark((d) => !d)} aria-label="Toggle dark mode" className="hidden hover:text-accent transition-colors sm:block">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button aria-label="Wishlist" className="hidden hover:text-accent transition-colors sm:block">
              <Heart className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="relative hover:text-accent transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-blend-gradient px-1 text-[10px] font-bold text-white">0</span>
            </button>
          </div>
        </div>

        {search && (
          <div className="border-t border-border bg-background animate-fade-up">
            <div className="container-px mx-auto max-w-7xl py-4">
              <div className="flex items-center gap-3 border-b border-accent pb-2">
                <Search className="h-5 w-5 shrink-0 text-accent" />
                <input
                  autoFocus
                  placeholder="Search t-shirts, jeans, jackets..."
                  className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
                />
                <button onClick={() => setSearch(false)} aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-background p-6 animate-fade-up">
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl text-primary">BROAD<span className="text-blend-gradient">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-5">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-primary hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
