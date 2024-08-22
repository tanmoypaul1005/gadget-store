"use client";
import Card from "@/app/products/components/Card";
import React, { useState } from "react";
import { useEffect } from "react";

const Tabs = ({ categoryList }) => {
  const [selectedId, setSelectedId] = useState(
    categoryList?.length > 0 ? categoryList[0]?._id : null
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedId) {
      fetch(`api/category/products?category_id=${selectedId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Products:", data);
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [selectedId]);

  return (
    <>
      <div className="flex space-x-8">
        {categoryList?.map((category, index) => (
          <div
            onClick={() => {
              console.log("Category clicked:", category?._id);
              setSelectedId(category?._id);
            }}
            key={index}
            className={`border-b-2 ${
              selectedId === category?._id
                ? "text-cDeepSaffron border-cDeepSaffron"
                : "text-white border-slate-800"
            }  text-sm font-normal leading-5 cursor-pointer hover:text-cDeepSaffron`}
          >
            {category?.title}
          </div>
        ))}
      </div>

      {selectedId && (
        <div className="flex flex-wrap items-center justify-center pt-5 gap-x-3 gap-y-3">
          {products?.data?.length > 0 ? (
            products?.data?.map((product, productIndex) => (
              <Card key={productIndex} product={product} />
            ))
          ) : (
            <div className="max-h-[338px] text-2xl font-bold min-h-[338px] flex justify-center items-center">
              No products found
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Tabs;
