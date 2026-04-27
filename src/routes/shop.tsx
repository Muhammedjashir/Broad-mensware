import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products, categories, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Mens Fashion — BROAD. Mananthavady" },
      { name: "description", content: "Shop premium men's t-shirts, shirts, jeans, jackets, hoodies, formal & surplus collections at BROAD., Mananthavady, Kerala." },
      { property: "og:title", content: "Shop — BROAD." },
      { property: "og:description", content: "Premium men's clothing & surplus drops in Mananthavady, Kerala." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCat = active === "All" || p.category === active;
      const okQ = q.trim() === "" ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.brand.toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [active, q]);

  return (
    <div className="container-px mx-auto max-w-7xl py-12 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blend-gradient font-semibold">The Shop</p>
        <h1 className="mt-3 font-display text-6xl text-primary md:text-8xl">All Drops</h1>
        <div className="divider mt-6 w-32" />
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          T-shirts, shirts, jeans, jackets and more — handpicked for the bold.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-3 rounded-full border border-border bg-secondary px-5 py-3">
        <Search className="h-5 w-5 text-accent" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search t-shirts, jeans, hoodies..."
          className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c.name)}
            className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all ${
              active === c.name
                ? "border-transparent bg-blend-gradient text-white"
                : "border-border text-muted-foreground hover:border-accent hover:text-primary"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 rounded-3xl border border-dashed border-border p-12 text-center">
          <p className="text-sm text-muted-foreground">No products match your search.</p>
        </div>
      )}
    </div>
  );
}
