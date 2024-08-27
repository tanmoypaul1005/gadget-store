"use client";
import { addCart } from '@/app/action/cart';
import { Toastr } from '@/util/utilityFunction';
import React, { useState } from 'react';
import LoginAlertModal from '../../modal/LoginAlertModal';

const ProductCardAction = ({ data }) => {

    const [isBouncing, setIsBouncing] = useState(false);
    const [open, setOpen] = useState(false);

    const formData = {
        product_id: data?.product_id,
        user_id: data?.user?._id,
        quantity: 1,
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (!data?.session) {
            setOpen(true);
            return;
        }
        setIsBouncing(true); // Start the animation
        setTimeout(() => setIsBouncing(false), 300); // End the animation after 300ms

        const success = await addCart(formData, window.location.pathname);
        if (success.success) {
            Toastr({ type: "success", message: success.message });
        } else {
            Toastr({ type: "error", message: success.message });
        }
    };

    return (
        <>
        <LoginAlertModal open={open} setOpen={setOpen} />
        <div
            onClick={handleClick}
            className={`ml-auto ${isBouncing ? 'bounce-animation' : ''}`}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
                >
                <path
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
        </div>
     </>
    );
};

export default ProductCardAction;
