"use client";

import React, { useEffect, useState } from "react";

import { Toastr } from "@/util/utilityFunction";
import CommonModal from "../modal/CommonModal";
import CommonInput from "@/app/components/input/CommonInput";
import CommonButton from "@/app/components/button/CommonButton";
import { addAddress } from "@/app/action/address";

const AddAddressModal = ({ open, setOpen, type, email, editData, onSaved }) => {


  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [houseName, setHouseName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email,
      title,
      address,
      contact,
      postalCode,
      house_name: houseName,
      address_type: type,
      email,
    };

    const data = await addAddress(body,window.location.pathname);
    console.log("add address res", data); 

    if (data.success) {
      Toastr({ message: data?.message, type: "success" });
      setOpen(false);
      if (onSaved) onSaved();
    } else {
      Toastr({ message: data?.message, type: "error" });
    }
  };

  useEffect(() => {
    setTitle(editData?.title ?? "");
    setAddress(editData?.address ?? "");
    setContact(editData?.contact ?? "");
    setPostalCode(editData?.postalCode ?? "");
    setHouseName(editData?.house_name ?? "");
  }, [editData, open]);

  return (
    <div>
      <CommonModal
        open={open}
        setOpen={setOpen}
        title="Add Address"
        content={
          <form onSubmit={handleSubmit} className="space-y-4">
            <CommonInput
              required={true}
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CommonInput
              required={true}
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <CommonInput
              type="number"
              required={true}
              label="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <CommonInput
              type="number"
              required={true}
              label="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <CommonInput
              required={true}
              label="House Name"
              value={houseName}
              onChange={(e) => setHouseName(e.target.value)}
            />
            <div className="flex items-center justify-center">
              <CommonButton type="submit" width="w-[120px]" btnLabel="Saved" />
            </div>
          </form>
        }
      />
    </div>
  );
};

export default AddAddressModal;
