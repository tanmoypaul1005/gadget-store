"use client";
import { addOrderFromCookie } from "@/app/action/order";
import Address from "@/app/components/Address/Address";
import { address_type } from "@/util/const";
import { clearGuestCart, getGuestCartItems } from "@/util/guestCart";
import { Toastr } from "@/util/utilityFunction";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoggedInCheckout = ({ email }) => {
  const router = useRouter();

  const [address, setAddress] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [contactNumber, setContactNumber] = useState("");

  const shipping_address = address?.find(
    (a) => a?.address_type === address_type.shipping_address
  );
  const billing_address = address?.find(
    (a) => a?.address_type === address_type.billing_address
  );

  const fetchAddresses = async () => {
    try {
      const res = await fetch(`/api/address?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      setAddress(Array.isArray(data?.data) ? data.data : []);
    } catch (_) {}
  };

  useEffect(() => {
    const init = async () => {
      await fetchAddresses();
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
    init();
  }, []);

  const totalPrice = cartItems.reduce((sum, item) => {
    const p = products[item.product_id];
    return sum + (p?.price || 0) * (item.quantity || 1);
  }, 0);

  const handlePlaceOrder = async () => {
    if (!shipping_address) {
      return Toastr({ type: "error", message: "Please add a shipping address" });
    }
    if (!billing_address) {
      return Toastr({ type: "error", message: "Please add a billing address" });
    }
    if (!contactNumber.trim()) {
      return Toastr({ type: "error", message: "Please enter contact number" });
    }
    if (contactNumber.trim().length < 10) {
      return Toastr({ type: "error", message: "Contact number must be at least 10 digits" });
    }
    if (!cartItems.length) {
      return Toastr({ type: "error", message: "Your cart is empty" });
    }

    setPlacing(true);
    const res = await addOrderFromCookie({
      email,
      shipping_address: shipping_address._id,
      billing_address: billing_address._id,
      contact_number: contactNumber.trim(),
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

  if (loading)
    return (
      <div className="flex items-center justify-center h-40 text-white">
        Loading...
      </div>
    );

  if (!cartItems.length)
    return (
      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <p className="text-2xl font-semibold text-white">Your Cart is Empty!</p>
        <Link href="/" className="px-6 py-2 font-medium text-white bg-gray-800 rounded-md">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="common-topGap common-class font-sans">
      <div className="grid md:grid-cols-3 gap-8 mt-5">

        {/* Left: address + contact + summary */}
        <div className="md:col-span-2 space-y-6">

          {/* Order items */}
          <div>
            <h3 className="text-lg font-bold text-white border-b border-gray-600 pb-2 mb-4">
              Order Summary
            </h3>
            <div className="space-y-4">
              {cartItems.map((item) => {
                const product = products[item.product_id];
                if (!product) return null;
                return (
                  <div key={item.product_id} className="flex gap-4 items-start">
                    <div className="p-2 bg-gray-100 rounded-md w-20 h-20 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={70}
                        height={70}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-semibold text-white line-clamp-1">{product.name}</h4>
                      <p className="text-xs text-gray-400">Brand: {product.brand ?? ""}</p>
                      <p className="text-sm font-bold text-white">
                        ${product.price} × {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">Delivery Address</h3>
            <Address address={address} email={email} onSaved={fetchAddresses} />
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-white mb-2">Contact Number</h3>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="w-full max-w-xs px-4 py-2.5 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Right: total panel */}
        <div className="p-4 bg-gray-100 rounded-md h-max">
          <h3 className="pb-2 text-lg font-bold text-gray-800 border-b border-gray-300">
            Order Total
          </h3>
          <ul className="mt-4 space-y-3 text-gray-800">
            {cartItems.map((item) => {
              const p = products[item.product_id];
              return p ? (
                <li key={item.product_id} className="flex justify-between text-sm font-medium">
                  <span className="line-clamp-1 max-w-[65%]">{p.name}</span>
                  <span>${(p.price * (item.quantity || 1)).toFixed(2)}</span>
                </li>
              ) : null;
            })}
          </ul>
          <div className="flex justify-between mt-4 pt-3 border-t border-gray-300 font-bold text-gray-800">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            disabled={placing}
            className="w-full px-6 py-3 mt-4 font-medium text-white bg-gray-900 rounded-md disabled:opacity-60 hover:bg-gray-800 transition"
          >
            {placing ? "Placing..." : "Place Order"}
          </button>
          <div className="mt-3">
            <Link href="/cart">
              <button className="w-full px-6 py-2.5 text-sm font-medium text-gray-800 border border-gray-300 rounded-md">
                Back to Cart
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoggedInCheckout;
