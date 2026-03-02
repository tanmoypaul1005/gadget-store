/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LogoutModal from "./LogoutModal";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Search from "./Search";
import { useGeneralStore } from "@/app/stores/generalStore";

const truncateName = (name, maxLength) =>
  name?.length > maxLength ? `${name.substring(0, maxLength)}...` : name;

/* ── Cart Count Hook ── */
const useCartCount = (totalCart) => {
  const [count, setCount] = React.useState(totalCart);

  const getCountFromCookie = () => {
    try {
      const raw = document.cookie.match('(^|;)\\s*guest_cart_items\\s*=\\s*([^;]+)');
      if (raw) {
        const items = JSON.parse(decodeURIComponent(raw.pop()));
        return Array.isArray(items) ? items.length : 0;
      }
    } catch (_) {}
    return 0;
  };

  React.useEffect(() => {
    const cookieCount = getCountFromCookie();
    setCount(cookieCount > 0 ? cookieCount : totalCart);
  }, [totalCart]);

  React.useEffect(() => {
    const handler = (e) => setCount(e.detail?.count ?? 0);
    window.addEventListener("guestCartUpdated", handler);
    return () => window.removeEventListener("guestCartUpdated", handler);
  }, []);

  React.useEffect(() => {
    const handler = () => setCount(getCountFromCookie());
    window.addEventListener("cartItemAdded", handler);
    return () => window.removeEventListener("cartItemAdded", handler);
  }, []);

  return count;
};

/* ── Main Header ── */
const HeaderUserInfo = ({ session, totalCart, totalOrder }) => {
  const [isShowLogoutModal, setShowLogoutModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mobileNav, setMobileNav } = useGeneralStore();
  const cartCount = useCartCount(totalCart);

  const handleGoogleAuthClick = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <>
      <LogoutModal open={isShowLogoutModal} setOpen={setShowLogoutModal} />

      <header className="sticky top-0 z-50 w-full bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center
                              group-hover:bg-indigo-500 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-indigo-400">Gadget</span>
                <span className="text-white">Store</span>
              </span>
            </Link>

            {/* ── Search (Desktop) ── */}
            <div className="hidden md:flex flex-1 max-w-md">
              <Search />
            </div>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink href="/orders" badge={totalOrder}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Orders
              </NavLink>

              <NavLink href="/cart" badge={cartCount}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
              </NavLink>

              {session ? (
                <UserMenuDesktop session={session} onLogout={() => setShowLogoutModal(true)} />
              ) : (
                <button
                  onClick={handleGoogleAuthClick}
                  className="flex items-center gap-2 ml-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500
                             text-white text-sm font-semibold rounded-xl transition-colors duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign in
                </button>
              )}
            </div>

            {/* ── Mobile Right ── */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Cart Icon Mobile */}
              <Link href="/cart" className="relative p-2 rounded-xl hover:bg-white/5 transition-colors">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center
                                   text-[10px] font-bold text-white bg-indigo-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10
                           transition-colors duration-200"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* ── Mobile Search ── */}
          <div className="md:hidden pb-3">
            <Search />
          </div>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111118] border-t border-white/5 px-4 py-4 space-y-2">
            {session ? (
              <>
                {/* User Info */}
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 mb-3">
                  <Image
                    src={session?.user?.image}
                    alt="User"
                    width={36}
                    height={36}
                    className="rounded-full ring-2 ring-indigo-500/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{session?.user?.name}</p>
                    <p className="text-xs text-gray-500">{session?.user?.email}</p>
                  </div>
                </div>

                <MobileNavItem href="/profile" icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }>Profile</MobileNavItem>

                <MobileNavItem href="/orders" badge={totalOrder} icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                }>Orders</MobileNavItem>

                <MobileNavItem href="/cart" badge={cartCount} icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }>Cart</MobileNavItem>

                <button
                  onClick={() => { setShowLogoutModal(true); setMobileMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400
                             hover:bg-red-500/10 border border-transparent hover:border-red-500/20
                             transition-all duration-200 text-sm font-medium mt-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <MobileNavItem href="/cart" badge={cartCount} icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }>Cart</MobileNavItem>

                <button
                  onClick={handleGoogleAuthClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2
                             bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold
                             rounded-xl transition-colors duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign in with Google
                </button>
              </>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderUserInfo;

/* ── Desktop Nav Link with Badge ── */
const NavLink = ({ href, badge, children }) => (
  <Link href={href}
    className="relative flex items-center gap-2 px-3 py-2 rounded-xl text-gray-300 hover:text-white
               hover:bg-white/5 text-sm font-medium transition-all duration-200 group">
    {children}
    {badge > 0 && (
      <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center
                       text-[10px] font-bold text-white bg-indigo-600 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);

/* ── Desktop User Menu with Dropdown ── */
const UserMenuDesktop = ({ session, onLogout }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative ml-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5
                   border border-transparent hover:border-white/10 transition-all duration-200"
      >
        <Image
          src={session?.user?.image}
          alt="User"
          width={28}
          height={28}
          className="rounded-full ring-2 ring-indigo-500/40"
        />
        <span className="text-sm font-medium text-white">{truncateName(session?.user?.name, 10)}</span>
        <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-[#111118] border border-white/10
                        rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-white/5">
            <p className="text-sm font-semibold text-white truncate">{session?.user?.name}</p>
            <p className="text-xs text-gray-500 truncate mt-0.5">{session?.user?.email}</p>
          </div>

          <div className="p-1.5">
            <Link href="/profile" onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-300
                         hover:text-white hover:bg-white/5 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Profile
            </Link>
            <Link href="/orders" onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-300
                         hover:text-white hover:bg-white/5 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              My Orders
            </Link>
          </div>

          <div className="p-1.5 border-t border-white/5">
            <button onClick={() => { onLogout(); setOpen(false); }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-red-400
                         hover:bg-red-500/10 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Mobile Nav Item ── */
const MobileNavItem = ({ href, badge, icon, children }) => (
  <Link href={href}
    className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-300 hover:text-white
               hover:bg-white/5 border border-transparent hover:border-white/10
               transition-all duration-200 text-sm font-medium">
    <span className="text-indigo-400">{icon}</span>
    {children}
    {badge > 0 && (
      <span className="ml-auto w-5 h-5 flex items-center justify-center text-[10px] font-bold
                       text-white bg-indigo-600 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);