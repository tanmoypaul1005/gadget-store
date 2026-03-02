// CommentForm.jsx
"use client";
import React from "react";
import Image from "next/image";
import Field from "@/app/components/input/Field";
import { useForm } from "react-hook-form";
import { Toastr } from "@/util/utilityFunction";
import { addComment } from "@/app/action/comment";

const CommentForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch,
  } = useForm();

  const content = watch("content", "");

  const handleAddComment = async (formData) => {
    try {
      const info = {
        comment: formData?.content,
        product: data?.product_id,
        user: data?.user?._id,
      };
      const success = await addComment(info, window.location.pathname);

      if (success?.success) {
        reset();
        Toastr({ message: success?.message, type: "success" });
      } else {
        Toastr({ message: success?.message, type: "error" });
        setError("root.random", {
          type: "random",
          message: `Something went wrong: ${success?.message}`,
        });
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };

  return (
    <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">
      {/* Form Header */}
      <div className="bg-[#16161f] px-5 py-4 border-b border-white/5 flex items-center gap-3">
        <div className="flex items-center justify-center border rounded-lg w-7 h-7 bg-indigo-600/20 border-indigo-500/20">
          <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Write a Review</p>
          <p className="text-xs text-gray-500">Share your experience with this product</p>
        </div>

        {/* User avatar */}
        {data?.user?.image && (
          <div className="flex items-center gap-2 ml-auto">
            <Image
              src={data.user.image}
              alt={data.user.name}
              width={28}
              height={28}
              className="rounded-full w-7 h-7 ring-2 ring-indigo-500/30"
            />
            <span className="hidden text-xs text-gray-400 sm:block">{data.user.name}</span>
          </div>
        )}
      </div>

      {/* Textarea */}
      <form onSubmit={handleSubmit(handleAddComment)}>
        <div className="p-5">
          <Field>
            <div className="relative">
              <textarea
                {...register("content", { required: "Please write a comment before submitting." })}
                rows={4}
                className="w-full resize-none bg-white/5 border border-white/10 text-gray-200 text-sm
                           p-4 rounded-xl placeholder:text-gray-600
                           focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07]
                           transition-all duration-200"
                placeholder="What do you think about this product? Share your honest review..."
                name="content"
              />
              {/* Char count */}
              <span className="absolute text-xs text-gray-600 bottom-3 right-3">
                {content?.length ?? 0} chars
              </span>
            </div>
          </Field>

          {/* Errors */}
          {(errors?.content || errors?.root?.random) && (
            <div className="flex items-center gap-2 px-3 py-2 mt-2 border rounded-lg bg-red-500/10 border-red-500/20">
              <svg className="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-red-400">
                {errors?.content?.message || errors?.root?.random?.message}
              </p>
            </div>
          )}

          {/* Submit Row */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-gray-600">Your review will be visible to everyone.</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500
                         disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold
                         rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20
                         hover:shadow-indigo-600/40"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Posting...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Post Review
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;