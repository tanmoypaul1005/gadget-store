"use client";
import { addGuestOrder } from "@/app/action/order";
import { clearGuestCart, getGuestCartItems } from "@/util/guestCart";
import { Toastr } from "@/util/utilityFunction";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/* ── Loading Skeleton ── */
const LoadingSkeleton = () => (
  <div className="min-h-screen bg-[#0a0a0f] px-4 py-10 sm:px-6 lg:px-8 animate-pulse">
    <div className="max-w-5xl mx-auto">
      <div className="h-8 w-48 bg-white/5 rounded-xl mb-10" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5">
              <div className="w-16 h-16 rounded-xl bg-white/10 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-white/10 rounded w-3/4" />
                <div className="h-3 bg-white/10 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
        <div className="h-80 rounded-2xl bg-white/5" />
      </div>
    </div>
  </div>
);

/* ── Empty Cart ── */
const EmptyCart = () => (
  <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center py-24 px-4 text-center">
    <svg viewBox="0 0 120 120" fill="none" className="w-32 h-32 mb-6 mx-auto">
      <circle cx="60" cy="60" r="56" fill="#111118" stroke="#1e1e3a" strokeWidth="1.5" />
      <path d="M30 38h8l10 34h26l8-24H46" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="52" cy="80" r="4" fill="#6366f1" />
      <circle cx="72" cy="80" r="4" fill="#6366f1" />
      <circle cx="85" cy="38" r="10" fill="#1e1e3a" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M82 38h6M85 35v6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" transform="rotate(45 85 38)" />
    </svg>
    <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
    <p className="text-gray-400 text-sm max-w-xs mb-8">Add some products before checking out.</p>
    <Link href="/"
      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors">
      Browse Products
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  </div>
);

/* ── Input Field ── */
const InputField = ({ label, required, icon, error, ...props }) => (
  <div>
    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
      {label} {required && <span className="text-indigo-400">*</span>}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          {icon}
        </div>
      )}
      {props.as === "textarea" ? (
        <textarea
          {...props}
          rows={3}
          className={`w-full ${icon ? "pl-10" : "pl-4"} pr-4 py-3 rounded-xl bg-white/5 border border-white/10
                      text-white text-sm placeholder:text-gray-600 resize-none
                      focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all duration-200`}
        />
      ) : (
        <input
          {...props}
          className={`w-full ${icon ? "pl-10" : "pl-4"} pr-4 py-3 rounded-xl bg-white/5 border border-white/10
                      text-white text-sm placeholder:text-gray-600
                      focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all duration-200`}
        />
      )}
    </div>
  </div>
);

/* ── Main Component ── */
const GuestCheckout = ({ initialName = "", initialEmail = "" }) => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [form, setForm] = useState({ name: initialName, email: initialEmail, phone: "", address: "" });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      name: prev.name || initialName,
      email: prev.email || initialEmail,
    }));
  }, [initialName, initialEmail]);

  useEffect(() => {
    const loadProducts = async () => {
      const items = getGuestCartItems();
      setCartItems(items);
      const map = {};
      await Promise.all(items.map(async (item) => {
        try {
          const res = await fetch(`/api/products/${item.product_id}`);
          if (res.ok) {
            const data = await res.json();
            if (data?.success) map[item.product_id] = data.data;
          }
        } catch (_) {}
      }));
      setProducts(map);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const totalPrice = cartItems.reduce((sum, item) => {
    const p = products[item.product_id];
    return sum + (p?.price || 0) * (item.quantity || 1);
  }, 0);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handlePlaceOrder = async () => {
    if (!form.name.trim()) return Toastr({ type: "error", message: "Please enter your name" });
    if (!form.email.trim()) return Toastr({ type: "error", message: "Please enter your email" });
    if (!form.phone.trim()) return Toastr({ type: "error", message: "Please enter your phone number" });
    if (form.phone.trim().length < 10) return Toastr({ type: "error", message: "Phone number must be at least 10 digits" });
    if (!form.address.trim()) return Toastr({ type: "error", message: "Please enter your address" });
    setPlacing(true);
    const response = await addGuestOrder({
      name: form.name.trim(), email: form.email.trim(),
      phone: form.phone.trim(), address: form.address.trim(), items: cartItems,
    });
    setPlacing(false);
    if (response?.success) {
      clearGuestCart();
      Toastr({ type: "success", message: "Order placed successfully!" });
      router.push("/");
    } else {
      Toastr({ type: "error", message: response?.message || "Something went wrong" });
    }
  };

  if (loading) return <LoadingSkeleton />;
  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-10">
      <div className="common-class">

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <Link href="/cart" className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Checkout</h1>
          </div>
          <p className="text-gray-400 text-sm ml-7">Complete your order as a guest</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-10 ml-7">
          {["Cart", "Details", "Confirm"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold
                ${i === 1 ? "bg-indigo-600 text-white" : i < 1 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/5 text-gray-500 border border-white/10"}`}>
                {i < 1 ? (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : i + 1}
              </div>
              <span className={`text-xs font-medium ${i === 1 ? "text-white" : "text-gray-500"}`}>{step}</span>
              {i < 2 && <div className={`w-8 h-px ${i < 1 ? "bg-emerald-500/30" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-5">

          {/* ── Left: Guest Info Form ── */}
          <div className="lg:col-span-3">
            <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">

              {/* Form Header */}
              <div className="bg-[#16161f] px-6 py-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Guest Information</h2>
                  <p className="text-xs text-gray-500">We&apos;ll use this to process your order</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="px-6 py-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    label="Full Name" required
                    type="text" name="name" value={form.name}
                    onChange={handleChange} placeholder="John Doe"
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                  />
                  <InputField
                    label="Phone Number" required
                    type="tel" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="01XXXXXXXXX"
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  />
                </div>

                <InputField
                  label="Email Address" required
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="your@email.com"
                  icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                />

                <InputField
                  label="Delivery Address" required
                  as="textarea" name="address" value={form.address}
                  onChange={handleChange} placeholder="House no, Road, Area, City"
                  icon={<svg className="w-4 h-4 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                />
              </div>

              {/* Login Hint */}
              <div className="mx-6 mb-6 px-4 py-3 rounded-xl bg-indigo-600/5 border border-indigo-500/15 flex items-center gap-3">
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-gray-400">
                  Already have an account?{" "}
                  <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                    Login for faster checkout
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Order Summary ── */}
          <div className="lg:col-span-2">
            <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden sticky top-6">

              {/* Summary Header */}
              <div className="bg-[#16161f] px-5 py-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Order Summary</h2>
                  <p className="text-xs text-gray-500">{cartItems.length} item{cartItems.length !== 1 ? "s" : ""}</p>
                </div>
              </div>

              {/* Items List */}
              <div className="px-5 py-4 space-y-3 border-b border-white/5 max-h-56 overflow-y-auto">
                {cartItems.map((item) => {
                  const product = products[item.product_id];
                  if (!product) return null;
                  return (
                    <div key={item.product_id} className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 shrink-0">
                        <Image src={product.image} alt={product.name} fill className="object-contain p-1.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-white truncate">{product.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          ${product.price} × {item.quantity || 1}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-indigo-400 shrink-0">
                        ${(product.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Price Breakdown */}
              <div className="px-5 py-4 space-y-2 border-b border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-emerald-400 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tax</span>
                  <span className="text-white">Included</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="px-5 py-4 flex items-center justify-between border-b border-white/5">
                <span className="text-base font-bold text-white">Total</span>
                <span className="text-xl font-bold text-indigo-400">${totalPrice.toFixed(2)}</span>
              </div>

              {/* Place Order CTA */}
              <div className="px-5 py-5">
                <button
                  onClick={handlePlaceOrder}
                  disabled={placing}
                  className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed
                             text-white text-sm font-bold rounded-xl transition-all duration-200
                             flex items-center justify-center gap-2 group"
                >
                  {placing ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Placing Order...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Place Order · ${totalPrice.toFixed(2)}
                    </>
                  )}
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "SSL Secure" },
                    { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Easy Returns" },
                    { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Free Ship" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/5">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                      <span className="text-[10px] text-gray-500 text-center leading-tight">{label}</span>
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

export default GuestCheckout;