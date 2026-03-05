"use client";

import { useState } from "react";

const CommonPassword = ({
  label = "",
  required = false,
  error_message = null,
  register,
  name,
  rules,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const registeredProps = register && name ? register(name, rules) : {};

  return (
    <div>
      {label && (
        <label className="block mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
          {label} {required && <span className="text-indigo-400">*</span>}
        </label>
      )}
      <div className="relative">
        {/* Lock icon */}
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <input
          {...registeredProps}
          {...rest}
          type={showPassword ? "text" : "password"}
          className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10
            text-white text-sm placeholder:text-gray-600
            focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all duration-200"
        />

        {/* Show/Hide toggle */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
        >
          {showPassword ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>

      {error_message && (
        <p className="text-red-500 text-sm mt-1">{error_message}</p>
      )}
    </div>
  );
};

export default CommonPassword;
