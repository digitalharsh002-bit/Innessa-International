"use client";

import { useState } from "react";
import { User, Package, Heart, Settings, LogOut, Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { useCart } from "@/lib/CartContext";
import ProductCard from "@/components/ProductCard";

const tabs = [
  { id: "orders", label: "My Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "profile", label: "Profile", icon: User },
  { id: "addresses", label: "Addresses", icon: MapPin },
];

const mockOrders = [
  {
    id: "INN-20240301-001",
    date: "1 March 2024",
    status: "Delivered",
    total: 2198,
    items: [products[0], products[1]],
  },
  {
    id: "INN-20240215-002",
    date: "15 Feb 2024",
    status: "Delivered",
    total: 1499,
    items: [products[2]],
  },
  {
    id: "INN-20240410-003",
    date: "10 April 2024",
    status: "Processing",
    total: 2999,
    items: [products[8]],
  },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders");
  const { state } = useCart();

  const wishlistedProducts = products.filter((p) =>
    state.wishlist.includes(p.id)
  );

  const statusColor: Record<string, string> = {
    Delivered: "text-green-600 bg-green-50",
    Processing: "text-gold-600 bg-gold-50",
    Shipped: "text-blue-600 bg-blue-50",
    Cancelled: "text-red-500 bg-red-50",
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <p className="section-subtitle mb-2">Welcome back</p>
          <h1 className="section-title">My Account</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Profile card */}
            <div className="bg-cream-100 border border-cream-200 p-5 mb-4 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full mx-auto mb-3 flex items-center justify-center text-cream-50 font-bold text-xl">
                A
              </div>
              <h3 className="font-display text-lg text-espresso">Ananya Kumar</h3>
              <p className="text-espresso/50 text-xs mt-0.5">ananya@example.com</p>
              <div className="mt-3 text-[10px] tracking-widest text-gold-500 uppercase font-semibold">
                Gold Member
              </div>
            </div>

            {/* Nav */}
            <nav className="space-y-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 text-left ${
                    activeTab === id
                      ? "bg-espresso text-cream-50"
                      : "text-espresso/70 hover:bg-cream-100 hover:text-gold-500"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-50 transition-colors duration-200 text-left">
                <LogOut size={16} />
                Sign Out
              </button>
            </nav>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3">
            {activeTab === "orders" && (
              <div>
                <h2 className="font-display text-xl text-espresso mb-5">Order History</h2>
                {mockOrders.length === 0 ? (
                  <div className="text-center py-16 bg-cream-100 border border-cream-200">
                    <Package size={48} className="text-cream-300 mx-auto mb-4" strokeWidth={1} />
                    <p className="text-espresso/50 mb-4">No orders yet</p>
                    <Link href="/shop" className="btn-gold inline-block text-sm">
                      Start Shopping
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="bg-cream-50 border border-cream-200 p-5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                          <div>
                            <p className="font-semibold text-espresso text-sm">{order.id}</p>
                            <p className="text-espresso/50 text-xs mt-0.5">{order.date}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={`text-xs font-semibold px-2 py-1 ${
                                statusColor[order.status] || "text-espresso/60 bg-cream-100"
                              }`}
                            >
                              {order.status}
                            </span>
                            <span className="font-semibold text-espresso text-sm">
                              ₹{order.total.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          {order.items.map((item) => (
                            <div
                              key={item.id}
                              className="relative w-14 h-16 flex-shrink-0 bg-cream-100 overflow-hidden"
                            >
                              <Image
                                src={item.images[0]}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                          <div className="flex-1 flex flex-col justify-between">
                            <p className="text-sm text-espresso/70">
                              {order.items.map((i) => i.name).join(", ")}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <button className="text-xs text-gold-500 font-semibold hover:text-gold-600 uppercase tracking-wider">
                                Reorder
                              </button>
                              <span className="text-espresso/20">|</span>
                              <button className="text-xs text-espresso/50 hover:text-espresso uppercase tracking-wider">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "wishlist" && (
              <div>
                <h2 className="font-display text-xl text-espresso mb-5">
                  My Wishlist ({wishlistedProducts.length})
                </h2>
                {wishlistedProducts.length === 0 ? (
                  <div className="text-center py-16 bg-cream-100 border border-cream-200">
                    <Heart size={48} className="text-cream-300 mx-auto mb-4" strokeWidth={1} />
                    <p className="text-espresso/50 mb-4">Your wishlist is empty</p>
                    <Link href="/shop" className="btn-gold inline-block text-sm">
                      Discover Products
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlistedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <h2 className="font-display text-xl text-espresso mb-5">Personal Information</h2>
                <div className="bg-cream-50 border border-cream-200 p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "First Name", value: "Ananya" },
                      { label: "Last Name", value: "Kumar" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">
                          {label}
                        </label>
                        <input
                          defaultValue={value}
                          className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    { label: "Email Address", value: "ananya@example.com", type: "email" },
                    { label: "Phone Number", value: "+91 98765 43210", type: "tel" },
                    { label: "Date of Birth", value: "1995-03-15", type: "date" },
                  ].map(({ label, value, type }) => (
                    <div key={label}>
                      <label className="block text-[11px] tracking-widest uppercase font-semibold text-espresso/50 mb-1.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        defaultValue={value}
                        className="w-full border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-espresso outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  ))}
                  <button className="btn-gold">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div>
                <h2 className="font-display text-xl text-espresso mb-5">Saved Addresses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-cream-50 border-2 border-gold-400 p-5 relative">
                    <span className="absolute top-3 right-3 text-[10px] tracking-widest text-gold-500 uppercase font-bold">
                      Default
                    </span>
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-espresso text-sm">Home</p>
                        <p className="text-espresso/60 text-sm mt-1">
                          123 MG Road, Connaught Place<br />
                          New Delhi, Delhi 110001<br />
                          India
                        </p>
                        <div className="flex gap-3 mt-3">
                          <button className="text-xs text-gold-500 font-semibold">Edit</button>
                          <button className="text-xs text-red-400">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="border-2 border-dashed border-cream-300 p-5 text-center text-espresso/40 hover:border-gold-400 hover:text-gold-500 transition-colors duration-200 text-sm font-medium">
                    + Add New Address
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
