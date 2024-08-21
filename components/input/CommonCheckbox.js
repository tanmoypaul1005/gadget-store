"use client"
import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function CommonCheckbox({ 
  disabled = false, checked = false, 
  onChange = () => { }, label = '',
  width = "25px",
  height = "25px"
}) {
  return (

    <>
      {
        label ?
          <div className='flex'>
            <FormControlLabel
              className='text-sm capitalize'

              control={
                <Checkbox
                  disabled={disabled}
                  checked={checked}
                  onChange={onChange}
                  size='small'
                  sx={{
                    color: '#989898',
                    width: 'fit-content',
                    padding: 0,
                    marginLeft: '8px',
                    marginRight: '-8px',
                    backgroundColor: 'transparent !important',
                    '&.Mui-checked': {
                      color: '#f17e23'
                    },
                    '&:hover': {
                      color: "", // replace with your desired hover color
                    },
                  }
                  }
                />}
            />
            <div className='cursor-default checkBoxLabel'>
              {label}
            </div>
          </div>
          :
          <Checkbox
            disabled={disabled}
            checked={checked}
            onChange={(e) => { onChange(e) }}
            sx={{
              color: '#989898',
              padding: 0,
              margin: 0,
              marginLeft: '-3.6px',
              width: width,
              height: height,
              backgroundColor: 'transparent !important',
              fontFamily: 'fEuclidLimadiRegular',
              '&.Mui-checked': {
                color: "#285D43",
                fontFamily: 'fEuclidLimadiRegular',
              },
              '&:hover': {
                color: "", // replace with your desired hover color
              },
            }}
          />}
    </>
  )
}
