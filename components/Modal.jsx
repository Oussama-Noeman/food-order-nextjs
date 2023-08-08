"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import CustomButton from "../components/CustomButton";
import ModalItems from "../components/ModalItems";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const enableHover = () => {
    setHover(!hover);
  };

  const Images = [
    { image: "/Rectangle 23870.png" },
    { image: "/Rectangle 238799.png" },
    { image: "/Rectangle 2387324.png" },
    { image: "/Rectangle 23870324.png" },
  ];

  return (
    <div className="fixed lg:overflow-y-hidden overflow-y-scroll inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className="sm:w-[60%] w-[90%] h-[100%] flex flex-col  ">
        <div className="bg-white h-auto  p-2 rounded  ">
          <div className=" grid grid-cols-12 mt-4">
            <div className="  sm:col-span-4 hidden sm:flex items-center justify-center">
              <Image
                src={"/Rectangle 23865.png"}
                alt="burger"
                width={150}
                height={150}
              />
            </div>
            <div className=" sm:col-span-8 col-span-12 pt-2 sm:pl-8 pl-3 flex flex-col items-start justify-around">
              <div className="flex justify-between w-full">
                <p className="font-semibold text-lg">Double Hamburger</p>
                <p
                  className="text-red-700  sm:mr-4 cursor-pointer "
                  onClick={() => onClose()}
                >
                  <AiOutlineClose size={30} />
                </p>
              </div>
              <p className="text-gray-500 w-[90%] ">
                Savor the taste of Italy with our authentic, handcrafted pizzas,
                featuring thin.
              </p>
              <div className="flex md:flex-row flex-col justify-between md:items-center items-start w-full mt-2">
                <p className="text-lg font-bold text-red-700">$15.00</p>
                <div className="mr-4 flex justify-start gap-1">
                  <button className=" border-2 py-1 md:px-5 px-2 rounded text-red-700 md:text-xl text-base">
                    -
                  </button>
                  <div className="border-2 py-1 md:px-5 px-2 rounded text-red-700 md:text-xl text-base">
                    1
                  </div>
                  <button className=" border-2 py-1 md:px-5 px-2 rounded text-red-700 md:text-xl text-base">
                    +
                  </button>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:items-center items-start w-full mt-4">
                <p className="md:text-xl text-base font-bold">
                  Total Amount :
                  <span className="text-red-700 ml-2">$15.00</span>
                </p>
                <div className="mr-4 md:mt-0 mt-2">
                  <CustomButton
                    title="Add To Cart"
                    containerStyles="bg-red-700 text-white px-6 py-2 rounded-full text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start sm:ml-8 ml-3 mt-4">
            <div className="font-bold">Add-On</div>
            <div className="">
              <div className="flex flex-wrap justify-start ">
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Extra Chicken{" "}
                    <span className="font-bold text-red-700">+2.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Extra Garlic
                    <span className="font-bold text-red-700 ml-2">+6.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Cheddar Cheese
                    <span className="font-bold text-red-700 ml-2">+6.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Fries
                    <span className="font-bold text-red-700 ml-2">+6.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Mozzarella
                    <span className="font-bold text-red-700 ml-2">+8.00</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start sm:ml-8 ml-3 mt-4">
            <div className="font-bold">Remove</div>
            <div className="">
              <div className="flex flex-wrap justify-start ">
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Extra Chicken{" "}
                    <span className="font-bold text-red-700">+2.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Extra Garlic
                    <span className="font-bold text-red-700 ml-2">+6.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Cheddar Cheese
                    <span className="font-bold text-red-700 ml-2">+6.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Fries
                    <span className="font-bold text-red-700 ml-2">+6.00</span>
                  </label>
                </div>
                <div className="mt-2 mr-4">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">
                    Mozzarella
                    <span className="font-bold text-red-700 ml-2">+8.00</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 sm:ml-8 ml-3 mt-3 font-semibold">
            You Might Also Like to Add
          </p>
          <div className="flex md:flex-row flex-wrap justify-around mt-2 ">
            {Images.map((image) => (
              <ModalItems source={image.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
