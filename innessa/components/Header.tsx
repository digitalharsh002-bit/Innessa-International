"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingBag, Search, User, Heart, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/CartContext";

const navLinks = [
  { label: "Shop", href: "/shop" },
  {
    label: "Collections",
    href: "#",
    children: [
      { label: "Shampoos", href: "/category/shampoo" },
      { label: "Hair Masks", href: "/category/hair-mask" },
      { label: "Serums", href: "/category/serum" },
      { label: "Hair Oils", href: "/category/oil" },
      { label: "Conditioners", href: "/category/conditioner" },
      { label: "Gift Kits", href: "/category/kits" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { cartCount, dispatch } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 80) {
        setShowHeader(true);
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setShowHeader(false);
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
        setIsScrolled(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-espresso text-cream-100 text-xs text-center py-2 tracking-widest uppercase font-medium px-4">
        Free Shipping on Orders Above ₹999 &nbsp;|&nbsp; Use Code INNESSA10 for 10% Off
      </div>

      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-soft"
            : "bg-cream-50"
        } ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        style={{ top: isScrolled ? 0 : "2rem" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-espresso p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col items-center group absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            >
              <span className="font-display text-xl md:text-2xl text-espresso tracking-[0.12em] group-hover:text-gold-500 transition-colors duration-300">
                INNESSA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold-500 uppercase font-semibold -mt-0.5">
                INTERNATIONAL
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm tracking-wider uppercase font-medium text-espresso hover:text-gold-500 transition-colors duration-200 py-2"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} />}
                  </Link>
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-cream-50 shadow-soft-lg border border-cream-200 min-w-[180px] py-2 animate-slide-down">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-espresso hover:text-gold-500 hover:bg-cream-100 transition-colors duration-150 tracking-wide"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-espresso hover:text-gold-500 transition-colors duration-200 p-1"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/account"
                className="hidden md:block text-espresso hover:text-gold-500 transition-colors duration-200 p-1"
                aria-label="Account"
              >
                <User size={20} />
              </Link>
              <Link
                href="/account#wishlist"
                className="hidden md:block text-espresso hover:text-gold-500 transition-colors duration-200 p-1"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </Link>
              <button
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
                className="relative text-espresso hover:text-gold-500 transition-colors duration-200 p-1"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-cream-50 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-cream-200 bg-cream-50 px-4 py-3 animate-slide-down">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search size={18} className="text-gold-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-espresso placeholder-espresso/40 text-sm tracking-wide"
                autoFocus
              />
              <Link
                href={`/shop?search=${searchQuery}`}
                className="text-xs uppercase tracking-wider text-gold-500 font-semibold hover:text-gold-600"
                onClick={() => setSearchOpen(false)}
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for announcement bar + header */}
      <div className="h-8" />

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-espresso/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-cream-50 shadow-soft-lg p-6 overflow-y-auto animate-slide-up">
            <div className="mb-8">
              <span className="font-display text-xl text-espresso tracking-[0.12em]">
                INNESSA
              </span>
              <span className="block text-[9px] tracking-[0.35em] text-gold-500 uppercase font-semibold">
                INTERNATIONAL
              </span>
            </div>
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-3 text-sm tracking-wider uppercase font-medium text-espresso hover:text-gold-500 border-b border-cream-200"
                    onClick={() => !link.children && setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-0">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-espresso/70 hover:text-gold-500"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/account"
                className="block py-3 text-sm tracking-wider uppercase font-medium text-espresso hover:text-gold-500 border-b border-cream-200"
                onClick={() => setMobileOpen(false)}
              >
                My Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
