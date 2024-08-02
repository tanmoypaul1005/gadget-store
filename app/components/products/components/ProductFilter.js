
"use client"
import { useState } from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

function valuetext(value) {
  return `${value}°C`
}

export default function ProductFilter() {
  const [value, setValue] = useState([20, 37])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  console.log("value", value)
  return (
    <div>
      <div className="text-white">Price</div>
      <Box sx={{ width: 280 }}>
        <div className="px-[9.5px]">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={0}
          sx={{
            color: '#f17e23',
            boxShadow: 'none',

            '& .MuiSlider-thumb': {
              color: '#f17e23',
              maxHeight: 20,
              minHeight: 20,
              maxWidth: 20,
              minWidth: 20,
              '&:hover': {
                color: "", // replace with your desired hover color
                boxShadow: 'none',
              },
              boxShadow: 'none',
              '&:hover, &:focus': {
                boxShadow: 'none',
              },
            },
            '& .MuiSlider-thumb.Mui-focusVisible': {
              boxShadow: 'none',
            },
            '& .MuiSlider-thumb:hover': {
              boxShadow: 'none',
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
              hover: "none",
              boxShadow: 'none',
            },
            '& .MuiSlider-track': {
              height: 4,

              hover: "none",
              boxShadow: 'none',
              '&:hover': {
                color: "", // replace with your desired hover color
              },
            },
            '& .MuiSlider-mark': {
              backgroundColor: '#bfbfbf',
            },
            '& .MuiSlider-markActive': {
              backgroundColor: '',
              hover: "none",
              boxShadow: 'none',
            },
          }}
          max={200000}
        />
        </div>
      </Box>

      <div className="flex justify-between pr-[9.5px]">
        <div className="text-white">{value[0]}</div>
        <div className="text-white">{value[1]}</div>
      </div>
    </div>
  )
}
