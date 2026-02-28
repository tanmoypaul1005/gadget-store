"use client";
import { addGuestOrder } from "@/app/action/order";
import { clearGuestCart, getGuestCartItems } from "@/util/guestCart";
import { Toastr } from "@/util/utilityFunction";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GuestCheckout = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const loadProducts = async () => {
      const items = getGuestCartItems();
      setCartItems(items);
      const map = {};
      await Promise.all(
        items.map(async (item) => {
          try {
            const res = await fetch(`/api/products/${item.product_id}`);
            if (res.ok) {
              const data = await res.json();
              if (data?.success) map[item.product_id] = data.data;
            }
          } catch (_) {}
        })
      );
      setProducts(map);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const totalPrice = cartItems.reduce((sum, item) => {
    const p = products[item.product_id];
    return sum + (p?.price || 0) * (item.quantity || 1);
  }, 0);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = async () => {
    if (!form.name.trim()) return Toastr({ type: "error", message: "Please enter your name" });
    if (!form.email.trim()) return Toastr({ type: "error", message: "Please enter your email" });
    if (!form.phone.trim()) return Toastr({ type: "error", message: "Please enter your phone number" });
    if (form.phone.trim().length < 10) return Toastr({ type: "error", message: "Phone number must be at least 10 digits" });
    if (!form.address.trim()) return Toastr({ type: "error", message: "Please enter your address" });

    setPlacing(true);
    const response = await addGuestOrder({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      items: cartItems,
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

  if (loading)
    return (
      <div className="flex items-center justify-center h-40 text-white">
        Loading...
      </div>
    );

  if (cartItems.length === 0)
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-2xl font-semibold text-white">Your Cart is Empty!</p>
        <Link href="/" className="mt-4 px-6 py-2 font-medium text-white bg-gray-800 rounded-md">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="grid px-5 common-topGap sm:px-0 common-class lg:grid-cols-2">
      {/* Left: Order Summary */}
      <div>
        <p className="text-xl font-medium">Order Summary</p>
        <p className="text-gray-400">Check your items before placing your order.</p>
        <div className="px-2 py-4 my-5 space-y-3 border rounded-lg sm:px-6">
          {cartItems.map((item) => {
            const product = products[item.product_id];
            if (!product) return null;
            return (
              <div key={item.product_id} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white line-clamp-1">{product.name}</p>
                  <p className="text-xs text-gray-400">Qty: {item.quantity || 1}</p>
                </div>
                <p className="font-bold text-white">${(product.price * (item.quantity || 1)).toFixed(2)}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between border-t border-b py-3 mt-2">
          <p className="text-sm font-medium">Subtotal</p>
          <p className="font-semibold">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm font-medium">Total</p>
          <p className="text-2xl font-semibold">${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Right: Guest Info Form */}
      <div className="lg:pl-10">
        <p className="text-xl font-medium">Guest Checkout</p>
        <p className="text-gray-400 mb-4">Fill in your details to place the order.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              className="w-full px-4 py-2.5 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Delivery Address *</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              placeholder="House no, Road, Area, City"
              className="w-full px-4 py-2.5 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm resize-none"
            />
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={placing}
          className="w-full px-6 py-3 mt-6 mb-8 font-medium text-white bg-gray-900 rounded-md disabled:opacity-60 hover:bg-gray-800 transition"
        >
          {placing ? "Placing Order..." : "Place Order"}
        </button>

        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>{" "}
          for a faster checkout experience.
        </p>
      </div>
    </div>
  );
};

export default GuestCheckout;
