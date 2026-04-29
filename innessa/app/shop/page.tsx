"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/Skeletons";

function ShopContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const filterParam = searchParams.get("filter") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [availability, setAvailability] = useState<string>("");
  const [sortBy, setSortBy] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (filterParam === "bestseller") result = result.filter((p) => p.isBestSeller);
    if (filterParam === "featured") result = result.filter((p) => p.isFeatured);
    if (filterParam === "new") result = result.filter((p) => p.isNew);

    if (selectedCategory) result = result.filter((p) => p.categorySlug === selectedCategory);
    if (availability) result = result.filter((p) => p.stock === availability);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "newest") result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return result;
  }, [searchQuery, filterParam, selectedCategory, availability, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("");
    setPriceRange([0, 5000]);
    setAvailability("");
    setSortBy("default");
  };

  const hasFilters = selectedCategory || availability || priceRange[0] > 0 || priceRange[1] < 5000;

  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      {/* Header */}
      <div className="bg-cream-100 border-b border-cream-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle mb-2">
            {searchQuery ? "Search Results" : "Our Products"}
          </p>
          <h1 className="section-title">
            {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
          </h1>
          <p className="text-espresso/50 text-sm mt-2">{filtered.length} products found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-sm font-semibold text-espresso border border-espresso/20 px-4 py-2 hover:border-gold-500 hover:text-gold-500 transition-colors duration-200"
          >
            <SlidersHorizontal size={16} />
            Filters
            {hasFilters && (
              <span className="bg-gold-500 text-cream-50 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ml-1">
                !
              </span>
            )}
          </button>

          <div className="flex items-center gap-3">
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-red-400 hover:text-red-500"
              >
                <X size={12} /> Clear Filters
              </button>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-espresso/20 bg-cream-50 px-3 py-2 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          {filtersOpen && (
            <aside className="w-60 flex-shrink-0">
              <div className="space-y-8">
                {/* Category */}
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-espresso mb-4">
                    Category
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory("")}
                      className={`block text-sm w-full text-left py-1 transition-colors ${
                        !selectedCategory ? "text-gold-500 font-semibold" : "text-espresso/70 hover:text-gold-500"
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`block text-sm w-full text-left py-1 transition-colors ${
                          selectedCategory === cat.slug ? "text-gold-500 font-semibold" : "text-espresso/70 hover:text-gold-500"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-espresso mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {[
                      [0, 5000, "All"],
                      [0, 999, "Under ₹999"],
                      [1000, 1999, "₹1000 - ₹1999"],
                      [2000, 5000, "Above ₹2000"],
                    ].map(([min, max, label]) => (
                      <button
                        key={String(label)}
                        onClick={() => setPriceRange([Number(min), Number(max)])}
                        className={`block text-sm w-full text-left py-1 transition-colors ${
                          priceRange[0] === min && priceRange[1] === max
                            ? "text-gold-500 font-semibold"
                            : "text-espresso/70 hover:text-gold-500"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-espresso mb-4">
                    Availability
                  </h3>
                  <div className="space-y-2">
                    {["", "In Stock", "Out of Stock", "Coming Soon"].map((av) => (
                      <button
                        key={av || "all"}
                        onClick={() => setAvailability(av)}
                        className={`block text-sm w-full text-left py-1 transition-colors ${
                          availability === av ? "text-gold-500 font-semibold" : "text-espresso/70 hover:text-gold-500"
                        }`}
                      >
                        {av || "All"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display text-2xl text-espresso/40 mb-3">No products found</p>
                <p className="text-sm text-espresso/30">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="btn-gold mt-6 text-sm"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-4 md:gap-6 ${
                filtersOpen
                  ? "grid-cols-2 md:grid-cols-3"
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              }`}>
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-32"><ProductGridSkeleton count={8} /></div>}>
      <ShopContent />
    </Suspense>
  );
}
