"use client";
import { getGuestCartItems, saveGuestCartItems } from "@/util/guestCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const GuestCartView = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    setLoading(true);
    const items = getGuestCartItems();
    if (items.length === 0) {
      setCartItems([]);
      setLoading(false);
      return;
    }
    setCartItems(items);
    const productMap = {};
    await Promise.all(
      items.map(async (item) => {
        try {
          const res = await fetch(`/api/products/${item.product_id}`);
          if (res.ok) {
            const data = await res.json();
            if (data?.success) productMap[item.product_id] = data.data;
          }
        } catch (_) {}
      })
    );
    setProducts(productMap);
    setLoading(false);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = (product_id) => {
    const updated = getGuestCartItems().filter((i) => i.product_id !== product_id);
    saveGuestCartItems(updated);
    setCartItems(updated);
  };

  const updateQuantity = (product_id, delta) => {
    const updated = getGuestCartItems()
      .map((i) =>
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

  if (loading)
    return (
      <div className="flex items-center justify-center h-40 text-white">
        Loading cart...
      </div>
    );

  if (cartItems.length === 0)
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-2xl font-semibold text-white">Your Cart is Empty!</p>
        <p className="mx-5 mt-2 font-semibold text-white">
          {"Looks like you haven't added anything yet."}
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 font-medium text-white bg-gray-800 rounded-md"
        >
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="common-topGap">
      <div className="font-sans common-class">
        <div className="grid gap-8 mt-5 md:grid-cols-3">
          {/* Items */}
          <div className="space-y-4 md:col-span-2">
            {cartItems.map((item, index) => {
              const product = products[item.product_id];
              if (!product) return null;
              return (
                <div key={item.product_id}>
                  <div className="flex items-start gap-4">
                    <div className="flex items-start w-full gap-4">
                      <div className="p-2 bg-gray-100 rounded-md w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="object-contain w-full h-full"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex flex-col w-full gap-y-2">
                        <h3 className="w-full text-sm font-bold text-white md:text-base line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs font-semibold text-white">
                          Brand: {product.brand ?? ""}
                        </p>
                        <h4 className="text-lg font-bold text-white">${product.price}</h4>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product_id)}
                          className="flex items-center gap-1 text-xs font-semibold text-red-500 shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline w-4 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                    {/* Quantity */}
                    <div className="flex flex-col items-end justify-start ml-auto gap-2 pt-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product_id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-white bg-gray-700 rounded hover:bg-gray-600"
                        >
                          -
                        </button>
                        <span className="text-white font-medium w-5 text-center">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product_id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-white bg-gray-700 rounded hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && (
                    <hr className="mt-2 border-gray-300" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="p-4 bg-gray-100 rounded-md h-max">
            <h3 className="pb-2 text-lg font-bold text-gray-800 border-b border-gray-300 max-sm:text-base">
              Order Summary
            </h3>
            <ul className="mt-4 space-y-3">
              {cartItems.map((item) => {
                const p = products[item.product_id];
                if (!p) return null;
                return (
                  <li
                    key={item.product_id}
                    className="flex flex-wrap gap-4 text-sm text-gray-800"
                  >
                    <span className="line-clamp-1 flex-1">{p.name}</span>
                    <span className="font-bold">
                      ${(p.price * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-wrap gap-4 mt-4 border-t pt-4 text-sm font-bold text-gray-800">
              <span>Total</span>
              <span className="ml-auto">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="mt-6 space-y-3">
              <Link href="/checkout">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                >
                  Checkout
                </button>
              </Link>
              <div className="mt-3" />
              <Link href="/">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCartView;
