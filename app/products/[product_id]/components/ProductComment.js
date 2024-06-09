"use client"
import Field from '@/components/input/Field'
import React from 'react'
import { useForm } from 'react-hook-form';
import CommentCard from './CommentCard';

const ProductComment = ({ data }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const handleAddComment = async (formData) => {
    // try {
    //     console.log("formData", formData)
    //     const response = await api.post(`/blogs/${blog_id}/comment`, formData);

    //     if (response.status === 200) {
    //         Toastr({ message: "Add comment successfully", type: "success" })
    //         fetchBlogDetails();
    //     }
    // } catch (error) {
    //     console.error(error);
    //     setError("root.random", {
    //         type: "random",
    //         message: `Something went wrong: ${error.message}`,
    //     })
    // }
  }


  return (
    <section id="comments">
      <div className="container w-full mx-auto md:w-10/12">
        {data?.user?.email && <>
          {/* <h2 className="my-8 text-3xl font-bold">Comments ({blogDetails?.comments?.length ?? 0})</h2> */}
          <div className="flex space-x-4 items -center">
            {/* <Avatar authId={auth?.id} avatar={auth?.avatar} name={auth?.firstName} /> */}

            <div className="w-full">

              <form onSubmit={handleSubmit(handleAddComment)}>
                <Field>
                  <textarea
                    {...register("content", { required: "comment is required" })}
                    className="w-full resize-none bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
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

            </div>
          </div>
        </>}

        {
          data?.comments?.map((comment, index) => (
            <CommentCard
              // onCommentDelete={() => { handleCommentDelete(comment?.id) }} 
              key={index} comment={comment} />
          ))
        }


      </div>
    </section>
  )
}

export default ProductComment