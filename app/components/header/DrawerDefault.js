"use client";
import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useGeneralStore } from "@/app/stores/generalStore";
import { useState } from "react";
import { useEffect } from "react";

export function DrawerDefault() {
  const { mobileNav, setMobileNav } = useGeneralStore();

  const [categories, setCategories] = useState([]);

  const closeDrawer = () => setMobileNav(false);

  useEffect(() => {
    fetch("api/category/main-category")
      .then(response => response.json())
      .then(data => {
        setCategories(data?.data);
      })
      .catch(error => {
        setCategories([]);
        console.error('Error fetching categories:', error);
      });
  }, []);

  console.log("[categories]", categories);

  return (
    <>
      {mobileNav && (

          <Drawer open={mobileNav} onClose={closeDrawer} className="p-4">
            <>
            <div className="flex items-center justify-between mb-6 text-black gap-x-4">
              <Typography variant="h5" color="blue-gray">
                Material Tailwind
              </Typography>
              <div className="flex items-center justify-center cursor-pointer">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>

              </div>
             
            </div>
            {
                categories?.map((category, index) => (
                  <div className="flex flex-col text-black " key={index}>
                      {category?.title}
                  </div>
                ))
              }
                    </>
          </Drawer>

      )}
    </>
  );
}
