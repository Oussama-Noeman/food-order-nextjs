"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  let Links = [
    { name: "MENU", link: "/categories" },
    { name: "ABOUT US", link: "/" },
    { name: "PROMOTION", link: "/" },
    { name: "MY CART", link: "/cart" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full  mt-10 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link href="/">
          <div className="font-bold text-2xl text-red-700 cursor-pointer md:ml-12 flex items-center ">
            Logo
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer mt-10 md:hidden"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 sm:pb-20 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 md:mr-9"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <CustomButton
            title="SIGN IN"
            containerStyles="bg-red-700 hover:bg-white hover:text-red-700 text-white mx-4 me-12 px-6 rounded-full py-2 duration-500  text-sm  "
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
