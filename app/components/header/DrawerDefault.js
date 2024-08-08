"use client";
import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useGeneralStore } from "@/app/stores/generalStore";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

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


  return (
    <>
      {mobileNav && (

          <Drawer open={mobileNav} onClose={closeDrawer}>
            <div className="p-4">
            <div className="flex items-center justify-between mb-6 text-black gap-x-4">
              <div variant="h5" color="blue-gray">
                Material Tailwind
              </div>
              <div onClick={closeDrawer} className="flex items-center justify-center cursor-pointer">

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

            <div className="space-y-3">
            {
                categories?.map((category, index) => (
                  <Link href={`/category/featured/${category?._id}`} className="flex flex-col text-black cursor-pointer hover:text-cDeepSaffron " key={index}>
                      {category?.title}
                  </Link>
                ))
              }
            </div>

                    </div>
          </Drawer>

      )}
    </>
  );
}
