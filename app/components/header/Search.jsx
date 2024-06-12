import React from 'react'

const Search = () => {
    return (
        <input
          
            // value={value}
            // onChange={onChange}
            // type={type}
            id="email"
            name="email"
            className={`w-full  text-white bg-cCommonBg  rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
            placeholder={"Search for products, brands and categories"}
        />

    )
}

export default Search