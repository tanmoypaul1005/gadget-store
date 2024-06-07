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

  return (
    <div>

      <div className="">
        
        <div className="flex items-start justify-start">
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


        <div className="mt-5 flex items-start justify-start">
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
