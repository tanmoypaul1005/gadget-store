"use client";
import { getGuestCartItems, saveGuestCartItems } from "@/util/guestCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── Empty State ── */
const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
    <div className="mb-8">
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto w-36 h-36">
        <circle cx="60" cy="60" r="56" fill="#111118" stroke="#1e1e3a" strokeWidth="1.5"/>
        <path d="M30 38h8l10 34h26l8-24H46" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="52" cy="80" r="4" fill="#6366f1"/>
        <circle cx="72" cy="80" r="4" fill="#6366f1"/>
        <path d="M55 52h16M55 59h10" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="85" cy="38" r="10" fill="#1e1e3a" stroke="#ef4444" strokeWidth="1.5"/>
        <path d="M82 38h6M85 35v6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" transform="rotate(45 85 38)"/>
      </svg>
    </div>
    <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Your cart is empty</h2>
    <p className="max-w-xs mb-8 text-sm text-gray-400">
      Looks like you haven&apos;t added anything yet. Explore our store and find something you love!
    </p>
    <Link href="/"
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 bg-indigo-600 hover:bg-indigo-500 rounded-xl">
      Continue Shopping
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
      </svg>
    </Link>
  </div>
);

/* ── Loading Skeleton ── */
const LoadingSkeleton = () => (
  <div className="py-10 common-class animate-pulse">
    <div className="w-40 h-8 mb-8 bg-white/5 rounded-xl"/>
    <div className="grid gap-6 md:grid-cols-3">
      <div className="space-y-4 md:col-span-2">
        {[1,2,3].map(i => (
          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5">
            <div className="w-20 h-20 rounded-xl bg-white/10 shrink-0"/>
            <div className="flex-1 space-y-2">
              <div className="w-3/4 h-4 rounded bg-white/10"/>
              <div className="w-1/4 h-3 rounded bg-white/10"/>
              <div className="w-1/3 h-4 rounded bg-white/10"/>
            </div>
          </div>
        ))}
      </div>
      <div className="h-64 rounded-2xl bg-white/5"/>
    </div>
  </div>
);

/* ── Main Component ── */
const GuestCartView = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    setLoading(true);
    const items = getGuestCartItems();
    if (items.length === 0) { setCartItems([]); setLoading(false); return; }
    setCartItems(items);
    const productMap = {};
    await Promise.all(items.map(async (item) => {
      try {
        const res = await fetch(`/api/products/${item.product_id}`);
        if (res.ok) {
          const data = await res.json();
          if (data?.success) productMap[item.product_id] = data.data;
        }
      } catch (_) {}
    }));
    setProducts(productMap);
    setLoading(false);
  };

  useEffect(() => { loadCart(); }, []);

  const removeItem = (product_id) => {
    const updated = getGuestCartItems().filter((i) => i.product_id !== product_id);
    saveGuestCartItems(updated);
    setCartItems(updated);
  };

  const updateQuantity = (product_id, delta) => {
    const updated = getGuestCartItems().map((i) =>
      i.product_id === product_id
        ? { ...i, quantity: Math.max(1, (i.quantity || 1) + delta) }
        : i
    );
    saveGuestCartItems(updated);
    setCartItems(updated);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const p = products[item.product_id];
    return sum + (p?.price || 0) * (item.quantity || 1);
  }, 0);

  const totalItems = cartItems.reduce((sum, i) => sum + (i.quantity || 1), 0);

  if (loading) return <LoadingSkeleton />;
  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="min-h-screen py-10">
      <div className="common-class">

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">Shopping Cart</h1>
            <p className="mt-1 text-sm text-gray-400">{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
          </div>
          <Link href="/" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* ── Cart Items ── */}
          <div className="space-y-3 md:col-span-2">
            {cartItems.map((item) => {
              const product = products[item.product_id];
              if (!product) return null;
              const subtotal = (product.price * (item.quantity || 1)).toFixed(2);

              return (
                <div key={item.product_id}
                  className="group bg-[#111118] border border-white/5 rounded-2xl p-4 sm:p-5
                             hover:border-white/10 transition-all duration-200">
                  <div className="flex items-start gap-4">

                    {/* Product Image */}
                    <div className="relative w-20 h-20 overflow-hidden sm:w-24 sm:h-24 rounded-xl bg-white/5 ring-1 ring-white/10 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold leading-snug text-white truncate sm:text-base">
                            {product.name}
                          </h3>
                          {product.brand && (
                            <p className="text-xs text-gray-500 mt-0.5">{product.brand}</p>
                          )}
                        </div>
                        {/* Remove button */}
                        <button
                          onClick={() => removeItem(item.product_id)}
                          className="flex items-center justify-center flex-shrink-0 transition-all duration-200 border rounded-lg w-7 h-7 bg-white/5 hover:bg-red-500/20 border-white/5 hover:border-red-500/30 group/btn"
                          title="Remove item"
                        >
                          <svg className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-red-400 transition-colors"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>

                      {/* Price + Quantity Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
                        <div className="flex items-center gap-1">
                          <span className="text-base font-bold text-indigo-400">${product.price}</span>
                          {item.quantity > 1 && (
                            <span className="ml-1 text-xs text-gray-500">× {item.quantity} = <span className="font-medium text-white">${subtotal}</span></span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 p-1 border bg-white/5 rounded-xl border-white/5">
                          <button
                            onClick={() => updateQuantity(item.product_id, -1)}
                            className="flex items-center justify-center text-lg font-bold text-gray-300 transition-all rounded-lg w-7 h-7 hover:bg-white/10 hover:text-white"
                          >−</button>
                          <span className="w-6 text-sm font-semibold text-center text-white tabular-nums">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product_id, 1)}
                            className="flex items-center justify-center text-lg font-bold text-gray-300 transition-all rounded-lg w-7 h-7 hover:bg-indigo-600 hover:text-white"
                          >+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Order Summary ── */}
          <div className="sticky h-max top-6">
            <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">

              {/* Summary Header */}
              <div className="bg-[#16161f] px-5 py-4 border-b border-white/5">
                <h3 className="text-base font-bold text-white">Order Summary</h3>
              </div>

              {/* Items Breakdown */}
              <div className="px-5 py-4 space-y-2.5 border-b border-white/5 max-h-52 overflow-y-auto">
                {cartItems.map((item) => {
                  const p = products[item.product_id];
                  if (!p) return null;
                  return (
                    <div key={item.product_id} className="flex items-center justify-between gap-3">
                      <div className="flex items-center min-w-0 gap-2">
                        <span className="text-xs text-gray-500 bg-white/5 rounded px-1.5 py-0.5 shrink-0">
                          ×{item.quantity || 1}
                        </span>
                        <span className="text-sm text-gray-300 truncate">{p.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-white shrink-0">
                        ${(p.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="px-5 py-4 space-y-2 border-b border-white/5">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Shipping</span>
                  <span className="font-medium text-emerald-400">Free</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <span className="text-base font-bold text-white">Total</span>
                <span className="text-xl font-bold text-indigo-400">${totalPrice.toFixed(2)}</span>
              </div>

              {/* CTA Buttons */}
              <div className="px-5 py-5 space-y-3">
                <Link href="/checkout" className="block">
                  <button className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 bg-indigo-600 hover:bg-indigo-500 rounded-xl">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Proceed to Checkout
                  </button>
                </Link>
                <Link href="/" className="block">
                  <button className="w-full px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-200 border bg-white/5 hover:bg-white/10 hover:text-white rounded-xl border-white/5 hover:border-white/10">
                    Continue Shopping
                  </button>
                </Link>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  {[
                    { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Secure" },
                    { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Returns" },
                    { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Free Ship" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon}/>
                      </svg>
                      <span className="text-[10px] text-gray-500">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GuestCartView;