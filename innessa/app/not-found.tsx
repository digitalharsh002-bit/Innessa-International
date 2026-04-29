import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="font-display text-8xl text-gold-200 mb-4">404</p>
        <h1 className="font-display text-3xl text-espresso mb-4">Page Not Found</h1>
        <p className="text-espresso/50 text-sm mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-gold inline-block">
            Back to Home
          </Link>
          <Link href="/shop" className="btn-outline-gold inline-block">
            Shop Products
          </Link>
        </div>
      </div>
    </div>
  );
}
