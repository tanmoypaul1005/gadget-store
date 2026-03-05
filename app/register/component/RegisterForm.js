"use client"
import CommonInput from '@/app/components/input/CommonInput';
import CommonPassword from '@/app/components/input/CommonPassword';
import { kuRegister } from '@/util/url';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, },
        setError,
        reset
    } = useForm();

    const router = useRouter();

    const submitForm = async (formData) => {
        const res = await fetch("api" + kuRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if(res?.ok){
            reset();
            router.push("login")
        }else{
            setError("root.random", {
                type: "random",
                message: `Something went wrong: ${error.message}`,
            });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='max-w-xs mx-auto space-y-5'>
                    <CommonInput
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        label="Full Name"
                        required
                        placeholder="Full Name"
                        error_message={errors.name?.message}
                        icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>}
                    />

                    <CommonInput
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        label="Email Address"
                        required
                        placeholder="your@email.com"
                        error_message={errors.email?.message}
                        icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>}
                    />

                    <CommonPassword
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            },
                            validate: {
                                hasNumber: value => /\d/.test(value) || "Password must contain at least 1 number",
                                hasLowercase: value => /[a-z]/.test(value) || "Password must contain at least 1 lowercase letter",
                                hasUppercase: value => /[A-Z]/.test(value) || "Password must contain at least 1 uppercase letter",
                                hasSpecial: value => /[^a-zA-Z0-9]/.test(value) || "Password must contain at least 1 special character",
                            }
                        })}
                        label="Password"
                        required
                        placeholder="Create a password"
                        error_message={errors.password?.message}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center w-full py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-700 rounded-lg focus:shadow-outline focus:outline-none">

                        <span className="mr-3">
                            Sign Up
                        </span>

                        {
                            isSubmitting ?
                                <ImSpinner2 className="animate-spin duration-150 text-[#ffffff] border-[#FFFFFF] w-6 h-6" />
                                : <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                        }
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm