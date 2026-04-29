"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/lib/data";

export default function ReviewSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((index + reviews.length) % reviews.length);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo(current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  const review = reviews[current];

  return (
    <section className="py-20 bg-espresso text-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold-400 text-xs tracking-widest uppercase font-semibold mb-3">
            Customer Love
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-cream-50">
            Real Results, Real Stories
          </h2>
          <div className="h-px w-16 bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Review card */}
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <Quote size={40} className="text-gold-500 opacity-60" fill="currentColor" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="text-gold-400"
                  fill={star <= review.rating ? "currentColor" : "none"}
                />
              ))}
            </div>

            {/* Comment */}
            <blockquote className="text-cream-200 text-lg md:text-xl leading-relaxed mb-8 font-light italic max-w-2xl mx-auto">
              {review.comment}
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 bg-gold-500 rounded-full flex items-center justify-center text-cream-50 font-bold text-sm">
                {review.avatar}
              </div>
              <div>
                <p className="font-semibold text-cream-100 text-sm">{review.name}</p>
                {review.verified && (
                  <p className="text-[10px] tracking-wider text-gold-400 uppercase">
                    Verified Purchase · {review.date}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => goTo(current - 1)}
              className="w-10 h-10 border border-cream-500/30 flex items-center justify-center text-cream-400 hover:text-gold-400 hover:border-gold-400 transition-colors duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? "w-6 h-1.5 bg-gold-400"
                      : "w-1.5 h-1.5 bg-cream-500/40 hover:bg-cream-400/60"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(current + 1)}
              className="w-10 h-10 border border-cream-500/30 flex items-center justify-center text-cream-400 hover:text-gold-400 hover:border-gold-400 transition-colors duration-200"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 mt-16 border-t border-cream-500/10 pt-12 max-w-lg mx-auto">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.8", label: "Average Rating" },
            { value: "98%", label: "Recommend Us" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl text-gold-400 mb-1">{stat.value}</p>
              <p className="text-cream-400 text-[11px] tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
