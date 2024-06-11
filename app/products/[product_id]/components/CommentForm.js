"use client"
import React from 'react'
import Field from '@/components/input/Field'
import { useForm } from 'react-hook-form';
import { Toastr } from '@/util/utilityFunction';
import { addComment } from '@/app/action/comment';

const CommentForm = ({ data }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm();

    const handleAddComment = async (formData) => {
        try {
            const info = {
                comment: formData?.content,
                product: data?.product_id,
                user: data?.user?._id
            }
            const success =await addComment(info, window.location.pathname)

            

            if (success?.success) {
                reset();
                Toastr({ message:success?.message, type: "success" })
            }else{
                Toastr({ message: success?.message, type: "success" }) 
                setError("root.random", {
                    type: "random",
                    message: `Something went wrong: ${success?.message}`,
                })
            }
        } catch (error) {
            console.error(error);
            setError("root.random", {
                type: "random",
                message: `Something went wrong: ${error.message}`,
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(handleAddComment)}>
            <Field>
                <textarea
                    {...register("content", { required: "comment is required" })}
                    className="w-full mt-4 resize-none bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                    placeholder="Write a comment"
                    name='content'
                ></textarea>
            </Field>
            <p className='text-red-500'>{errors?.root?.random?.message}</p>

            <div className="flex justify-end mt-4">
                <button
                    className="px-6 py-2 text-white transition-all duration-200 bg-indigo-600 rounded-md md:py-3 hover:bg-indigo-700"
                >
                    Comment
                </button>
            </div>
        </form>
    )
}

export default CommentForm