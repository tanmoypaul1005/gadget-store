"use client";
import { addOrderFromCookie } from "@/app/action/order";
import Address from "@/app/components/Address/Address";
import CommonButton from "@/app/components/button/CommonButton";
import { address_type } from "@/util/const";
import { clearGuestCart, getGuestCartItems } from "@/util/guestCart";
import { Toastr } from "@/util/utilityFunction";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/* ── Per-item skeleton ── */
const ProductSkeleton = () => (
  <div className="animate-pulse flex items-center gap-4 p-3 border rounded-xl bg-white/5 border-white/5">
    <div className="w-14 h-14 rounded-xl bg-white/10 shrink-0" />
    <div className="flex-1 space-y-2">
      <div className="w-3/4 h-3 rounded bg-white/10" />
      <div className="w-1/4 h-2 rounded bg-white/10" />
      <div className="w-1/3 h-3 mt-1 rounded bg-white/10" />
    </div>
  </div>
);

/* ── Empty Cart ── */
const EmptyCart = () => (
  <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center py-24 px-4 text-center">
    <svg viewBox="0 0 120 120" fill="none" className="w-32 h-32 mx-auto mb-6">
      <circle cx="60" cy="60" r="56" fill="#111118" stroke="#1e1e3a" strokeWidth="1.5" />
      <path d="M30 38h8l10 34h26l8-24H46" stroke="#4f46e5" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="52" cy="80" r="4" fill="#6366f1" />
      <circle cx="72" cy="80" r="4" fill="#6366f1" />
      <circle cx="85" cy="38" r="10" fill="#1e1e3a" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M82 38h6M85 35v6" stroke="#ef4444" strokeWidth="1.5"
        strokeLinecap="round" transform="rotate(45 85 38)" />
    </svg>
    <h2 className="mb-2 text-2xl font-bold text-white">Your cart is empty</h2>
    <p className="max-w-xs mb-8 text-sm text-gray-400">Add some products before checking out.</p>
    <Link href="/"
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-colors bg-indigo-600 hover:bg-indigo-500 rounded-xl">
      Browse Products
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  </div>
);

/* ── Section Card ── */
const SectionCard = ({ title, icon, children, badge }) => (
  <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">
    <div className="bg-[#16161f] px-5 py-4 border-b border-white/5 flex items-center gap-3">
      <div className="flex items-center justify-center w-8 h-8 border rounded-lg bg-indigo-600/20 border-indigo-500/20 shrink-0">
        {icon}
      </div>
      <h2 className="text-sm font-bold text-white">{title}</h2>
      {badge && (
        <span className="ml-auto text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
    <div className="px-5 py-5">{children}</div>
  </div>
);

/* ── Main Component ── */
const LoggedInCheckout = ({ email }) => {
  const router = useRouter();
  const [address, setAddress] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [productsLoading, setProductsLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [contactNumber, setContactNumber] = useState("");

  const shipping_address = address?.find((a) => a?.address_type === address_type.shipping_address);
  const billing_address = address?.find((a) => a?.address_type === address_type.billing_address);

  const fetchAddresses = async () => {
    try {
      const res = await fetch(`/api/address?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      setAddress(Array.isArray(data?.data) ? data.data : []);
    } catch (_) {}
  };

  useEffect(() => {
    // Show cart items instantly from cookie — no blocking
    const cookieItems = getGuestCartItems();
    setCartItems(cookieItems);

    const init = async () => {
      const items = cookieItems;
      fetchAddresses(); // fire-and-forget — address section loads independently
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
      setProductsLoading(false);
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalPrice = cartItems.reduce((sum, item) => {
    const p = products[item.product_id];
    return sum + (p?.price || 0) * (item.quantity || 1);
  }, 0);

  const handlePlaceOrder = async () => {
    if (!shipping_address) return Toastr({ type: "error", message: "Please add a shipping address" });
    if (!billing_address) return Toastr({ type: "error", message: "Please add a billing address" });
    if (!cartItems.length) return Toastr({ type: "error", message: "Your cart is empty" });

    setPlacing(true);
    const res = await addOrderFromCookie({
      email,
      shipping_address: shipping_address._id,
      billing_address: billing_address._id,
      items: cartItems,
    });
    setPlacing(false);

    if (res?.success) {
      clearGuestCart();
      Toastr({ type: "success", message: "Order placed successfully!" });
      router.push("/orders");
    } else {
      Toastr({ type: "error", message: res?.message || "Something went wrong" });
    }
  };

  if (!cartItems.length && !productsLoading) return <EmptyCart />;

  const totalItems = cartItems.reduce((s, i) => s + (i.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] ">
      <div className="common-class">

        {/* Page Header */}
        <div className="mt-8 mb-8">
          <div className="flex items-center gap-3 mb-1">
            <Link href="/cart" className="text-gray-500 transition-colors hover:text-gray-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">Checkout</h1>
          </div>
          <p className="text-sm text-gray-400 ml-7">Review your order and complete your purchase</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-10 ml-7">
          {["Cart", "Details", "Confirm"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold
                ${i === 1 ? "bg-indigo-600 text-white"
                  : i < 1 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-white/5 text-gray-500 border border-white/10"}`}>
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

          {/* ── Left Column ── */}
          <div className="space-y-5 lg:col-span-3">

            {/* Order Items */}
            <SectionCard
              title="Order Items"
              badge={`${totalItems} item${totalItems !== 1 ? "s" : ""}`}
              icon={
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              }
            >
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const product = products[item.product_id];
                  if (!product) return <ProductSkeleton key={item.product_id} />;
                  return (
                    <div key={item.product_id}
                      className="flex items-center gap-4 p-3 transition-colors border rounded-xl bg-white/5 border-white/5 hover:border-white/10">
                      <div className="relative overflow-hidden w-14 h-14 rounded-xl bg-white/5 ring-1 ring-white/10 shrink-0">
                        <Image src={product.image} alt={product.name} fill className="object-contain p-1.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate">{product.name}</h4>
                        {product.brand && (
                          <p className="text-xs text-gray-500 mt-0.5">{product.brand}</p>
                        )}
                        <p className="mt-1 text-xs text-gray-400">
                          ${product.price} <span className="text-gray-600">×</span>{" "}
                          <span className="text-gray-300">{item.quantity || 1}</span>
                        </p>
                      </div>
                      <span className="text-sm font-bold text-indigo-400 shrink-0">
                        ${(product.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SectionCard>

            {/* Delivery Address */}
            <SectionCard
              title="Delivery Address"
              icon={
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            >
              {/* Address status pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <AddressPill label="Shipping" filled={!!shipping_address} />
                <AddressPill label="Billing" filled={!!billing_address} />
              </div>
              <Address address={address} email={email} onSaved={fetchAddresses} />
            </SectionCard>
          </div>

          {/* ── Right: Order Summary ── */}
          <div className="lg:col-span-2">
            <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden sticky top-6">

              {/* Header */}
              <div className="bg-[#16161f] px-5 py-4 border-b border-white/5 flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 border rounded-lg bg-white/5 border-white/5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Order Summary</h2>
                  <p className="text-xs text-gray-500">{cartItems.length} product{cartItems.length !== 1 ? "s" : ""}</p>
                </div>
              </div>

              {/* Items */}
              <div className="px-5 py-4 space-y-2.5 border-b border-white/5 max-h-48 overflow-y-auto">
                {productsLoading
                  ? [1, 2].map((i) => (
                      <div key={i} className="animate-pulse flex justify-between gap-3">
                        <div className="flex-1 h-3 rounded bg-white/10" />
                        <div className="w-12 h-3 rounded bg-white/10" />
                      </div>
                    ))
                  : cartItems.map((item) => {
                      const p = products[item.product_id];
                      if (!p) return null;
                      return (
                        <div key={item.product_id} className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 bg-white/5 rounded px-1.5 py-0.5 shrink-0">
                            ×{item.quantity || 1}
                          </span>
                          <span className="flex-1 text-sm text-gray-300 truncate">{p.name}</span>
                          <span className="text-sm font-semibold text-white shrink-0">
                            ${(p.price * (item.quantity || 1)).toFixed(2)}
                          </span>
                        </div>
                      );
                    })}
              </div>

              {/* Address Preview */}
              {(shipping_address || billing_address) && (
                <div className="px-5 py-4 space-y-3 border-b border-white/5">
                  {shipping_address && (
                    <AddressPreview label="Ship to" address={shipping_address} />
                  )}
                  {billing_address && (
                    <AddressPreview label="Bill to" address={billing_address} />
                  )}
                </div>
              )}

              {/* Price Breakdown */}
              <div className="px-5 py-4 space-y-2 border-b border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  {productsLoading
                    ? <div className="w-16 h-3 rounded bg-white/10 animate-pulse" />
                    : <span className="text-white">${totalPrice.toFixed(2)}</span>}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="font-medium text-emerald-400">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tax</span>
                  <span className="text-white">Included</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <span className="text-base font-bold text-white">Total</span>
                {productsLoading
                  ? <div className="w-20 h-5 rounded bg-white/10 animate-pulse" />
                  : <span className="text-xl font-bold text-indigo-400">${totalPrice.toFixed(2)}</span>}
              </div>

              {/* CTA */}
              <div className="px-5 py-5 space-y-3">
                <CommonButton
                  variant="primary"
                  fullWidth
                  loading={placing}
                  onClick={handlePlaceOrder}
                  icon={
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                >
                  {placing ? "Placing Order..." : `Place Order · $${totalPrice.toFixed(2)}`}
                </CommonButton>

                <Link href="/cart" className="block">
                  <CommonButton
                    variant="secondary"
                    fullWidth
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    }
                  >
                    Back to Cart
                  </CommonButton>
                </Link>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "SSL Secure" },
                    { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Easy Returns" },
                    { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Free Ship" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl
                                                bg-white/5 border border-white/5">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                      <span className="text-[10px] text-gray-500 text-center">{label}</span>
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

export default LoggedInCheckout;

/* ── Address Status Pill ── */
const AddressPill = ({ label, filled }) => (
  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border
    ${filled
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : "bg-red-500/10 text-red-400 border-red-500/20"}`}>
    {filled ? (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )}
    {label} {filled ? "Added" : "Missing"}
  </div>
);

/* ── Address Preview in Sidebar ── */
const AddressPreview = ({ label, address }) => (
  <div className="flex gap-2">
    <span className="text-xs text-gray-500 shrink-0 mt-0.5 w-12">{label}</span>
    <p className="text-xs text-gray-300 line-clamp-2">
      {[address.street, address.city, address.country].filter(Boolean).join(", ")}
    </p>
  </div>
);