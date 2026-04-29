"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      {/* Header */}
      <div className="bg-cream-100 border-b border-cream-200 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="section-subtitle mb-3">Get in Touch</p>
          <h1 className="section-title">Contact Us</h1>
          <div className="h-px w-10 bg-gold-400 mx-auto mt-4 mb-4" />
          <p className="text-espresso/60 text-sm">
            We would love to hear from you. Our team is always here to help.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl text-espresso mb-6">
                Let's Connect
              </h2>
              <p className="text-espresso/60 text-sm leading-relaxed">
                Whether you have a question about our products, need help with your
                order, or simply want to say hello — we're here for you.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  Icon: Mail,
                  title: "Email Us",
                  detail: "hello@innessainternational.com",
                  sub: "We reply within 24 hours",
                },
                {
                  Icon: Phone,
                  title: "Call Us",
                  detail: "+91 98765 43210",
                  sub: "Mon–Sat, 10am–6pm IST",
                },
                {
                  Icon: MapPin,
                  title: "Visit Us",
                  detail: "New Delhi, India 110001",
                  sub: "By appointment only",
                },
                {
                  Icon: Clock,
                  title: "Business Hours",
                  detail: "Monday – Saturday",
                  sub: "10:00 AM – 6:00 PM IST",
                },
              ].map(({ Icon, title, detail, sub }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-gold-100 flex-shrink-0 flex items-center justify-center">
                    <Icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-espresso text-sm">{title}</p>
                    <p className="text-espresso/70 text-sm mt-0.5">{detail}</p>
                    <p className="text-espresso/40 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gold-50 border border-gold-200 p-5">
              <p className="text-gold-600 font-semibold text-sm mb-1">Hair Care Expert Consultation</p>
              <p className="text-espresso/60 text-xs leading-relaxed">
                Not sure which products are right for you? Book a free 15-minute
                consultation with our hair care experts.
              </p>
              <button className="mt-3 text-gold-500 text-xs font-semibold uppercase tracking-wider hover:text-gold-600">
                Book a Consultation →
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <CheckCircle size={64} className="text-gold-500 mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-espresso mb-3">
                  Message Sent!
                </h3>
                <p className="text-espresso/60 text-sm max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                      placeholder="Priya Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                      placeholder="priya@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-espresso outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
