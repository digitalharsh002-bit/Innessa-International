"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-blush relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-200/20 rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full translate-x-32 translate-y-32" />

      <div className="relative max-w-2xl mx-auto px-4 text-center">
        <p className="section-subtitle mb-3">Stay in the loop</p>
        <h2 className="section-title mb-4">
          Join the Innessa Circle
        </h2>
        <p className="text-espresso/60 text-sm sm:text-base leading-relaxed mb-8">
          Subscribe for exclusive offers, hair care tips, new launches, and members-only
          discounts. Get 10% off your first order.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle size={48} className="text-gold-500" />
            <p className="font-display text-xl text-espresso">
              Welcome to Innessa Circle!
            </p>
            <p className="text-sm text-espresso/60">
              Your 10% discount code has been sent to {email}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 border border-espresso/20 bg-cream-50 px-5 py-4 text-sm text-espresso placeholder-espresso/40 outline-none focus:border-gold-400 transition-colors duration-200"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-gold flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70"
            >
              {loading ? "Subscribing..." : (
                <>
                  Subscribe
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-[11px] text-espresso/40 mt-4 tracking-wide">
          No spam, unsubscribe anytime. By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
