
const CommonInput = ({ register, name, rules, type, error, placeholder = "",error_message=null }) => {
    return (
        <div className="">
            <input
                {...register(name, rules)}
                type={type}
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

            {error_message && <p className="text-red-500 text-sm  mt-1">{error_message}</p>}
        </div>
    );
};

export default CommonInput;

