"use client";
import React from "react";

const CommonButton = ({
  btnLabel = "Trek",
  colorType = "primary",
  isDisabled = false,
  customStyle,
  onClick,
  width = "min-w-[120px]", // min-w-[150px]
  type = "button",
  roundedFull = false,
  icon = "",
  iconRight = "",
  text = "fs-16",
  smallSize = false,
  className = "",
}) => {
  const colorDefinitions = {
    basic: {
      color: "bg-cGrey",
      text: "text-cMainWhite",
    },
    danger: { color: "bg-red-500", text: "text-white" },
    primary: {
      color: "bg-cBrand hover:bg-cBrand",
      text: "text-cMainWhite",
    },
    success: {
      color: "bg-cSuccess",
      text: "text-white",
    },
    warning: {
      color: "bg-cBrand",
      text: "text-white",
    },
    white: {
      color: "bg-cCard",
      text: "text-cBrandColor",
    },
    BrandColor: {
      color: "bg-cBrandColor",
      text: "text-white",
    },
    disable: { color: "bg-cGrey", text: "text-white" },
    FilterClearButton: {
      color: "bg-cMainWhite",
      text: "text-cBrand",
    },
  };

  const {
    color: colorCode,
    text: textColorCode,
  } = colorDefinitions[colorType] || colorDefinitions.primary;

  return (
    <button onClick={onClick} className={` px-6 py-3 text-xl font-semibold ml-auto text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600`}>
      {btnLabel}
    </button>
  );
};

export default CommonButton;
