"use client";
import React, { useState } from "react";

const Tabs = ({ categoryList = [] }) => {
    
  const [selected, setSelected] = useState("");

  return (
    <div className="flex space-x-8">
      {categoryList?.map((category, index) => (
        <div
          key={index}
          className="text-sm font-normal leading-5 text-white cursor-pointer hover:text-cDeepSaffron"
        >
          Samsung
        </div>
      ))}
    </div>
  );
};

export default Tabs;
