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
    <div className="min-h-screen bg-[#0a0a0f] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8 opacity-80">
              <Image
                alt="No orders found"
                src={iNoOrder}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">No orders yet</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-sm">
              Looks like you haven't placed any orders. Start exploring our products!
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
    </div>
  );
};

export default Orders;