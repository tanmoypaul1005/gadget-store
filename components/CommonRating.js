import Rating from "@mui/material/Rating";

import React from 'react'

const CommonRating = ({value =0}) => {
    return (
        <Rating
        sx={{
          // "& .MuiRating-iconFilled": {
          //   color: "#FFD700" // Change this to your desired color for filled stars
          // },
          "& .MuiRating-iconEmpty": {
            color: "#ffff", // Change this to your desired color for empty stars
          },
        }}
        name="read-only"
        value={parseInt(value ?? 0)}
        readOnly
      />
    )
}

export default CommonRating