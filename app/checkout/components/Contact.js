"use client";
import { useCheckoutStore } from "@/app/stores/checkoutStore";
import CommonInput from "@/app/components/input/CommonInput";
import React from "react";

const Contact = () => {

  const { contact_number, setContactNumber } = useCheckoutStore();

  return (
    <div>
      <CommonInput
        value={contact_number}
        onChange={(e) => {
          setContactNumber(e.target.value);
        }}
        type="number"
        label={"Contact Number"}
        placeholder="Contact Number"
      />
    </div>
  );
};

export default Contact;
