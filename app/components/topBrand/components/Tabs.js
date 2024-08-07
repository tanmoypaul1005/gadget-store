/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";

const Tabs = ({ categoryList = [],productList=[] }) => {
  
  const [selectedId, setSelectedId] = useState(categoryList?.length> 0? categoryList[0]?._id:null);

  console.log("categoryList", productList);

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

        {/* {selectedId && 
            <div className="flex flex-wrap justify-between pt-5 gap-x-3 gap-y-3">
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <div>No products found</div>
            )}
          </div>
        }    */}
    </>
  );
};

export default Tabs;
