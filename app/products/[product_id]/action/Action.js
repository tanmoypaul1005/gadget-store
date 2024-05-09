"use client";
import CommonButton from "@/components/button/CommonButton";
import React from "react";

const Action = () => {
  return (
    <>
      <CommonButton onClick={() => {
        
      }} btnLabel="Add Cart" colorType="danger" />
      <CommonButton btnLabel="Buy" colorType="danger" />
    </>
  );
};

export default Action;
