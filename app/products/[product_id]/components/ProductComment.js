
import React from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const ProductComment = ({ data }) => {
  
  return (
      <div className="container w-full">
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
          { 
          data?.comments?.length > 0?
          data?.comments?.map((comment, index) => (
            <CommentCard
              key={index}
              comment={comment}
            />
          )): "No comments yet."
        }
        </div>
      </div>
  );
};

export default ProductComment;
