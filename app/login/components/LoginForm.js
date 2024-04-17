"use client"
import { ImSpinner2 } from "react-icons/im";
import CommonInput from "@/app/components/input/CommonInput";
import { useForm } from "react-hook-form";

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, },
        setError,
        reset
    } = useForm();

    console.log("errors", errors)

    const submitForm = async (formData) => {
       
        const res = await fetch("http://localhost:3000/api" + kuRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submitForm)}>
        <div className='mx-auto max-w-xs space-y-5'>

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
                        : ""
                }
            </button>
        </div>
    </form>
    )
}

export default LoginForm