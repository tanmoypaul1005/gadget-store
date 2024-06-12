/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { public_base_url } from '@/util/const';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchValue] = useDebounce(searchTerm, 500);

    useEffect(() => {
        fetchData();
    }, [searchValue]);

    useEffect(() => {
        if (!searchValue) {
            setDropdownOpen(false)
        }
    }, [searchValue]);

    const fetchData = async () => {
        if (searchValue) {
            fetch(public_base_url+`/search?query=${searchValue}`)
                .then(response => response.json())
                .then(data => setSearchResults(data));
        } else {
            setSearchResults([]);
        }
    }

    return (
        <div className='w-full'>
            <input
                value={searchTerm}
                onKeyDown={(e) => {
                    setDropdownOpen(true);
                }}
                onChange={event => setSearchTerm(event.target.value)}
                id="email"
                name="email"
                className={`w-full text-white bg-cCommonBg  rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                placeholder={"Search for products, brands and categories"}
            />
            {
                dropdownOpen && (
                    <div className="relative">
                        <div className="absolute z-10 w-full mt-2 rounded-md shadow-lg bg-cCommonBg">
                            {
                                searchResults?.data?.length > 0 ? (
                                    searchResults?.data?.map((result, index) => (
                                        <div onClick={() => { setDropdownOpen(false); }} key={index} className="px-4 py-2 cursor-pointer hover:bg-zinc-700">
                                            <Link href={`/products/${result?._id}`}>
                                                {result.name}
                                            </Link>
                                        </div>
                                    ))) : <div className="px-4 py-6 text-center">No results found</div>}
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default Search


