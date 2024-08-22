"use client";
import { useProductStore } from "@/app/stores/productStore";
import CommonCheckbox from "@/components/input/CommonCheckbox";
import React, { useEffect, useState } from "react";

const FilterCategory = ({textColor="text-white",onChange}) => {
    
  const [categories, setCategories] = useState([]);
  const { filterForm, setFilterForm } = useProductStore();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category");
        const data = await response.json();
        setCategories(data?.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  
  return (
    <ul
      role="list"
      className="pb-6 mb-6 space-y-2 text-sm font-medium border-b border-gray-200"
    >
      {
      categories?.length > 0 ?
      
      categories?.map((item, index) => (
        <li className="flex" key={index}>
            <CommonCheckbox 
              checked={filterForm.category === item?._id}
                onChange={() => {
                    setFilterForm({
                    ...filterForm,
                    category: filterForm.category === item?._id ? null : item?._id,
                    });
                    onChange(); 
                }}
            />
          <div className={`flex items-center justify-center ${textColor}`}> {item?.title}</div>
        </li>
      ))
      : 
      <div className="flex items-center justify-center h-96">
        <div className="text-lg font-semibold text-gray-500">No categories found</div>
        </div>
      }
    </ul>
  );
};

export default FilterCategory;
