"use client";
import React, { Fragment } from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const OrderSummary = ({ Confirmation }) => {
  return (
    <Fragment>
      <div className="w-[350px]  h-96 rounded-xl shadow-2xl  mt-20">
        <p className="mx-6 text-xl py-4 border-b-2 border-orange-50 ">
          Order Summary
        </p>
        <div className="flex  items-center mx-4 mt-4 mb-4  ">
          <Image
            src="/Rectangle 23869.png"
            alt="burger"
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-around items-start ml-6">
            <p className="font-bold text-xl">Mozzarella Burger</p>
            <p>1 x $15.00</p>
          </div>
        </div>
        <div className="flex  items-center mx-4 mt-4 border-b-2 border-orange-50 ">
          <Image
            src="/Rectangle 23874.png"
            alt="burger"
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-around items-start ml-6">
            <p className="font-bold text-xl">Chicken Nuggets</p>
            <p>1 x $10.00</p>
          </div>
        </div>
        <div className="flex justify-between  mx-4 mt-4 pb-4 border-b-2 border-black">
          <p className="text-lg text-gray-500">Sub Total</p>
          <p className="font-medium text-red-700">$25.00</p>
        </div>
        <div className="flex justify-between  mx-4 mt-4 pb-4 ">
          <p className="text-lg text-gray-500">Total</p>
          <p className="font-bold text-2xl text-red-700">$25.00</p>
        </div>
      </div>
      <div
        className="flex justify-end w-[350px] mx-auto"
        onClick={() => Confirmation()}
      >
        <CustomButton
          title="NEXT"
          containerStyles="bg-red-700 text-white px-20 py-3 rounded-full mt-8"
        />
      </div>
    </Fragment>
  );
};

export default OrderSummary;
