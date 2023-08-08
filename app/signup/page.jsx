"use client";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="relative">
        <div
          style={{
            backgroundImage: `url("/final-dl.beatsnoop 9.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "140vh",
          }}
        />
        <div className="w-full flex justify-center ">
          <div className="absolute md:w-[843px] w-auto mobile:mx-4 h-[730px] bg-white rounded-3xl shadow shadow-gray-300 flex flex-col justify-start items-center mt-20 top-0">
            <div className="flex justify-center items-center  mt-10 ">
              <p className="capitalize md:text-lg text-sm me-20 font-semibold mobile:ms-9">
                Welcome to Fast Food
              </p>
              <div className="flex flex-col items-start justify-between mt-3 md:text-base text-sm mobile:w-[50%]">
                <p className="text-gray-500 capitalize">Have account ?</p>
                <Link href="signin" className="text-red-700">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="flex items-start justify-start">
              <p className="font-semibold md:text-5xl text-xl me-60 mobile:w-[70%] mobile:ms-6">
                Sign Up
              </p>
            </div>

            <form className="mt-20 md:ms-12 ms-6">
              <div className="mb-8">
                <label className="block mb-4 ">
                  Enter your username or email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="lg:w-full w-[90%] border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:border-blue-500"
                  placeholder="Username or email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex jsutify-between items-center gap-3">
                <div className="mb-8">
                  <label className="block mb-4 ">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="lg:w-full w-[80%] border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:border-blue-500"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 ">Contact Number</label>
                  <input
                    type="text"
                    id="contact"
                    name="contactNumber"
                    className="lg:w-full w-[80%]   border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:border-blue-500"
                    placeholder="Contact Number"
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-8">
                <label className="block mb-4 ">Enter Your Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="lg:w-full w-[90%] border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="w-full flex justify-center">
                <CustomButton
                  title="Sign up"
                  containerStyles="lg:w-full w-[80%] mobile:mr-7  bg-red-700 text-white font-semibold py-4 rounded-full"
                />
              </div>

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
