"use client";

import { iPasswordHide, iPasswordShow } from "@/util/imageImports";
import Image from "next/image";
import { useState } from "react";

const CommonPassword = ({
  register,
  name,
  rules,
  type,
  error,
  placeholder = "",
  error_message = null,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        {...register(name, rules)}
        type={showPassword ? "text" : "password"}
        id={name}
        name={name}
        className={`
                w-full px-3 py-4 border-[2px] rounded-md bg-[#030317] font-medium text-sm text-white outline-none
                ${!!error ? "border-red-500" : "border-[#030317]"}
            `}
        // className={`
        //  w-full px-3 py-4 rounded-lg outline-none font-medium border text-sm text-black
        //  ${!!error ? "border-red-500 focus:border-red-500" : "border-gray-200  border-white/20 focus:border-indigo-500"}`}
        placeholder={placeholder}
      />
      <div 
      onClick={() => setShowPassword(!showPassword)}
      className="absolute top-4 right-3 cursor-pointer">
        {showPassword ? (
          <Image
            className=" max-w-[25px] min-w-[25px] max-h-[25px] min-h-[25px]"
            src={iPasswordHide}
            alt=""
          />
        ) : (
          <Image
            className=" max-w-[25px] min-w-[25px] max-h-[25px] min-h-[25px]"
            src={iPasswordShow}
            alt=""
          />
        )}
      </div>

      {error_message && (
        <p className="text-red-500 text-sm  mt-1">{error_message}</p>
      )}
    </div>
  );
};

export default CommonPassword;
