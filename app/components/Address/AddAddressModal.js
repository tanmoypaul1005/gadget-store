"use client";
import CommonButton from "@/components/CommonButton";
import CommonModal from "@/components/CommonModal";
import CommonInput from "@/components/input/CommonInput";
import React, { useEffect, useState } from "react";
import { Toastr } from "@/utils/utilityFunctions";
import { addAddress } from "@/app/actions";

const AddAddressModal = ({ open, setOpen, type, email, editData }) => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [houseName, setHouseName] = useState("");

  // console.log("editData", editData);

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
    

    const data = await addAddress(body);
    if (data.success) {
      Toastr({ message: data?.message, type: "success" });
      setOpen(false);
    } else {
      Toastr({ message: data?.message, type: "error" });
    }
  };

  useEffect(() => {
    setTitle(editData?.title);
    setAddress(editData?.address);
    setContact(editData?.contact);
    setPostalCode(editData?.postalCode);
    setHouseName(editData?.house_name);
  }, [editData]);

  return (
    <div>
      <CommonModal
        open={open}
        setOpen={setOpen}
        body={
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
              required={true}
              label="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <CommonInput
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
              <CommonButton type="submit" width="w-[120px]" btnLevel="Saved" />
            </div>
          </form>
        }
      />
    </div>
  );
};

export default AddAddressModal;
