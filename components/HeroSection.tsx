"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/75" />

      {/* Decorative side lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-400/60" />
        <span className="text-[10px] tracking-[0.4em] text-cream-300 uppercase rotate-90 my-4">
          Premium
        </span>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-gold-400/60" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        <p className="text-gold-300 text-xs sm:text-sm tracking-[0.4em] uppercase font-semibold mb-6 animate-fade-in opacity-0 animate-delay-100">
          Innessa International
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight tracking-wide mb-6 animate-fade-in opacity-0 animate-delay-200">
          Nourish Your Hair{" "}
          <span className="block text-gold-300">Naturally</span>
        </h1>

        <div className="h-px w-24 bg-gold-400 mx-auto mb-6 animate-fade-in opacity-0 animate-delay-300" />

        <p className="text-cream-200 text-base sm:text-lg md:text-xl tracking-wide mb-10 max-w-xl mx-auto font-light animate-fade-in opacity-0 animate-delay-300">
          Premium Hair Care Essentials crafted with rare botanicals and Ayurvedic wisdom
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 animate-delay-400">
          <Link
            href="/shop"
            className="btn-gold inline-block min-w-[180px] text-center"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="btn-cream inline-block min-w-[180px] text-center"
          >
            Explore Collection
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-8 mt-14 animate-fade-in opacity-0 animate-delay-500">
          {["100% Natural", "Paraben Free", "Cruelty Free"].map((badge) => (
            <div key={badge} className="text-center">
              <div className="w-8 h-px bg-gold-400 mx-auto mb-2" />
              <span className="text-[10px] tracking-[0.25em] text-cream-300 uppercase">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-300 animate-bounce"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
}
