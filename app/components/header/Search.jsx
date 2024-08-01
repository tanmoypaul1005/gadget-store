/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { public_base_url } from "@/util/const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ImSpinner2 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue] = useDebounce(searchTerm, 500);

  const pathname = usePathname();

  useEffect(() => {
    setSearchTerm("");
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  useEffect(() => {
    if (!searchValue) {
      setDropdownOpen(false);
    }
  }, [searchValue]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    if (searchValue) {
      fetch(public_base_url + `/search?query=${searchValue}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setSearchResults([]);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="relative w-full">
      <input
        value={searchTerm}
        onKeyDown={(e) => {
          setDropdownOpen(true);
        }}
        onChange={(event) => setSearchTerm(event.target.value)}
        id="email"
        autoComplete="off"
        auto
        className="w-full px-4 py-3 text-xs text-white border border-gray-200 rounded-md shadow-sm outline-none bg-cCommonBg focus:z-10 focus:border-blue-500 focus:ring-blue-500"
        placeholder={"Search for products, brands and categories"}
      />

      <div className="absolute top-0 right-2">
        {isLoading ? (
          <ImSpinner2 className="animate-spin duration-150 text-gray-300 border-gray-400 w-5 h-[42px]" />
        ) : (
          <BiSearch className="w-5 h-[42px]" />
        )}
      </div>

      {dropdownOpen && (
        <div className="relative">
          <div className="absolute z-10 w-full mt-2 rounded-md shadow-lg bg-cCommonBg">
            {searchResults?.data?.length > 0 ? (
              searchResults?.data?.map((result, index) => (
                <div
                  onClick={() => {
                    setDropdownOpen(false);
                  }}
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-zinc-700"
                >
                  <Link href={`/products/${result?._id}`}>{result?.name}</Link>
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-center">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
