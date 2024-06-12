"use client";

import React, { useEffect, useState } from 'react'

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchData();
    }, [searchTerm]);

    const fetchData = async () => {
        if (searchTerm) {
            fetch(`http://localhost:3000/api/search?query=${searchTerm}`)
                .then(response => response.json())
                .then(data => setSearchResults(data));
        } else {
            setSearchResults([]);
        }
    }

    return (
        <div>
            <input
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                id="email"
                name="email"
                className={`w-full  text-white bg-cCommonBg  rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                placeholder={"Search for products, brands and categories"}
            />
            {searchResults?.data?.length > 0 && (
                <div className="dropdown">
                    {searchResults?.data?.map((result, index) => (
                        <div key={index} className="dropdown-item">
                            {result.name}
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}

export default Search


