"use client"
import React from 'react';
import CommonModal from './CommonModal';
import { signIn } from "next-auth/react";

const LoginAlertModal = ({ open, setOpen }) => {

    const handleGoogleAuthClick = async () => {
        try {
            await signIn("google", { callbackUrl: window.location.pathname });
        } catch (error) {
            console.error("Error signing in", error);
        }
    };

    const warningIcon = (
        <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    );

    const loginContent = (
        <div className='flex flex-col items-center justify-center px-6 py-8 gap-4'>
            <p className="text-sm text-gray-400 text-center">
                You are not currently logged in. Please log in to continue.
            </p>
            <button
                onClick={handleGoogleAuthClick}
                className="flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
            >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Color-" transform="translate(-401.000000, -860.000000)">
                            <g id="Google" transform="translate(401.000000, 860.000000)">
                                <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" fill="#FBBC05"></path>
                                <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" fill="#EB4335"></path>
                                <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" fill="#34A853"></path>
                                <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" fill="#4285F4"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <span>Continue with Google</span>
            </button>
        </div>
    );

    return (
        <CommonModal
            open={open}
            setOpen={setOpen}
            title="Login Required"
            subtitle="Sign in to access this feature"
            icon={warningIcon}
            content={loginContent}
            size="sm"
        />
    );
};

export default LoginAlertModal;