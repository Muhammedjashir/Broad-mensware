import tshirt from "@/assets/broad-tshirt.jpg";
import shirt from "@/assets/broad-shirt.jpg";
import jeans from "@/assets/broad-jeans.jpg";
import jacket from "@/assets/broad-jacket.jpg";
import hoodie from "@/assets/broad-hoodie.jpg";
import casual from "@/assets/broad-casual.jpg";
import formal from "@/assets/broad-formal.jpg";
import surplus from "@/assets/broad-surplus.jpg";
import accessories from "@/assets/broad-accessories.jpg";

export type Category =
  | "T-Shirts"
  | "Shirts"
  | "Jeans"
  | "Jackets"
  | "Hoodies"
  | "Casual Wear"
  | "Formal Wear"
  | "Surplus"
  | "Accessories";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: "New" | "Hot" | "Limited" | "Bestseller";
};

export const products: Product[] = [
  { id: "noir-tee", name: "Noir Essential Tee", brand: "BROAD. Studio", category: "T-Shirts", price: 799, oldPrice: 1199, image: tshirt, tag: "Hot" },
  { id: "sky-shirt", name: "Sky Oxford Shirt", brand: "BROAD. Classics", category: "Shirts", price: 1499, image: shirt, tag: "New" },
  { id: "indigo-jeans", name: "Indigo Slim Denim", brand: "BROAD. Denim", category: "Jeans", price: 1899, oldPrice: 2299, image: jeans, tag: "Bestseller" },
  { id: "sand-bomber", name: "Sand Bomber Jacket", brand: "BROAD. Outerwear", category: "Jackets", price: 2899, image: jacket, tag: "New" },
  { id: "lilac-hoodie", name: "Lilac Oversized Hoodie", brand: "BROAD. Streetwear", category: "Hoodies", price: 1999, image: hoodie, tag: "Hot" },
  { id: "olive-chinos", name: "Olive Tapered Chinos", brand: "BROAD. Casuals", category: "Casual Wear", price: 1599, image: casual },
  { id: "noir-suit", name: "Noir Two-Piece Suit", brand: "BROAD. Formal", category: "Formal Wear", price: 4999, oldPrice: 6499, image: formal, tag: "Limited" },
  { id: "surplus-stack", name: "Surplus Branded Pack", brand: "BROAD. Surplus", category: "Surplus", price: 1299, image: surplus, tag: "Bestseller" },
  { id: "edge-set", name: "Watch & Belt Set", brand: "BROAD. Carry", category: "Accessories", price: 1499, image: accessories },
];

export const categories: { name: Category | "All"; description: string; image?: string }[] = [
  { name: "All", description: "Browse everything" },
  { name: "T-Shirts", description: "Everyday essentials", image: tshirt },
  { name: "Shirts", description: "Smart casual edits", image: shirt },
  { name: "Jeans", description: "Slim, relaxed & raw", image: jeans },
  { name: "Jackets", description: "Layer up in style", image: jacket },
  { name: "Hoodies", description: "Streetwear comfort", image: hoodie },
  { name: "Casual Wear", description: "Off-duty looks", image: casual },
  { name: "Formal Wear", description: "Boardroom ready", image: formal },
  { name: "Surplus", description: "Branded surplus drops", image: surplus },
  { name: "Accessories", description: "Watches, belts & more", image: accessories },
];
