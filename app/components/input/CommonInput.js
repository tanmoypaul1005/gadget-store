
const CommonInput = ({ register, name, rules, type, error }) => {
    return (
        <input
            {...register(name, rules)}
            type={type}
            id={name}
            name={name}
            className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm text-black 
             focus:outline-none
             focus:border-gray-400 focus:bg-white
             ${!!error ? "border-red-500" : "border-white/20 focus:border-indigo-500"}`}
            placeholder="Name"
        />
    );
};

export default CommonInput;