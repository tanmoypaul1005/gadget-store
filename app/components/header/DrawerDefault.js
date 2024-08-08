"use client";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useGeneralStore } from "@/app/stores/generalStore";

export function DrawerDefault() {
  const { mobileNav, setMobileNav } = useGeneralStore();

  const closeDrawer = () => setMobileNav(false);

  return (
    <>
      {mobileNav && (
        <div className="overflow-hidden z-100">
          <Drawer open={mobileNav} onClose={closeDrawer} className="p-4">
            <div className="flex items-center justify-between mb-6">
              <Typography variant="h5" color="blue-gray">
                Material Tailwind
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
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
              </IconButton>
            </div>
          </Drawer>
        </div>
      )}
    </>
  );
}
