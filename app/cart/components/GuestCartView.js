"use client";
import { getGuestCartItems, saveGuestCartItems } from "@/util/guestCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── Empty State ── */
const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
    <div className="mb-8">
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-36 mx-auto">
        <circle cx="60" cy="60" r="56" fill="#111118" stroke="#1e1e3a" strokeWidth="1.5"/>
        <path d="M30 38h8l10 34h26l8-24H46" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="52" cy="80" r="4" fill="#6366f1"/>
        <circle cx="72" cy="80" r="4" fill="#6366f1"/>
        <path d="M55 52h16M55 59h10" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="85" cy="38" r="10" fill="#1e1e3a" stroke="#ef4444" strokeWidth="1.5"/>
        <path d="M82 38h6M85 35v6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" transform="rotate(45 85 38)"/>
      </svg>
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Your cart is empty</h2>
    <p className="text-gray-400 text-sm max-w-xs mb-8">
      Looks like you haven't added anything yet. Explore our store and find something you love!
    </p>
    <Link href="/"
      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500
                 text-white text-sm font-semibold rounded-xl transition-colors duration-200">
      Continue Shopping
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
      </svg>
    </Link>
  </div>
);

/* ── Loading Skeleton ── */
const LoadingSkeleton = () => (
  <div className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
    <div className="h-8 w-40 bg-white/5 rounded-xl mb-8"/>
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 space-y-4">
        {[1,2,3].map(i => (
          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5">
            <div className="w-20 h-20 rounded-xl bg-white/10 shrink-0"/>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded w-3/4"/>
              <div className="h-3 bg-white/10 rounded w-1/4"/>
              <div className="h-4 bg-white/10 rounded w-1/3"/>
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Shopping Cart</h1>
            <p className="text-sm text-gray-400 mt-1">{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
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
          <div className="md:col-span-2 space-y-3">
            {cartItems.map((item) => {
              const product = products[item.product_id];
              if (!product) return null;
              const subtotal = (product.price * (item.quantity || 1)).toFixed(2);

              return (
                <div key={item.product_id}
                  className="group bg-[#111118] border border-white/5 rounded-2xl p-4 sm:p-5
                             hover:border-white/10 transition-all duration-200">
                  <div className="flex gap-4 items-start">

                    {/* Product Image */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden
                                    bg-white/5 ring-1 ring-white/10 shrink-0">
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
                          <h3 className="text-sm sm:text-base font-semibold text-white truncate leading-snug">
                            {product.name}
                          </h3>
                          {product.brand && (
                            <p className="text-xs text-gray-500 mt-0.5">{product.brand}</p>
                          )}
                        </div>
                        {/* Remove button */}
                        <button
                          onClick={() => removeItem(item.product_id)}
                          className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20
                                     border border-white/5 hover:border-red-500/30 flex items-center justify-center
                                     transition-all duration-200 group/btn"
                          title="Remove item"
                        >
                          <svg className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-red-400 transition-colors"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>

                      {/* Price + Quantity Row */}
                      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                        <div className="flex items-center gap-1">
                          <span className="text-base font-bold text-indigo-400">${product.price}</span>
                          {item.quantity > 1 && (
                            <span className="text-xs text-gray-500 ml-1">× {item.quantity} = <span className="text-white font-medium">${subtotal}</span></span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.product_id, -1)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-300
                                       hover:bg-white/10 hover:text-white transition-all text-lg font-bold"
                          >−</button>
                          <span className="text-white font-semibold text-sm w-6 text-center tabular-nums">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product_id, 1)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-300
                                       hover:bg-indigo-600 hover:text-white transition-all text-lg font-bold"
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
          <div className="h-max sticky top-6">
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
                      <div className="flex items-center gap-2 min-w-0">
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
                  <span className="text-emerald-400 font-medium">Free</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="px-5 py-4 flex items-center justify-between border-b border-white/5">
                <span className="text-base font-bold text-white">Total</span>
                <span className="text-xl font-bold text-indigo-400">${totalPrice.toFixed(2)}</span>
              </div>

              {/* CTA Buttons */}
              <div className="px-5 py-5 space-y-3">
                <Link href="/checkout" className="block">
                  <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm
                                     font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Proceed to Checkout
                  </button>
                </Link>
                <Link href="/" className="block">
                  <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white
                                     text-sm font-semibold rounded-xl border border-white/5 hover:border-white/10
                                     transition-all duration-200">
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