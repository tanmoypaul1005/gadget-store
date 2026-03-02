// ─────────────────────────────────────────
// Address.jsx (Client Component)
// ─────────────────────────────────────────
"use client";
import React, { useState } from "react";
import AddAddressModal from "./AddAddressModal";
import AddressCard from "./AddressCard";
import { address_type } from "@/util/const";

const Address = ({ address, email, onSaved }) => {
  const [showAddAddressModal, setAddressModal] = useState(false);
  const [selectType, setSelectType] = useState(null);

  const shipping_address = address?.find((a) => a?.address_type === address_type.shipping_address);
  const billing_address = address?.find((a) => a?.address_type === address_type.billing_address);

  const openModal = (type) => {
    setSelectType(type);
    setAddressModal(true);
  };

  const addressTypes = [
    {
      type: address_type.billing_address,
      label: "Billing Address",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      data: billing_address,
      desc: "Used for payment & invoices",
    },
    {
      type: address_type.shipping_address,
      label: "Shipping Address",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      data: shipping_address,
      desc: "Where your orders are delivered",
    },
  ];

  return (
    <div className="space-y-4">
      {addressTypes.map(({ type, label, icon, data, desc }) => (
        <div key={type}>
          {data?.title ? (
            <AddressCard
              onOpen={() => openModal(type)}
              title={label}
              address={data}
            />
          ) : (
            /* Empty Address Slot */
            <button
              onClick={() => openModal(type)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl border border-dashed border-white/15
                         hover:border-indigo-500/50 hover:bg-indigo-600/5 bg-white/[0.02]
                         transition-all duration-200 group text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 border rounded-xl bg-white/5 group-hover:bg-indigo-600/15 border-white/10 group-hover:border-indigo-500/30 shrink-0">
                <svg className="w-5 h-5 text-gray-500 transition-colors group-hover:text-indigo-400"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                  Add {label}
                </p>
                <p className="text-xs text-gray-600 mt-0.5">{desc}</p>
              </div>
              <div className="flex items-center justify-center transition-all duration-200 border rounded-lg w-7 h-7 bg-white/5 group-hover:bg-indigo-600/20 border-white/5 group-hover:border-indigo-500/30 shrink-0">
                <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-indigo-400 transition-colors"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
          )}
        </div>
      ))}

      <AddAddressModal
        email={email}
        type={selectType}
        open={showAddAddressModal}
        setOpen={setAddressModal}
        onClose={() => setAddressModal(false)}
        editData={selectType === address_type.shipping_address ? shipping_address : billing_address}
        onSaved={onSaved}
      />
    </div>
  );
};

export default Address;