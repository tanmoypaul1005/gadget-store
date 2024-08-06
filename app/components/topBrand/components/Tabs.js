"use client";
import React, { useState } from "react";
import TopBrandProducts from "./TopBrandProducts";

const Tabs = ({ categoryList = [] }) => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <>
      <div className="flex space-x-8">
        {categoryList?.map((category, index) => (
          <div
            onClick={() => setSelectedId(category?._id)}
            key={index}
            className={`border-b-2 ${
              selectedId === category?._id
                ? "text-cDeepSaffron border-cDeepSaffron"
                : "text-white border-slate-800"
            }  text-sm font-normal leading-5  cursor-pointer hover:text-cDeepSaffron`}
          >
            {category?.title}
          </div>
        ))}
      </div>

      <TopBrandProducts selectedId={selectedId} />
    </>
  );
};

export default Tabs;
