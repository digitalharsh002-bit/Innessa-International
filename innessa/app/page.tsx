import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, Award, Truck } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import ReviewSlider from "@/components/ReviewSlider";
import NewsletterSignup from "@/components/NewsletterSignup";
import { products, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Innessa International | Premium Hair Care",
  description:
    "Discover luxury hair care essentials crafted with rare botanicals and Ayurvedic wisdom. Shop shampoos, serums, oils, and treatments.",
};

const trendingProducts = products.filter((p) => p.isBestSeller).slice(0, 4);
const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
const limitedStock = products.filter((p) => p.stock !== "In Stock").slice(0, 4);

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Trust badges */}
      <section className="bg-cream-100 py-6 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { Icon: Truck, title: "Free Shipping", desc: "Orders above ₹999" },
              { Icon: Leaf, title: "100% Natural", desc: "No harmful chemicals" },
              { Icon: Shield, title: "Cruelty Free", desc: "Never tested on animals" },
              { Icon: Award, title: "Dermatologist Tested", desc: "Clinically proven" },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <Icon size={22} className="text-gold-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-espresso text-xs tracking-wide">{title}</p>
                  <p className="text-espresso/50 text-[11px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-subtitle mb-2">Trending Now</p>
            <h2 className="section-title">Bestselling Products</h2>
          </div>
          <Link
            href="/shop?filter=bestseller"
            className="flex items-center gap-2 text-gold-500 text-sm font-semibold tracking-wider uppercase hover:text-gold-600 transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">Explore</p>
            <h2 className="section-title">Shop by Category</h2>
            <div className="h-px w-12 bg-gold-400 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="relative py-24 bg-espresso overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80"
            alt="Brand story background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-semibold mb-5">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-cream-50 leading-relaxed mb-6">
            Rooted in Tradition, Perfected by Science
          </h2>
          <div className="h-px w-12 bg-gold-400 mx-auto mb-8" />
          <p className="text-cream-300 text-base md:text-lg leading-relaxed mb-10 font-light">
            Innessa International was born from a belief that the most powerful hair care
            rituals are those passed down through generations — enhanced with modern
            dermatological science. Every product is a carefully crafted union of
            ancient Ayurvedic botanicals and contemporary innovation.
          </p>
          <Link href="/about" className="btn-outline-gold inline-block border-cream-400 text-cream-200 hover:bg-cream-50 hover:text-espresso">
            Our Story
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-subtitle mb-2">Editor's Choice</p>
            <h2 className="section-title">Featured Products</h2>
          </div>
          <Link
            href="/shop?filter=featured"
            className="flex items-center gap-2 text-gold-500 text-sm font-semibold tracking-wider uppercase hover:text-gold-600 transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-gold-500 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-cream-100 text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            Limited Time Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-cream-50 mb-4">
            Get 25% Off on Your First Order
          </h2>
          <p className="text-cream-200 text-sm mb-8">
            Use code <strong className="text-cream-50 font-bold">INNESSA25</strong> at checkout
          </p>
          <Link href="/shop" className="btn-cream inline-block">
            Shop Now
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-subtitle mb-2">Just Launched</p>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <Link
            href="/shop?filter=new"
            className="flex items-center gap-2 text-gold-500 text-sm font-semibold tracking-wider uppercase hover:text-gold-600 transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.length > 0 ? (
            newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            products.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      {/* Limited Stock */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="section-subtitle mb-2">Don't Miss Out</p>
              <h2 className="section-title">Limited Stock</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.slice(6, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients highlight */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle mb-2">Our Promise</p>
          <h2 className="section-title">What We Put In Every Bottle</h2>
          <div className="h-px w-12 bg-gold-400 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Argan Oil", origin: "Morocco", benefit: "Supreme nourishment" },
            { name: "Bhringraj", origin: "India", benefit: "Hair growth booster" },
            { name: "Keratin", origin: "Lab-crafted", benefit: "Strength and shine" },
            { name: "Amla", origin: "Himalayan foothills", benefit: "Scalp health" },
          ].map((ing) => (
            <div key={ing.name} className="text-center p-6 bg-cream-100 hover:bg-blush transition-colors duration-300">
              <div className="w-16 h-16 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Leaf size={24} className="text-gold-500" />
              </div>
              <h3 className="font-display text-lg text-espresso mb-1">{ing.name}</h3>
              <p className="text-gold-500 text-[10px] tracking-widest uppercase font-semibold mb-2">
                {ing.origin}
              </p>
              <p className="text-espresso/60 text-sm">{ing.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <ReviewSlider />

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}
