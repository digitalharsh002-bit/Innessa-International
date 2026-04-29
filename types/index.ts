export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice: number;
  discount: number;
  stock: "In Stock" | "Out of Stock" | "Coming Soon";
  images: string[];
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
}
