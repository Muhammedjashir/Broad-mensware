import { Eye, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
        {product.tag && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-blend-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            {product.tag}
          </span>
        )}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
          <button
            onClick={() => setLiked((l) => !l)}
            aria-label="Wishlist"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur transition-transform hover:scale-110"
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-accent text-accent" : "text-primary"}`} />
          </button>
          <button
            aria-label="Quick view"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur opacity-0 transition-all hover:scale-110 group-hover:opacity-100"
          >
            <Eye className="h-4 w-4 text-primary" />
          </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button className="absolute inset-x-3 bottom-3 flex translate-y-[150%] items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform group-hover:translate-y-0">
          <ShoppingBag className="h-4 w-4" /> Add to Cart
        </button>
      </div>
      <div className="mt-3 px-1">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{product.brand}</p>
        <h3 className="mt-1 text-base font-medium leading-tight text-primary">{product.name}</h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-base font-semibold text-primary">₹{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">₹{product.oldPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
