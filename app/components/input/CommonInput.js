
const CommonInput = ({ register, name, rules, type, error,placeholder="" }) => {
    return (
        <input
            {...register(name, rules)}
            type={type}
            id={name}
            name={name}
            className={`
            w-full p-3 border rounded-md bg-[#030317] font-medium text-sm text-white
            ${!!error ? "border-red-500 focus:outline-red-500 outline-none" : "border-white/20 focus:border-indigo-500"}`}
            // className={`
            //  w-full px-3 py-4 rounded-lg outline-none font-medium border text-sm text-black 
            //  ${!!error ? "border-red-500 focus:border-red-500" : "border-gray-200  border-white/20 focus:border-indigo-500"}`}
            placeholder={placeholder}
        />
    );
};

export default CommonInput;