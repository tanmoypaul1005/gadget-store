import Rating from "@mui/material/Rating";

import React from "react";

const CommonRating = ({ value = 0, size = "" }) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="rounded bg-yellow-400 px-2.5 flex justify-center items-center max-h-[22px] min-h-[22px] text-xs font-semibold">
        {parseInt(value ?? 0)}.0
      </span>
      <Rating
        sx={{
          // "& .MuiRating-iconFilled": {
          //   color: "#FFD700" // Change this to your desired color for filled stars
          // },
          "& .MuiRating-iconEmpty": {
            color: "#ffff", // Change this to your desired color for empty stars
          },
        }}
        size={size}
        name="read-only"
        value={parseInt(value ?? 0)}
        readOnly
      />
    </div>
  );
};

export default CommonRating;
