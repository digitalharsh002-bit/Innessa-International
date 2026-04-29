"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const { state, dispatch, cartTotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const shipping = cartTotal >= 999 ? 0 : 99;
  const discount = couponApplied ? Math.round(cartTotal * 0.1) : 0;
  const total = cartTotal - discount + shipping;

  const handleCoupon = () => {
    if (coupon.toUpperCase() === "INNESSA10") {
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code");
    }
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50"
        onClick={() => dispatch({ type: "CLOSE_CART" })}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-cream-50 z-50 flex flex-col shadow-soft-lg animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold-500" />
            <h2 className="font-display text-lg text-espresso tracking-wide">
              Your Cart
            </h2>
            <span className="bg-gold-500 text-cream-50 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center ml-1">
              {state.items.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="text-espresso/60 hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-cream-300" strokeWidth={1} />
              <p className="font-display text-xl text-espresso/60">Your cart is empty</p>
              <p className="text-sm text-espresso/40">
                Add some luxurious hair care products
              </p>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="btn-gold text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {state.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 pb-5 border-b border-cream-200"
                >
                  {/* Image */}
                  <Link
                    href={`/product/${item.product.id}`}
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                    className="relative w-20 h-24 flex-shrink-0 bg-cream-100 overflow-hidden"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gold-500 tracking-widest uppercase font-semibold mb-0.5">
                      {item.product.category}
                    </p>
                    <Link
                      href={`/product/${item.product.id}`}
                      onClick={() => dispatch({ type: "CLOSE_CART" })}
                      className="font-display text-sm text-espresso hover:text-gold-500 transition-colors line-clamp-2 block mb-2"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm font-semibold text-espresso mb-3">
                      ₹{item.product.price.toLocaleString()}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-cream-200">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              productId: item.product.id,
                              quantity: item.quantity - 1,
                            })
                          }
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-cream-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              productId: item.product.id,
                              quantity: item.quantity + 1,
                            })
                          }
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-cream-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_ITEM",
                            productId: item.product.id,
                          })
                        }
                        className="text-espresso/40 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="px-6 py-5 border-t border-cream-200 space-y-4">
            {/* Coupon */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                disabled={couponApplied}
                className="flex-1 border border-cream-200 px-3 py-2 text-sm text-espresso placeholder-espresso/30 outline-none focus:border-gold-400 transition-colors bg-cream-50 disabled:opacity-60"
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
              <p className="text-green-600 text-xs font-semibold">
                INNESSA10 applied — 10% discount
              </p>
            )}

            {/* Price summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-espresso/70">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm text-espresso/70">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              {cartTotal < 999 && (
                <p className="text-[11px] text-gold-600">
                  Add ₹{(999 - cartTotal).toLocaleString()} more for free shipping
                </p>
              )}
              <div className="h-px bg-cream-200 my-1" />
              <div className="flex justify-between font-semibold text-espresso">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout button */}
            <Link
              href="/checkout"
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="flex items-center justify-center gap-2 w-full bg-espresso text-cream-50 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-gold-500 transition-colors duration-300"
            >
              Proceed to Checkout
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/cart"
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="block text-center text-xs text-espresso/50 hover:text-gold-500 transition-colors tracking-wider uppercase"
            >
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
