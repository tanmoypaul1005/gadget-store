"use client"
import CommonInput from '@/app/components/input/CommonInput'
import { base_url } from '@/util/const';
import { kuRegister } from '@/util/url';
import React from 'react'
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

    console.log("errors", isSubmitting,)

    const submitForm = async (formData) => {
        console.log("formData", formData)
        console.log("process.env.BASE_URL", base_url)
        const res = await fetch("http://localhost:3000/api" + kuRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log("res", res)
        reset();
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
                    />

                    <CommonInput
                        rules={{
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        }}
                        register={register}
                        error={errors.password}
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        placeholder={"Password"}

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