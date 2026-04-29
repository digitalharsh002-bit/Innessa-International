"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Star, Eye } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/CartContext";
import { useState } from "react";
import clsx from "clsx";

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
}

export default function ProductCard({ product, showQuickView = true }: ProductCardProps) {
  const { dispatch, state } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(
    state.wishlist.includes(product.id)
  );
  const [imageError, setImageError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", product });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    dispatch({ type: "TOGGLE_WISHLIST", productId: product.id });
  };

  return (
    <div
      className="group relative bg-cream-50 product-card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4]">
        <Image
          src={imageError ? "https://via.placeholder.com/400x533/FFF9EC/B8860B?text=Innessa" : product.images[0]}
          alt={product.name}
          fill
          className={clsx(
            "object-cover transition-all duration-700",
            hovered && product.images[1] ? "opacity-0" : "opacity-100"
          )}
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            fill
            className={clsx(
              "object-cover transition-all duration-700 absolute inset-0",
              hovered ? "opacity-100" : "opacity-0"
            )}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.discount > 0 && (
            <span className="bg-gold-500 text-cream-50 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5">
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-espresso text-cream-50 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-gold-300 text-espresso text-[10px] font-bold tracking-wider uppercase px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.stock !== "In Stock" && (
            <span className="bg-espresso/80 text-cream-200 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5">
              {product.stock}
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={clsx(
            "absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300",
            isWishlisted
              ? "text-red-500"
              : "text-espresso/60 opacity-0 group-hover:opacity-100 hover:text-red-500"
          )}
          aria-label="Add to wishlist"
        >
          <Heart
            size={18}
            fill={isWishlisted ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        </button>

        {/* Quick add overlay */}
        <div
          className={clsx(
            "absolute bottom-0 left-0 right-0 bg-espresso transition-all duration-400",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
          )}
        >
          <button
            onClick={handleAddToCart}
            disabled={product.stock !== "In Stock"}
            className="w-full flex items-center justify-center gap-2 py-3 text-cream-50 text-xs tracking-widest uppercase font-semibold hover:bg-gold-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingBag size={14} />
            {product.stock === "In Stock" ? "Add to Cart" : product.stock}
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4">
        <p className="text-gold-500 text-[10px] tracking-widest uppercase font-semibold mb-1">
          {product.category}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="font-display text-base text-espresso hover:text-gold-500 transition-colors duration-200 line-clamp-1 block mb-2"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={11}
                className={star <= Math.round(product.rating) ? "text-gold-400" : "text-cream-300"}
                fill={star <= Math.round(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-[10px] text-espresso/50">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-espresso text-base">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-espresso/40 text-sm line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
