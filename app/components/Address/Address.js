"use client";
import React, { useState } from "react";
import AddAddressModal from "./AddAddressModal";
import CommonButton from "@/components/button/CommonButton";
import AddressCard from "./AddressCard";
import { address_type } from "@/util/const";

const Address = ({ address, email }) => {

  const [showAddAddressModal, setAddressModal] = useState(false);

  const [selectType, setSelectType] = useState(null);

  const shipping_address = address?.find(
    (a) => a?.address_type === address_type.shipping_address
  );
  const billing_address = address?.find(
    (a) => a?.address_type === address_type.billing_address
  );

  console.log("address", address)
  return (
    <div>
      <div className="grid max-w-5xl md:px-0 px-5 grid-cols-1  md:grid-cols-2 gap-4 mx-auto">
        <div className="flex items-center justify-center">
          {billing_address?.title ? (
            <AddressCard
              onOpen={() => {
                setSelectType(address_type.billing_address);
                setAddressModal(true)
              }}
              title="Billing address"
              address={billing_address} />
          ) : (
<div className="flex items-start justify-start">
            <CommonButton
              onClick={() => {
                setSelectType(address_type.billing_address);
                setAddressModal(true);
              }}
              width="w-[210px]"
              btnLabel="Billing address"
              label=""
            />
            </div>
          )}
        </div>


        <div className="flex items-center justify-center">
          {shipping_address?.title ? (
            <AddressCard
              onOpen={() => {
                setSelectType(address_type.shipping_address);
                setAddressModal(true)
              }}
              title="Shipping address"
              address={shipping_address} />
          ) : (
            <div className="flex items-start justify-start">
              <CommonButton
                onClick={() => {
                  setAddressModal(true);
                  setSelectType(address_type.shipping_address);
                }}
                width="w-[210px]"
                btnLabel="Shipping address"
                label=""
              />
            </div>
          )}
        </div>
      </div>
      <AddAddressModal
        email={email}
        type={selectType}
        open={showAddAddressModal}
        setOpen={setAddressModal}
        onClose={() => {
          setAddressModal(false)
        }}
        editData={selectType === address_type.shipping_address ? shipping_address : billing_address}
      />
    </div>
  );
};

export default Address;
