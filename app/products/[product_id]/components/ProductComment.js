// ProductComment.jsx
import React from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const ProductComment = ({ data }) => {
  const count = data?.comments?.length ?? 0;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 border rounded-xl bg-indigo-600/20 border-indigo-500/20">
            <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Customer Reviews</h2>
        </div>
        <span className="px-3 py-1 text-sm font-semibold text-gray-400 border rounded-full bg-white/5 border-white/10">
          {count} {count === 1 ? "review" : "reviews"}
        </span>
      </div>

      {/* Comment Form */}
      {data?.user?.email && (
        <div className="mb-8">
          <CommentForm data={{ user: data?.user, product_id: data?.product_id }} />
        </div>
      )}

      {/* Comments List */}
      {count > 0 ? (
        <div className="space-y-3">
          {data.comments.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-14
                        bg-[#111118] border border-white/5 rounded-2xl text-center">
          <div className="flex items-center justify-center w-12 h-12 mb-4 border rounded-2xl bg-white/5 border-white/10">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="mb-1 font-semibold text-white">No reviews yet</p>
          <p className="text-sm text-gray-500">Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default ProductComment;