"use client"
import { useState } from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

function valuetext(value) {
  return `${value}`
}

export default function RangeSlider({
  label = "Label", // Default label
  min = 0, // Default min value
  max = 100, // Default max value
  step = 1, // Default step
  initialValue = [0, 100], // Default initial range
  color = '#f17e23', // Default color
  onChangeCallback, // Custom callback on change
}) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    if (onChangeCallback) {
      onChangeCallback(newValue)
    }
  }

  return (
    <div>
      <div className="text-white">{label}</div>
      <Box sx={{ width: 300 }}>
        <div className="px-[9.5px]">
          <Slider
            getAriaLabel={() => label}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={min}
            max={max}
            step={step}
            sx={{
              color: color,
              boxShadow: 'none',

              '& .MuiSlider-thumb': {
                color: color,
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
