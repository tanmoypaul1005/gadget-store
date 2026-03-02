/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { useDebounce } from "use-debounce";
import { useGeneralStore } from "@/app/stores/generalStore";
import Image from "next/image";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue] = useDebounce(searchTerm, 500);

  const pathname = usePathname();
  const { mobileNav } = useGeneralStore();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  /* ── Close on route change ── */
  useEffect(() => {
    setSearchTerm("");
    setDropdownOpen(false);
  }, [pathname]);

  /* ── Close on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Fetch on debounced value ── */
  useEffect(() => {
    fetchData();
  }, [searchValue]);

  useEffect(() => {
    if (!searchValue) setDropdownOpen(false);
  }, [searchValue]);

  const fetchData = async () => {
    if (!searchValue) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`/api/search?query=${searchValue}`);
      const data = await res.json();
      setSearchResults(data);
      setDropdownOpen(true);
    } catch (_) {}
    setIsLoading(false);
  };

  const results = searchResults?.data ?? [];
  const hasResults = results.length > 0;

  return (
    <>
      {!mobileNav && (
        <div ref={wrapperRef} className="relative w-full">

          {/* ── Input ── */}
          <div className={`relative flex items-center w-full transition-all duration-200
                           rounded-xl border overflow-hidden
                           ${isFocused
                             ? "border-indigo-500 bg-white/[0.07] shadow-lg shadow-indigo-500/10"
                             : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                           }`}>

            {/* Search Icon */}
            <div className="flex items-center pl-4 shrink-0">
              {isLoading ? (
                <svg className="w-4 h-4 text-indigo-400 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              ) : (
                <svg className={`w-4 h-4 transition-colors duration-200 ${isFocused ? "text-indigo-400" : "text-gray-500"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>

            {/* Input Field */}
            <input
              ref={inputRef}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                setIsFocused(true);
                if (searchValue) setDropdownOpen(true);
              }}
              autoComplete="off"
              className="flex-1 w-full px-3 py-3 text-sm text-white bg-transparent placeholder:text-gray-500 focus:outline-none"
              placeholder="Search products, brands, categories..."
            />

            {/* Clear Button */}
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setDropdownOpen(false);
                  inputRef.current?.focus();
                }}
                className="p-1 mr-3 transition-colors rounded-lg hover:bg-white/10 shrink-0 group"
              >
                <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            {/* Keyboard Shortcut Hint */}
            {!isFocused && !searchTerm && (
              <div className="items-center hidden gap-1 mr-3 lg:flex shrink-0">
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-gray-600
                               bg-white/5 border border-white/10 rounded">⌘</kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-gray-600
                               bg-white/5 border border-white/10 rounded">K</kbd>
              </div>
            )}
          </div>

          {/* ── Dropdown ── */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50
                            bg-[#111118] border border-white/10 rounded-2xl shadow-2xl shadow-black/60
                            overflow-hidden">

              {/* Results Header */}
              <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  {isLoading
                    ? "Searching..."
                    : hasResults
                    ? `${Math.min(results.length, 5)} result${results.length !== 1 ? "s" : ""} for "${searchValue}"`
                    : `No results for "${searchValue}"`}
                </span>
                {hasResults && (
                  <span className="text-xs font-medium text-indigo-400">
                    Showing top {Math.min(results.length, 5)}
                  </span>
                )}
              </div>

              {/* Results List */}
              {isLoading ? (
                /* Loading Skeletons */
                <div className="p-2 space-y-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-3 rounded-xl animate-pulse">
                      <div className="w-10 h-10 rounded-xl bg-white/10 shrink-0" />
                      <div className="flex-1 space-y-1.5">
                        <div className="w-3/4 h-3 rounded bg-white/10" />
                        <div className="h-2.5 bg-white/5 rounded w-1/3" />
                      </div>
                      <div className="w-12 h-3 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
              ) : hasResults ? (
                <div className="p-2">
                  {results.slice(0, 5).map((result, index) => (
                    <Link
                      key={index}
                      href={`/products/${result?._id}`}
                      onClick={() => {
                        setDropdownOpen(false);
                        setSearchTerm("");
                      }}
                      className="flex items-center gap-3 px-3 py-3 transition-all duration-150 rounded-xl hover:bg-white/5 group"
                    >
                      {/* Product Image */}
                      <div className="relative w-10 h-10 overflow-hidden transition-all rounded-xl bg-white/5 ring-1 ring-white/10 shrink-0 group-hover:ring-indigo-500/30">
                        <Image
                          src={result?.image}
                          alt={result?.name}
                          fill
                          className="object-contain p-1.5"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-200 transition-colors group-hover:text-white line-clamp-1">
                          {result?.name}
                        </p>
                        {result?.brand && (
                          <p className="text-xs text-gray-500 mt-0.5">{result.brand}</p>
                        )}
                      </div>

                      {/* Price */}
                      {result?.price && (
                        <span className="text-sm font-semibold text-indigo-400 shrink-0">
                          ${result.price}
                        </span>
                      )}

                      {/* Arrow */}
                      <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400
                                      group-hover:translate-x-0.5 transition-all shrink-0"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 border rounded-2xl bg-white/5 border-white/10">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="mb-1 text-sm font-semibold text-white">No results found</p>
                  <p className="text-xs text-gray-500">
                    Try searching with different keywords
                  </p>
                </div>
              )}

              {/* Footer — View All */}
              {hasResults && !isLoading && (
                <div className="px-4 py-3 border-t border-white/5">
                  <Link
                    href={`/search?query=${searchValue}`}
                    onClick={() => { setDropdownOpen(false); setSearchTerm(""); }}
                    className="flex items-center justify-center w-full gap-2 py-2 text-xs font-semibold text-indigo-400 transition-all duration-200 border border-transparent rounded-xl hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30"
                  >
                    View all results for &quot;{searchValue}&quot;
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Search;