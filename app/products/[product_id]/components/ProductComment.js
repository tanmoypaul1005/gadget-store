// "use client"
import React from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const ProductComment = ({ data }) => {
  return (
    <section id="comments">
      <div className="container w-full mx-auto md:w-10/12">
        <h2 className="text-2xl font-bold ">
          Comments ({data?.comments?.length ?? 0})
        </h2>

        <div className="w-full">
          {data?.user?.email && (
            <CommentForm
              data={{
                user: data?.user,
                product_id: data?.product_id,
              }}
            />
          )}
        </div>

        <div className="gap-y-2">
          {data?.comments?.map((comment, index) => (
            <CommentCard
              // onCommentDelete={() => { handleCommentDelete(comment?.id) }}
              key={index}
              comment={comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComment;
