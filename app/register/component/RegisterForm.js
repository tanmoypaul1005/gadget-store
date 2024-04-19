"use client"
import CommonInput from '@/app/components/input/CommonInput';
import { base_url, base_url_src } from '@/util/const';
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
        const res = await fetch("https://gadget-storebd.vercel.app/api" + kuRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if(res?.ok){
            reset();
            router.push("login")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='mx-auto max-w-xs space-y-5'>
                    <CommonInput
                        register={register}
                        rules={{
                            required: "Name is required",
                        }}
                        error={errors.name}
                        type={"text"}
                        id={"name"}
                        name={"name"}
                        placeholder={"Name"}
                        error_message={errors.name?.message}
                    />

                    <CommonInput
                        register={register}
                        rules={{
                            required: "Email is required",
                        }}
                        error={errors.email}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        error_message={errors.email?.message}
                    />

                    <CommonInput
                        rules={{
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
                        }}
                        register={register}
                        error={errors.password}
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        placeholder={"Password"}
                        error_message={errors.password?.message}

                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="tracking-wide font-semibold text-gray-100 w-full py-4 rounded-lg bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

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