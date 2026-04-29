import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative overflow-hidden block aspect-square bg-cream-200"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      <div className="absolute bottom-0 left-0 right-0 p-5 text-cream-50">
        <p className="text-[10px] tracking-[0.3em] text-gold-300 uppercase font-semibold mb-1">
          {category.count} Products
        </p>
        <h3 className="font-display text-xl text-cream-50 mb-1">{category.name}</h3>
        <p className="text-cream-300 text-xs line-clamp-1 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category.description}
        </p>
        <div className="flex items-center gap-1 text-gold-300 text-xs uppercase tracking-wider font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span>Shop Now</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
