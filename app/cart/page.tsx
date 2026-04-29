"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function CartPage() {
  const { state, dispatch, cartTotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const shipping = cartTotal >= 999 ? 0 : 99;
  const discount = couponApplied ? Math.round(cartTotal * 0.1) : 0;
  const total = cartTotal - discount + shipping;

  const suggested = products.filter(
    (p) => !state.items.find((i) => i.product.id === p.id)
  ).slice(0, 4);

  const handleCoupon = () => {
    if (coupon.toUpperCase() === "INNESSA10") {
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try INNESSA10");
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <p className="section-subtitle mb-2">Your Selection</p>
          <h1 className="section-title">Shopping Cart</h1>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={64} className="text-cream-300 mx-auto mb-6" strokeWidth={1} />
            <h2 className="font-display text-2xl text-espresso/50 mb-4">Your cart is empty</h2>
            <p className="text-espresso/40 text-sm mb-8">
              Discover our luxurious hair care collection
            </p>
            <Link href="/shop" className="btn-gold inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 sm:gap-6 bg-cream-50 border border-cream-200 p-4 sm:p-5"
                >
                  <Link href={`/product/${item.product.id}`} className="relative w-24 h-28 sm:w-28 sm:h-32 flex-shrink-0 bg-cream-100 overflow-hidden">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <p className="text-gold-500 text-[10px] tracking-widest uppercase font-semibold mb-1">
                      {item.product.category}
                    </p>
                    <Link href={`/product/${item.product.id}`} className="font-display text-base sm:text-lg text-espresso hover:text-gold-500 transition-colors block mb-2">
                      {item.product.name}
                    </Link>
                    <p className="text-espresso font-semibold mb-4">₹{item.product.price.toLocaleString()}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-espresso/20">
                        <button
                          onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity - 1 })}
                          className="w-9 h-9 flex items-center justify-center hover:bg-cream-200 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity + 1 })}
                          className="w-9 h-9 flex items-center justify-center hover:bg-cream-200 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-espresso hidden sm:block">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => dispatch({ type: "REMOVE_ITEM", productId: item.product.id })}
                          className="text-espresso/40 hover:text-red-400 transition-colors"
                          aria-label="Remove"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end">
                <button
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                  className="text-xs text-espresso/40 hover:text-red-400 transition-colors flex items-center gap-1"
                >
                  <Trash2 size={12} /> Clear Cart
                </button>
              </div>
            </div>

            {/* Order summary */}
            <div className="space-y-4">
              {/* Coupon */}
              <div className="bg-cream-100 p-5 border border-cream-200">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={14} className="text-gold-500" />
                  <h3 className="font-semibold text-espresso text-sm tracking-wide">Coupon Code</h3>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon"
                    disabled={couponApplied}
                    className="flex-1 border border-cream-200 bg-cream-50 px-3 py-2 text-sm outline-none focus:border-gold-400 transition-colors disabled:opacity-60"
                  />
                  <button
                    onClick={handleCoupon}
                    disabled={couponApplied || !coupon}
                    className="px-4 py-2 bg-espresso text-cream-50 text-xs uppercase tracking-wider font-semibold hover:bg-gold-500 transition-colors disabled:opacity-50"
                  >
                    {couponApplied ? "Applied" : "Apply"}
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-green-600 text-xs mt-2 font-semibold">
                    10% discount applied
                  </p>
                )}
                <p className="text-espresso/40 text-[11px] mt-2">Try: INNESSA10</p>
              </div>

              {/* Summary */}
              <div className="bg-cream-100 p-5 border border-cream-200">
                <h3 className="font-semibold text-espresso text-sm tracking-wide mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-espresso/70">
                    <span>Subtotal ({state.items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Coupon Discount</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-espresso/70">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  {cartTotal < 999 && (
                    <p className="text-xs text-gold-600 bg-gold-50 px-3 py-2">
                      Add ₹{(999 - cartTotal).toLocaleString()} more for free shipping
                    </p>
                  )}
                  <div className="h-px bg-cream-200 my-1" />
                  <div className="flex justify-between font-semibold text-espresso text-base">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center gap-2 w-full bg-espresso text-cream-50 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-gold-500 transition-colors duration-300 mt-6"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </Link>

                <Link
                  href="/shop"
                  className="block text-center text-xs text-espresso/50 hover:text-gold-500 transition-colors mt-4 tracking-wider uppercase"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* You may also like */}
        {suggested.length > 0 && (
          <div className="mt-16 pt-12 border-t border-cream-200">
            <h2 className="font-display text-2xl text-espresso mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {suggested.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
