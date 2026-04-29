"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Heart, Star, Check, ChevronDown, Share2, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/CartContext";
import ProductCard from "@/components/ProductCard";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  const { dispatch, state } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "usage">("description");
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(state.wishlist.includes(product.id));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", product });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-espresso/50">
          <Link href="/" className="hover:text-gold-500">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gold-500">Shop</Link>
          <span>/</span>
          <Link href={`/category/${product.categorySlug}`} className="hover:text-gold-500">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-cream-100 overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-gold-500 text-cream-50 text-xs font-bold tracking-wider uppercase px-3 py-1">
                  -{product.discount}%
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImage === i ? "border-gold-500" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            <p className="text-gold-500 text-[11px] tracking-widest uppercase font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-espresso mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s <= Math.round(product.rating) ? "text-gold-400" : "text-cream-300"}
                    fill={s <= Math.round(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sm text-espresso/60">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl text-espresso">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-espresso/40 text-lg line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.discount > 0 && (
                <span className="bg-gold-100 text-gold-600 text-xs font-bold px-2 py-0.5">
                  Save {product.discount}%
                </span>
              )}
            </div>

            <div className="h-px bg-cream-200 mb-6" />

            {/* Benefits preview */}
            <div className="space-y-2 mb-8">
              {product.benefits.slice(0, 3).map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <Check size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-espresso/70">{b}</span>
                </div>
              ))}
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full ${
                product.stock === "In Stock" ? "bg-green-500" :
                product.stock === "Coming Soon" ? "bg-gold-500" : "bg-red-400"
              }`} />
              <span className="text-sm font-medium text-espresso/70">{product.stock}</span>
            </div>

            {/* Quantity + Add to cart */}
            {product.stock === "In Stock" && (
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border border-espresso/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-12 flex items-center justify-center text-espresso hover:bg-cream-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold text-espresso">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-12 flex items-center justify-center text-espresso hover:bg-cream-200 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 font-semibold tracking-wider uppercase text-sm transition-all duration-300 ${
                    added
                      ? "bg-green-600 text-cream-50"
                      : "bg-espresso text-cream-50 hover:bg-gold-500"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={16} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="flex gap-3 mb-8">
              <button
                onClick={() => {
                  setWishlisted(!wishlisted);
                  dispatch({ type: "TOGGLE_WISHLIST", productId: product.id });
                }}
                className={`flex items-center gap-2 px-4 py-3 border text-sm font-medium transition-colors duration-200 flex-1 justify-center ${
                  wishlisted
                    ? "border-red-200 text-red-400 bg-red-50"
                    : "border-espresso/20 text-espresso/70 hover:border-gold-400 hover:text-gold-500"
                }`}
              >
                <Heart size={14} fill={wishlisted ? "currentColor" : "none"} />
                {wishlisted ? "Wishlisted" : "Add to Wishlist"}
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border border-espresso/20 text-espresso/70 hover:border-gold-400 hover:text-gold-500 transition-colors duration-200 text-sm font-medium">
                <Share2 size={14} />
                Share
              </button>
            </div>

            {/* Guarantees */}
            <div className="bg-cream-100 p-4 space-y-2">
              {[
                "Free shipping on orders above ₹999",
                "Easy 15-day returns",
                "100% authentic products",
              ].map((g) => (
                <div key={g} className="flex items-center gap-2 text-xs text-espresso/60">
                  <Check size={12} className="text-gold-500" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-cream-200 pt-10">
          <div className="flex border-b border-cream-200 mb-8 gap-0">
            {(["description", "ingredients", "usage"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-semibold tracking-wider uppercase capitalize transition-colors duration-200 border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-gold-500 text-gold-500"
                    : "border-transparent text-espresso/50 hover:text-espresso"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="max-w-3xl">
            {activeTab === "description" && (
              <div>
                <p className="text-espresso/70 leading-relaxed mb-6">{product.description}</p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-espresso text-sm tracking-wide">Key Benefits</h3>
                  {product.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Check size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-espresso/70">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div>
                <p className="text-espresso/60 text-sm mb-6">
                  We believe in complete transparency. Here is everything that goes into {product.name}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="bg-cream-100 text-espresso/70 text-xs px-3 py-1.5 border border-cream-200"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "usage" && (
              <div>
                <h3 className="font-semibold text-espresso mb-3 text-sm tracking-wide">How to Use</h3>
                <p className="text-espresso/70 leading-relaxed">{product.usage}</p>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="section-subtitle mb-1">You May Also Like</p>
                <h2 className="section-title text-2xl">Related Products</h2>
              </div>
              <Link
                href={`/category/${product.categorySlug}`}
                className="flex items-center gap-1 text-sm text-gold-500 font-semibold hover:text-gold-600"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
