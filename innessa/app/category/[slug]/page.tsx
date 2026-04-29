import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return {};
  return {
    title: `${category.name} | Innessa International`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.categorySlug === params.slug);

  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      {/* Header */}
      <div className="bg-cream-100 border-b border-cream-200 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <nav className="flex items-center justify-center gap-2 text-xs text-espresso/50 mb-5">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-gold-500">Shop</Link>
            <span>/</span>
            <span className="text-espresso">{category.name}</span>
          </nav>
          <p className="section-subtitle mb-3">Collection</p>
          <h1 className="section-title">{category.name}</h1>
          <div className="h-px w-10 bg-gold-400 mx-auto mt-4 mb-4" />
          <p className="text-espresso/60 text-sm">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-espresso/40 mb-4">
              No products in this category yet
            </p>
            <Link href="/shop" className="btn-gold inline-block">
              Shop All Products
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-espresso/50 mb-6">{categoryProducts.length} products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        {/* Other categories */}
        <div className="mt-16 pt-12 border-t border-cream-200">
          <h2 className="font-display text-xl text-espresso mb-6">Explore Other Collections</h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== params.slug)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="border border-espresso/20 text-espresso/70 text-sm px-4 py-2 hover:border-gold-500 hover:text-gold-500 transition-colors duration-200"
                >
                  {cat.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
