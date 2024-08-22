"use client";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { useProductStore } from "../stores/productStore";
import RangeSlider from "@/components/input/RangeSlider";
import axios from "axios";
import FilterCategory from "./components/FilterCategory";
import { ColorRing } from "react-loader-spinner";

const Products = () => {


  const { filterForm, setFilterForm } = useProductStore();
  const [isOpenSidebar, setOpenSidebar] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePriceChange = (value) => {
    setFilterForm({ ...filterForm, minPrice: value[0], maxPrice: value[1] });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/products/filter", {
          params: filterForm,
        });
        console.log("response", response);
        setProducts(response?.data?.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filterForm]);

  return (
    <div className="common-topGap">
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
       
       {isOpenSidebar && <div className="fixed inset-0 z-40 flex">
          <div className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                onClick={() => setOpenSidebar(false)}
                type="button"
                className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
              >

                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-3 mt-4 border-t border-gray-200">
              <FilterCategory onChange={()=>{setOpenSidebar(false)}} textColor="text-black" />
            </div>
          </div>
        </div>}
      </div>

      <main className="common-class">
        <div className="flex items-baseline justify-between border-b border-gray-200">
          <h1 className="pb-4 text-2xl font-bold tracking-tight text-white">
            Product list
          </h1>

          <div className="flex items-center">
            <button
              type="button"
              className="ml-5 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">View grid</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => setOpenSidebar(true)}
              type="button"
              className="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <div className="hidden lg:block">
              <FilterCategory />
              <RangeSlider
                label="Price"
                min={0}
                max={200000}
                initialValue={[0, 200000]}
                color="#f17e23"
                onChangeCallback={handlePriceChange}
              />
            </div>

            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center h-[360px]">
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </div>
              ) : (
                <div className="flex sm:flex-row flex-col sm:justify-between items-center  gap-x-[50px] flex-wrap justify-items-center gap-y-8">
                  {products?.map((product, index) => (
                    <Card key={index} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
