// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// AddAddressModal.jsx (Client Component)
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
"use client";
import React, { useEffect, useState } from "react";
import { Toastr } from "@/util/utilityFunction";
import { addAddress } from "@/app/action/address";
import CommonModal from "@/app/components/modal/CommonModal";
import CommonInput from "@/app/components/input/CommonInput";

const AddAddressModal = ({ open, setOpen, type, email, editData, onSaved }) => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [houseName, setHouseName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTitle(editData?.title ?? "");
    setAddress(editData?.address ?? "");
    setContact(editData?.contact ?? "");
    setPostalCode(editData?.postalCode ?? "");
    setHouseName(editData?.house_name ?? "");
  }, [editData, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const data = await addAddress({
      email, title, address, contact,
      postalCode, house_name: houseName, address_type: type,
    }, window.location.pathname);
    setSaving(false);

    if (data.success) {
      Toastr({ message: data?.message, type: "success" });
      setOpen(false);
      if (onSaved) onSaved();
    } else {
      Toastr({ message: data?.message, type: "error" });
    }
  };

  const isShipping = type === "shipping_address";

  const modalIcon = (
    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {isShipping ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      )}
    </svg>
  );

  const formContent = (
    <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
      <CommonInput
        label="Title" required
        type="text" value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g. Home, Office"
        icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>}
      />

      <CommonInput
        label="Full Address" required
        type="text" value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Street, Area, City"
        icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>}
      />

      <div className="grid grid-cols-2 gap-4">
        <CommonInput
          label="Contact" type="number" required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="01XXXXXXXXX"
          icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>}
        />
        <CommonInput
          label="Postal Code" type="number" required
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="1200"
          icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>}
        />
      </div>

      <CommonInput
        label="House / Building Name" required
        type="text" value={houseName}
        onChange={(e) => setHouseName(e.target.value)}
        placeholder="e.g. Green Villa, Block C"
        icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>}
      />

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-200 border bg-white/5 hover:bg-white/10 hover:text-white rounded-xl border-white/5 hover:border-white/10"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm font-bold text-white transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-xl"
        >
          {saving ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Saving...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {editData?.title ? "Update" : "Save"} Address
            </>
          )}
        </button>
      </div>
    </form>
  );

  return (
    <CommonModal
      open={open}
      setOpen={setOpen}
      title={`${editData?.title ? "Edit" : "Add"} ${isShipping ? "Shipping" : "Billing"} Address`}
      subtitle={isShipping ? "Where your orders will be delivered" : "Used for payment & invoices"}
      icon={modalIcon}
      content={formContent}
      size="md"
    />
  );
};

export default AddAddressModal;
