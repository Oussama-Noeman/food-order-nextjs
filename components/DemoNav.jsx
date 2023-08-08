"use client";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import CustomButton from "./CustomButton";
import Link from "next/link";

const DemoNav = () => {
  let Links = [
    { name: "MENU", link: "/categories" },
    { name: "ABOUT US", link: "/" },
    { name: "PROMOTIONS", link: "/" },
    { name: "MY CART", link: "/cart" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 md:mt-12">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-14 px-7  md:text-base text-sm ">
        {/* logo section */}
        <div className="font-bold md:text-2xl text-xl cursor-pointer flex items-center gap-1">
          <Link href="/">
            <span className="text-red-700">Logo</span>
          </Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 md:mt-12"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:py-2  pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="lg:ml-10 md:ml-3 md:my-0 my-7 md:font-medium md:text-sm w-auto">
              <Link
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link href="/signin">
            <CustomButton
              title="Sign in"
              containerStyles="bg-red-700 text-white lg:ml-32 md:ml-16 lg:mr-40 font-semibold px-4 py-1 rounded-full duration-500 md:static  "
            />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DemoNav;
