"use client"

// const CommonInput = ({ register, name, rules, type, error, placeholder = "",error_message=null }) => {
//     return (
//         <div className="">
//             <input
//                 {...register(name, rules)}
//                 type={type}
//                 id={name}
//                 name={name}
//                 className={`
//                 w-full px-3 py-4 border-[2px] rounded-md focus:bg-[#030317] bg-[#030317] font-medium text-sm text-white outline-none
//                 ${!!error ? "border-red-500" : "border-[#030317]"}
//             `}
//                 // className={`
//                 //  w-full px-3 py-4 rounded-lg outline-none font-medium border text-sm text-black 
//                 //  ${!!error ? "border-red-500 focus:border-red-500" : "border-gray-200  border-white/20 focus:border-indigo-500"}`}
//                 placeholder={placeholder}
//                 autocomplete="off"
//             />

//             {error_message && <p className="text-red-500 text-sm  mt-1">{error_message}</p>}
//         </div>
//     );
// };

// export default CommonInput;


const CommonInput = ({disabled=false, type="text" ,label = "", placeholder = "",value="",onChange=()=>{} }) => {
    return (
        <>
            <label for="email" className="mt-4 mb-2 block text-sm font-medium">
                {label}
            </label>
            <div className="relative">
                <input
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    type={type}
                    id="email"
                    name="email"
                    className={`w-full ${disabled && "cursor-not-allowed"} text-white bg-cCommonBg  rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default CommonInput