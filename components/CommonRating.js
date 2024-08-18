import Rating from "@mui/material/Rating";

import React from 'react'

const CommonRating = ({value =0,size=""}) => {
    return (
      <div className="flex space-x-0.5">
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
      <div>({parseInt(value ?? 0)})</div>
      </div>
    )
}

export default CommonRating