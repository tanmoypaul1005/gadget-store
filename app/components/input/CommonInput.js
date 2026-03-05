"use client";

const CommonInput = ({
  label = "",
  required = false,
  icon,
  disabled = false,
  error_message,
  as,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
          {label}{" "}
          {required && <span className="text-indigo-400">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            {icon}
          </div>
        )}
        {as === "textarea" ? (
          <textarea
            {...rest}
            disabled={disabled}
            rows={rest.rows || 3}
            className={`w-full ${
              icon ? "pl-10" : "pl-4"
            } pr-4 py-3 rounded-xl bg-white/5 border border-white/10
            text-white text-sm placeholder:text-gray-600 resize-none
            focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all duration-200
            ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
          />
        ) : (
          <input
            {...rest}
            disabled={disabled}
            className={`w-full ${
              icon ? "pl-10" : "pl-4"
            } pr-4 py-3 rounded-xl bg-white/5 border border-white/10
            text-white text-sm placeholder:text-gray-600
            focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all duration-200
            ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
          />
        )}
      </div>
      {error_message && (
        <p className="text-red-500 text-sm mt-1">{error_message}</p>
      )}
    </div>
  );
};

export default CommonInput;