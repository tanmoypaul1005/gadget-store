import { auth } from "@/auth";
import React from "react";
import { getOrders } from "../action/order";
import Image from "next/image";
import { iNoOrder } from "@/util/imageImports";
import { addDays, formatDate } from "@/util/utilityFunction";

const StatusBadge = ({ status }) => {
  const statusStyles = {
    delivered: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    processing: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    shipped: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    cancelled: "bg-red-500/10 text-red-400 border border-red-500/20",
    pending: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  };
  const style = statusStyles[status?.toLowerCase()] || statusStyles.pending;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold capitalize ${style}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
      {status}
    </span>
  );
};

const Orders = async () => {
  const session = await auth();
  const order = await getOrders(session?.user?.email);

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-8">
      <div className="common-class">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">My Orders</h1>
          <p className="mt-1 text-sm text-gray-400">
            {order?.data?.length > 0
              ? `${order.data.length} order${order.data.length > 1 ? "s" : ""} placed`
              : "Track and manage your purchases"}
          </p>
        </div>

        {order?.data?.length > 0 ? (
          <div className="space-y-5">
            {order.data.map((item, index) => (
              <article
                key={index}
                className="group relative bg-[#111118] border border-white/5 rounded-2xl overflow-hidden
                           hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
              >
                {/* Order Header Bar */}
                <div className="bg-[#16161f] px-5 py-4 sm:px-6 border-b border-white/5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Order ID</span>
                      <span className="text-sm font-mono font-semibold text-indigo-400">#{item?._id}</span>
                    </div>
                    <div className="flex flex-row items-center gap-4 sm:gap-6 flex-wrap">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs text-gray-500">Placed on</span>
                        <span className="text-sm font-medium text-gray-300">{formatDate(item?.createdAt)}</span>
                      </div>
                      <div className="h-8 w-px bg-white/5 hidden sm:block"></div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs text-gray-500">Expected delivery</span>
                        <span className="text-sm font-medium text-emerald-400">{formatDate(addDays(item?.createdAt, 5))}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="divide-y divide-white/5">
                  {JSON.parse(item?.items)?.map((product, index2) => (
                    <div key={index2} className="flex gap-4 px-5 py-5 sm:px-6 items-center">
                      {/* Product Image */}
                      <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden
                                      bg-white/5 ring-1 ring-white/10">
                        <Image
                          src={product?.product?.image}
                          alt={product?.product?.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-sm sm:text-base font-semibold text-white truncate leading-snug">
                            {product?.product?.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Qty: <span className="text-gray-300 font-medium">{product?.quantity}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2 flex-wrap">
                          <span className="text-base font-bold text-indigo-400">${product?.product?.price}</span>
                          <StatusBadge status={item?.order_status} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="bg-[#16161f] px-5 py-4 sm:px-6 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <span className="text-sm text-gray-400">
                        {JSON.parse(item?.items)?.length} item{JSON.parse(item?.items)?.length > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Total</span>
                      <span className="text-lg font-bold text-white">
                        <span className="text-indigo-400">${item?.total_amount}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center  px-4 text-center">
            <div className="mb-8 drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              <EmptyOrderIllustration />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">No orders yet</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-sm">
              Looks like you haven&apos;t placed any orders. Start exploring our products!
            </p>

            <a href="/shop"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500
            text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              Browse Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div >
  );
};

export default Orders;



const EmptyOrderIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 sm:w-64 sm:h-64">
    {/* Background Circle */}
    <circle cx="100" cy="100" r="90" fill="#1a1a2e" stroke="#2d2d4e" strokeWidth="1.5" />

    {/* Box Body */}
    <rect x="55" y="80" width="90" height="75" rx="8" fill="#1e1e3a" stroke="#4f46e5" strokeWidth="1.5" />

    {/* Box Lid */}
    <path d="M50 85 Q100 65 150 85" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M50 85 L55 80 L145 80 L150 85" fill="#16163a" stroke="#4f46e5" strokeWidth="1.5" />

    {/* Lid Flaps */}
    <path d="M55 80 L80 70 L120 70 L145 80" fill="#1e1e3a" stroke="#4f46e5" strokeWidth="1.5" />
    <line x1="100" y1="70" x2="100" y2="80" stroke="#4f46e5" strokeWidth="1.5" />

    {/* Question Mark inside box */}
    <text x="100" y="133" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#4f46e5" opacity="0.9">?</text>

    {/* Stars / Sparkles */}
    <circle cx="40" cy="50" r="3" fill="#6366f1" opacity="0.6" />
    <circle cx="160" cy="45" r="2" fill="#818cf8" opacity="0.5" />
    <circle cx="170" cy="130" r="2.5" fill="#6366f1" opacity="0.4" />
    <circle cx="30" cy="140" r="2" fill="#818cf8" opacity="0.5" />

    {/* Small sparkle lines */}
    <line x1="40" y1="44" x2="40" y2="56" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
    <line x1="34" y1="50" x2="46" y2="50" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
    <line x1="160" y1="40" x2="160" y2="50" stroke="#818cf8" strokeWidth="1" opacity="0.4" />
    <line x1="155" y1="45" x2="165" y2="45" stroke="#818cf8" strokeWidth="1" opacity="0.4" />

    {/* Bottom shadow line */}
    <ellipse cx="100" cy="160" rx="45" ry="6" fill="#4f46e5" opacity="0.15" />
  </svg>
);