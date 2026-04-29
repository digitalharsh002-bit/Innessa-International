import Link from "next/link";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Shampoos", href: "/category/shampoo" },
    { label: "Serums", href: "/category/serum" },
    { label: "Hair Oils", href: "/category/oil" },
    { label: "Gift Kits", href: "/category/kits" },
  ],
  info: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Our Story", href: "/about#story" },
    { label: "Ingredients", href: "/about#ingredients" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Shipping Policy", href: "/shipping-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-display text-2xl text-cream-50 tracking-[0.12em]">
                INNESSA
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-gold-400 uppercase font-semibold mt-0.5">
                INTERNATIONAL
              </span>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed mb-6 max-w-xs">
              Crafted with rare botanicals and Ayurvedic wisdom, Innessa International brings
              you premium hair care that transforms from root to tip.
            </p>
            {/* Social links */}
            <div className="flex items-center space-x-4 mb-8">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "Youtube" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-cream-500/30 flex items-center justify-center text-cream-400 hover:text-gold-400 hover:border-gold-400 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* Contact */}
            <div className="space-y-2">
              {[
                { Icon: Mail, text: "hello@innessainternational.com" },
                { Icon: Phone, text: "+91 98765 43210" },
                { Icon: MapPin, text: "New Delhi, India" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-cream-400">
                  <Icon size={14} className="text-gold-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-cream-50 text-xs tracking-widest uppercase font-semibold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-cream-50 text-xs tracking-widest uppercase font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-cream-50 text-xs tracking-widest uppercase font-semibold mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream-500/20 to-transparent my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Innessa International. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-cream-500 text-xs">We Accept:</span>
            {["Visa", "Mastercard", "UPI", "RazorPay"].map((method) => (
              <span
                key={method}
                className="text-[10px] tracking-wider text-cream-400 border border-cream-500/20 px-2 py-0.5"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
