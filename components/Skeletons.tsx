export function ProductCardSkeleton() {
  return (
    <div className="bg-cream-50">
      <div className="aspect-[3/4] shimmer" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-16 shimmer" />
        <div className="h-4 w-full shimmer" />
        <div className="h-3 w-24 shimmer" />
        <div className="h-5 w-20 shimmer" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
