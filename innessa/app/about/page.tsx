import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, Users, Globe } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Innessa International — our story, values, and commitment to premium, natural hair care.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80"
          alt="About Innessa International"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-gold-300 text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-cream-50">
            About Innessa International
          </h1>
          <div className="h-px w-12 bg-gold-400 mx-auto mt-5" />
        </div>
      </section>

      {/* Story */}
      <section id="story" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle mb-3">Who We Are</p>
            <h2 className="section-title mb-6">
              Born from a Passion for Beautiful Hair
            </h2>
            <p className="text-espresso/70 leading-relaxed mb-4">
              Innessa International was founded with a singular vision: to bring the
              transformative power of Ayurvedic hair care to modern homes. Inspired by
              generations of hair rituals passed down through Indian families, our
              founders set out to craft products that honour these traditions while
              meeting the demands of contemporary life.
            </p>
            <p className="text-espresso/70 leading-relaxed mb-6">
              Every product in the Innessa range is a careful marriage of rare
              botanical ingredients — sourced from the foothills of the Himalayas, the
              coasts of Morocco, and the fertile plains of South India — with the latest
              advances in cosmetic science.
            </p>
            <Link href="/shop" className="btn-gold inline-block">
              Explore Our Products
            </Link>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
              alt="Innessa brand story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">What Drives Us</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Leaf,
                title: "Natural First",
                desc: "Every formula begins with nature. We source the finest botanical ingredients from sustainable, ethical farms around the world.",
              },
              {
                Icon: Award,
                title: "Uncompromising Quality",
                desc: "Every batch is tested by dermatologists and quality experts before it reaches your hands. Our standards are non-negotiable.",
              },
              {
                Icon: Users,
                title: "For Everyone",
                desc: "Hair care is personal. We formulate for all hair types, textures, and concerns — because every head deserves the best.",
              },
              {
                Icon: Globe,
                title: "Conscious Beauty",
                desc: "Cruelty-free, sustainably packaged, and mindfully made. Beauty should never come at the cost of our planet or its creatures.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-cream-50 p-6 text-center group hover:shadow-soft transition-shadow duration-300">
                <div className="w-14 h-14 bg-gold-100 mx-auto mb-4 flex items-center justify-center group-hover:bg-gold-200 transition-colors duration-300">
                  <Icon size={24} className="text-gold-500" />
                </div>
                <h3 className="font-display text-lg text-espresso mb-3">{title}</h3>
                <p className="text-espresso/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-espresso">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2019", label: "Founded" },
              { value: "50K+", label: "Happy Customers" },
              { value: "10+", label: "Hero Products" },
              { value: "12", label: "Ayurvedic Herbs" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-gold-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-cream-400 text-xs tracking-widest uppercase font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Transparency</p>
          <h2 className="section-title">Our Key Ingredients</h2>
          <p className="text-espresso/60 text-sm mt-4 max-w-xl mx-auto">
            We believe you deserve to know exactly what goes on your hair. Every ingredient we use is chosen for a reason.
          </p>
        </div>
        <div className="space-y-4">
          {[
            {
              name: "Bhringraj",
              origin: "India",
              benefit: "Known as the 'King of Herbs' for hair, Bhringraj has been used in Ayurveda for centuries to stimulate growth and prevent hair fall.",
            },
            {
              name: "Argan Oil",
              origin: "Morocco",
              benefit: "Cold-pressed from Moroccan argan kernels, this liquid gold deeply nourishes, adds mirror shine, and protects against heat damage.",
            },
            {
              name: "Amla (Indian Gooseberry)",
              origin: "Himalayan Foothills, India",
              benefit: "Rich in Vitamin C and antioxidants, Amla strengthens the hair shaft, prevents premature greying, and promotes scalp health.",
            },
            {
              name: "Hydrolyzed Keratin",
              origin: "Lab-crafted",
              benefit: "Scientifically formulated keratin that fills in gaps in the hair cuticle, restoring strength, smoothness, and eliminating frizz.",
            },
            {
              name: "24K Gold Particles",
              origin: "Laboratory",
              benefit: "Microscopic gold particles create an invisible protective shield, reflecting light for extraordinary shine and blocking environmental damage.",
            },
          ].map((ing, i) => (
            <div key={ing.name} className="flex gap-5 p-5 bg-cream-100 hover:bg-blush transition-colors duration-300">
              <div className="w-10 h-10 bg-gold-100 flex-shrink-0 flex items-center justify-center font-display text-gold-500 font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-display text-base text-espresso">{ing.name}</h3>
                  <span className="text-[10px] tracking-widest text-gold-500 uppercase font-semibold">
                    {ing.origin}
                  </span>
                </div>
                <p className="text-espresso/60 text-sm leading-relaxed">{ing.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
