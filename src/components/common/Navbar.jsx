"use client";
import React, { useState } from "react";
import Icons from "./Icons";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full mt-4 sm:mt-6 lg:mt-7.5 px-3 sm:px-6 lg:px-0 z-50">
      <div
        className={`${open ? "bg-white" : ""}  w-full bg-[url('/assets/png/res-nav.png')] min-[400px]:bg-[url('/assets/png/nav.png')]  min-[834px]:bg-[url('/assets/webp/navbar-img.webp')] max-w-285 mx-auto lg:bg-cover bg-center bg-contain bg-no-repeat`}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-8 md:px-10 lg:px-16 py-3">
          {/* Left */}
          <div className="flex items-center gap-3 sm:gap-4.5">
            <Link href="">
              <img
                src="/assets/webp/logo-img.webp"
                alt="logo"
                className="w-6.25 sm:w-9 lg:w-10"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8 text-[#000000] text-sm lg:text-base">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/roadmap">ROADMAP</Link>
              <Link href="/team">TEAM</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-2.75">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-2 sm:gap-2.75">
              <Icons icon={"discord"} />
              <Icons icon={"x"} />
              <Icons icon={"m"} />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1"
            >
              {open ? "x" : <Icons icon={"hamburger"} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-full bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button 
              onClick={() => setOpen(!open)}
              className=" flex items-center justify-end p-5  gap-1"
            >
              {open ? "x" : ""}
            </button>
          <div className="flex flex-col justify-center items-center gap-4 text-[#000000] text-sm">
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/roadmap">ROADMAP</a>
            <a href="/team">TEAM</a>
            <a href="/faq">FAQ</a>

            {/* Icons */}
            <div className="flex items-center gap-3 pt-2">
              <Icons icon={"discord"} />
              <Icons icon={"x"} />
              <Icons icon={"m"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
