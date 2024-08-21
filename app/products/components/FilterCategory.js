"use client";
import { useProductStore } from "@/app/stores/productStore";
import CommonCheckbox from "@/components/input/CommonCheckbox";
import React, { useEffect, useState } from "react";

const FilterCategory = ({textColor="text-white"}) => {
    
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
      {categories?.map((item, index) => (
        <li className="flex" key={index}>
            <CommonCheckbox 
              checked={filterForm.category === item?._id}
                onChange={() => {
                    setFilterForm({
                    ...filterForm,
                    category: filterForm.category === item?._id ? null : item?._id,
                    });
                }}
            />
          <div className={`flex items-center justify-center ${textColor}`}> {item?.title}</div>
        </li>
      ))}
    </ul>
  );
};

export default FilterCategory;