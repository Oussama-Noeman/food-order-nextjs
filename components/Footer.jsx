import React from "react";
import Image from "next/image";
// import appstore from "../public/App_Store_(iOS)-Badge-Alternative-Logo.wine.svg";
// import playstorelogo from "../public/playstorelogo.png";
// import { CustomButton, PreFooter } from ".";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="">
      <div className="w-full h-40 bg-red-600 relative">
        <Image
          src="/Rectangle 23878.png"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-wrap  justify-start items-start gap-10 mt-16 ps-8">
        <div className="flex flex-col justify-start items-start ms-12 ">
          <h2 className="uppercase font-bold text-xl mb-6 ms-4">install app</h2>
          <p className="text-lg capitalize ms-4">
            from app store <br /> or google play
          </p>
          {/* <Image src={appstore} alt="appStoreLogo" width={200} height={200} />
          <Image
            src={playstorelogo}
            alt="playstorelogo"
            width={200}
            height={200}
          /> */}
        </div>
        <div className="flex flex-col justify-start items-start gap-5 ms-14">
          <div className="uppercase font-bold text-xl mb-6 ">my account</div>
          <p className="capitalize text-lg font-semibold">profile</p>
          <p className="capitalize text-lg font-semibold">address</p>
          <p className="capitalize text-lg font-semibold">live chat</p>
          <p className="capitalize text-lg font-semibold">my order</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 ms-14">
          <div className="uppercase font-bold text-xl mb-6 ">Quick Links</div>
          <p className="capitalize text-lg font-semibold">Contact us</p>
          <p className="capitalize text-lg font-semibold">Privacy Policy</p>
          <p className="capitalize text-lg font-semibold">
            Terms and Conditions
          </p>
          <p className="capitalize text-lg font-semibold">About us</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 ms-16 lg:block  md:hidden sm:hidden mobile:hidden">
          <div className="uppercase font-bold text-xl mb-6 ">
            Subscribe to our newsletter
          </div>
          <div className="">
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-80 md:w-64  rounded-full  border-2 border-red-700 py-2 pl-6 pr-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
                <CustomButton
                  title="Subscribe Now"
                  containerStyles="absolute inset-y-0 right-0 flex items-center px-4 py-2 md:text-sm text-lg  bg-red-700 rounded-full  text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t  sm:px-16 px-6 py-10">
        <p className="font-bold">
          {" "}
          &copy; 2023 Company Name. All rights reserved
        </p>
        <p className="font-bold text-xl lg:mt-0 mt-6">Logo</p>
        <div className="flex justify-between items-center  lg:mt-0 mt-6">
          <p className="font-bold text-xl me-12">Follow us</p>
          <div className="me-4">
            <BsFacebook size={26} />
          </div>
          <div className="me-4">
            <AiFillTwitterCircle size={26} />
          </div>
          <div className="me-4">
            <AiFillInstagram size={26} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
