"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Lock, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/CartContext";

const steps = ["Delivery", "Payment", "Review"];

export default function CheckoutPage() {
  const { state, cartTotal, dispatch } = useCart();
  const [step, setStep] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", pincode: "", country: "India",
    paymentMethod: "upi",
    upiId: "", cardNumber: "", cardExpiry: "", cardCvv: "",
  });

  const shipping = cartTotal >= 999 ? 0 : 99;
  const total = cartTotal + shipping;

  const handleField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch({ type: "CLEAR_CART" });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-cream-50 pt-24 flex items-center justify-center">
        <div className="text-center px-4 max-w-md mx-auto">
          <CheckCircle size={72} className="text-gold-500 mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="font-display text-3xl text-espresso mb-3">Order Placed!</h1>
          <p className="text-espresso/60 mb-2">
            Thank you for shopping with Innessa International.
          </p>
          <p className="text-espresso/50 text-sm mb-8">
            Your order confirmation has been sent to {form.email || "your email"}. 
            Expected delivery: 3-5 business days.
          </p>
          <div className="bg-cream-100 p-5 text-left mb-8 border border-cream-200">
            <p className="text-xs tracking-widest uppercase font-semibold text-espresso/50 mb-2">Order Total</p>
            <p className="font-display text-2xl text-espresso">₹{total.toLocaleString()}</p>
          </div>
          <Link href="/shop" className="btn-gold inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex flex-col items-center mb-6">
            <span className="font-display text-xl text-espresso tracking-[0.12em]">INNESSA</span>
            <span className="text-[9px] tracking-[0.35em] text-gold-500 uppercase font-semibold">INTERNATIONAL</span>
          </Link>
          {/* Steps */}
          <div className="flex items-center justify-center gap-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${i <= step ? "text-gold-500" : "text-espresso/30"}`}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${i < step ? "bg-gold-500 border-gold-500 text-cream-50" : i === step ? "border-gold-500 text-gold-500" : "border-espresso/20 text-espresso/30"}`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className="text-xs tracking-wider uppercase font-semibold hidden sm:block">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-12 h-px ${i < step ? "bg-gold-400" : "bg-espresso/10"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Step 0: Delivery */}
            {step === 0 && (
              <div className="bg-cream-50 border border-cream-200 p-6 space-y-5">
                <h2 className="font-display text-xl text-espresso">Delivery Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { field: "firstName", label: "First Name", col: 1 },
                    { field: "lastName", label: "Last Name", col: 1 },
                  ].map(({ field, label }) => (
                    <div key={field}>
                      <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">{label}</label>
                      <input
                        type="text"
                        value={form[field as keyof typeof form]}
                        onChange={(e) => handleField(field, e.target.value)}
                        className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                        required
                      />
                    </div>
                  ))}
                </div>
                {[
                  { field: "email", label: "Email Address", type: "email" },
                  { field: "phone", label: "Phone Number", type: "tel" },
                  { field: "address", label: "Street Address", type: "text" },
                ].map(({ field, label, type }) => (
                  <div key={field}>
                    <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">{label}</label>
                    <input
                      type={type}
                      value={form[field as keyof typeof form]}
                      onChange={(e) => handleField(field, e.target.value)}
                      className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                      required
                    />
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { field: "city", label: "City" },
                    { field: "state", label: "State" },
                    { field: "pincode", label: "Pincode" },
                  ].map(({ field, label }) => (
                    <div key={field}>
                      <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">{label}</label>
                      <input
                        type="text"
                        value={form[field as keyof typeof form]}
                        onChange={(e) => handleField(field, e.target.value)}
                        className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                        required
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 1: Payment */}
            {step === 1 && (
              <div className="bg-cream-50 border border-cream-200 p-6 space-y-5">
                <h2 className="font-display text-xl text-espresso">Payment Method</h2>
                <div className="space-y-3">
                  {[
                    { value: "upi", label: "UPI Payment" },
                    { value: "card", label: "Credit / Debit Card" },
                    { value: "cod", label: "Cash on Delivery (+₹50)" },
                    { value: "netbanking", label: "Net Banking" },
                  ].map(({ value, label }) => (
                    <label key={value} className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${form.paymentMethod === value ? "border-gold-400 bg-gold-50" : "border-cream-200 hover:border-espresso/30"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value={value}
                        checked={form.paymentMethod === value}
                        onChange={() => handleField("paymentMethod", value)}
                        className="accent-gold-500"
                      />
                      <span className="text-sm font-medium text-espresso">{label}</span>
                    </label>
                  ))}
                </div>

                {form.paymentMethod === "upi" && (
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">UPI ID</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      value={form.upiId}
                      onChange={(e) => handleField("upiId", e.target.value)}
                      className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                )}

                {form.paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" value={form.cardNumber} onChange={(e) => handleField("cardNumber", e.target.value)} className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">Expiry</label>
                        <input type="text" placeholder="MM / YY" value={form.cardExpiry} onChange={(e) => handleField("cardExpiry", e.target.value)} className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">CVV</label>
                        <input type="text" placeholder="***" value={form.cardCvv} onChange={(e) => handleField("cardCvv", e.target.value)} className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button onClick={() => setStep(0)} className="btn-outline-gold px-6">Back</button>
                  <button onClick={() => setStep(2)} className="btn-gold flex-1">Review Order</button>
                </div>
              </div>
            )}

            {/* Step 2: Review */}
            {step === 2 && (
              <div className="bg-cream-50 border border-cream-200 p-6 space-y-5">
                <h2 className="font-display text-xl text-espresso">Review Your Order</h2>
                <div className="bg-cream-100 p-4 space-y-2 text-sm">
                  <p className="font-semibold text-espresso text-xs tracking-widest uppercase mb-3">Delivery to</p>
                  <p className="text-espresso/70">{form.firstName} {form.lastName}</p>
                  <p className="text-espresso/70">{form.address}, {form.city}, {form.state} - {form.pincode}</p>
                  <p className="text-espresso/70">{form.email} | {form.phone}</p>
                </div>
                <div className="bg-cream-100 p-4 text-sm">
                  <p className="font-semibold text-espresso text-xs tracking-widest uppercase mb-3">Payment</p>
                  <p className="text-espresso/70 capitalize">{form.paymentMethod === "upi" ? `UPI: ${form.upiId}` : form.paymentMethod.replace("-", " ")}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-espresso/50">
                  <Lock size={12} className="text-gold-500" />
                  Your payment information is secure and encrypted
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="btn-outline-gold px-6">Back</button>
                  <button onClick={handlePlaceOrder} className="btn-gold flex-1">
                    Place Order — ₹{total.toLocaleString()}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-cream-100 border border-cream-200 p-5 sticky top-28">
              <h3 className="font-semibold text-espresso text-sm tracking-wide mb-4">
                Order Summary ({state.items.length} items)
              </h3>
              <div className="space-y-3 mb-5">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-14 h-16 flex-shrink-0 bg-cream-200 overflow-hidden">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                      <span className="absolute -top-1 -right-1 bg-espresso text-cream-50 text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-espresso line-clamp-2">{item.product.name}</p>
                      <p className="text-xs text-espresso/50 mt-0.5">{item.product.category}</p>
                    </div>
                    <p className="text-xs font-semibold text-espresso whitespace-nowrap">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="h-px bg-cream-200 mb-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-espresso/70">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-espresso/70">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="h-px bg-cream-200 my-1" />
                <div className="flex justify-between font-semibold text-espresso text-base">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
