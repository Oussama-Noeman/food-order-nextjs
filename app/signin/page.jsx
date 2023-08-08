"use client";
import Image from "next/image";
import bg from "../../public/final-dl.beatsnoop 9.png";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="relative  ">
        <div
          style={{
            backgroundImage: `url("/final-dl.beatsnoop 9.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "120vh",
          }}
        />
        <div className="w-full flex justify-center ">
          <div className="absolute md:w-[843px] w-auto mobile:mx-4 h-[600px] bg-white rounded-3xl shadow shadow-gray-300 flex flex-col justify-start items-center mt-20 top-0">
            <div className="flex  sm:justify-center items-center  mt-10 ">
              <p className="capitalize text-lg sm:me-32 me-20 mobile:ms-6 font-semibold">
                Welcome to Fast Food
              </p>
              <div className="flex flex-col items-start mt-3 md:text-base text-sm mobile:w-[50%]">
                <p className="text-gray-500 capitalize">no account ?</p>
                <Link href="/signup" className="text-red-700">
                  Sign up
                </Link>
              </div>
            </div>
            <form className="mt-24 me-4">
              <div className="mb-8">
                <label className="block mb-4 ">
                  Enter your username or email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="md:w-full mobile:w-[90%] border border-gray-300 rounded-lg px-6 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Username or email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-8">
                <label className="block mb-4 ">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="md:w-full mobile:w-[90%] border border-gray-300 rounded-lg px-6 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="flex justify-end mt-4">
                  <Link href="">
                    <p className="text-red-700 text-sm ">Forget Password</p>
                  </Link>
                </div>
              </div>
              <CustomButton
                title="Sign in"
                containerStyles="md:w-full w-[90%] bg-red-700 text-white font-semibold py-2 rounded-full"
              />
              {/* <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Sign In
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
