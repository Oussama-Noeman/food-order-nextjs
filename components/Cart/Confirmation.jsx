import React from "react";
import CustomButton from "../CustomButton";
import OrderSummary from "./OrderSummary";
import Image from "next/image";

const Confirmation = () => {
  return (
    <div className="flex flex-wrap justify-around items-center h-auto mb-32">
      <div className="lg:w-[70%] w-full  mt-20">
        <p className="font-black text-xl lg:ml-16 ml-4 ">Confirm Your Order</p>
        <div className=" h-[70vh] mt-6 lg:ml-16 ml-4 mr-4  rounded-2xl border-2 border-red-700">
          <div className="flex flex-col items-start ml-12 mt-10">
            <div className="mb-8 w-full">
              <p className="text-lg border-b-2 border-gray-200 w-[90%]   ">
                Your Information
              </p>
              <div className="mt-3 text-gray-400 font-semibold">
                <p>Full Name</p>
                <p>username@gmail.com</p>
              </div>
            </div>
            <div className="mb-8 w-full">
              <p className="text-lg border-b-2 border-gray-200 w-[90%]   ">
                Shipping Address
              </p>
              <div className="mt-3 text-gray-400 font-semibold">
                <p>123 Main Street</p>
                <p>Anytown, Country 12345</p>
              </div>
            </div>
            <div className="mb-8 w-full">
              <p className="text-lg border-b-2 border-gray-200 w-[90%]   ">
                Payment
              </p>
              <div className="mt-3 text-gray-400 font-semibold">
                <p>
                  Order Total <span className="ml-3">$50.00</span>
                </p>
                <p>Cash on Delivery</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <CustomButton
                title="PLACE ORDER"
                containerStyles="bg-red-700 text-white px-16 py-3 rounded-full mt-16 mr-16"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:mt-14 mt-8 ">
        <div className="w-[350px]  h-96 rounded-xl shadow-2xl mx-auto mt-20 border-2 border-red-700">
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
      </div>
    </div>
  );
};

export default Confirmation;
