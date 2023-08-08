"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import CustomButton from "../CustomButton";
import CustomCard from "../CustomCard";

const ReviewOrder = ({ checkOut }) => {
  // Sample data for the table
  const products = [
    { name: "Mozarella Burger", price: 15.0, quantity: 2 },
    { name: "Chicken Nuggets", price: 10.0, quantity: 1 },
  ];
  const cards = [
    { title: "Onion Rings", image: "/Rectangle 23874.png", price: 10 },
    { title: "Soft Drink", image: "/Rectangle 238324.png", price: 8 },
    { title: "CHICKEN NUGGETS", image: "/Rectangle 23214.png", price: 15 },
    { title: "fRIES", image: "/Rectangle 238743234.png", price: 15 },
  ];

  return (
    <div>
      <p className="font-semibold text-lg md:ml-16 sm:ml-12 ml-6 mt-6">
        Review Order
      </p>
      <div className="w-[90%] h-auto mb-8 ml-4 md:ml-16 mt-8 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 md:pr-0 pr-2">
              <th className="md:text-base text-sm md:w-[50%] text-start py-2">
                Product
              </th>
              <th className="md:text-base text-sm py-2">Price</th>
              <th className="md:text-base text-sm py-2">Quantity</th>
              <th className="md:text-base text-sm py-2">Total</th>
              <th className="md:text-base text-sm py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="py-4">
                <td className="pt-4 text-start flex items-center">
                  <Image
                    src="/Rectangle 23868.png"
                    alt="burger"
                    width={50}
                    height={50}
                    className="md:block hidden"
                  />
                  <p className=" md:ml-20 font-medium">{product.name}</p>
                </td>
                <td className="text-center pt-4">${product.price}</td>
                <td className="flex justify-center pt-4 w-auto">
                  <input
                    type="number"
                    name=""
                    id=""
                    value={product.quantity}
                    className="w-10 "
                  />
                </td>
                <td className="text-center pt-4">
                  ${product.price * product.quantity}
                </td>
                <td className="text-center pt-4 md:pt-6">
                  <button>
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-auto flex flex-wrap justify-around items-start mx-20 my-16">
        <div className="flex flex-col w-auto lg:items-start items-center ">
          <div className="flex flex-wrap  ">
            <input
              type="text"
              placeholder="Coupon Code"
              className="md:px-8 px-3 py-2 border-2 border-gray-200"
            />
            <CustomButton
              title="Apply Couppon"
              containerStyles="bg-red-700 text-white md:px-12 px-6 sm:mt-0 mt-4 md:text-base text-sm py-2 rounded-full ml-9 uppercase"
            />
          </div>
          <div className="">
            <CustomButton
              title="Continue shopping"
              containerStyles="lg:bg-red-700 bg-white lg:text-white text-red-700 lg:border-none border-2 border-yellow-200 lg:shadow-none shadow-xl md:px-12 px-6 lg:mt-4 mt-8 md:text-base text-sm py-2 rounded-full  uppercase mt-10"
            />
          </div>
        </div>
        <div className="bg-red-100 w-64 h-64 rounded-md lg:mt-0 mt-8">
          <p className="uppercase text-gray-500 text-xl ml-5 mt-6">
            cart total
          </p>
          <div className="flex flex-col items-start  ">
            <div className="flex justify-between w-full px-5 mt-10  mb-3 ">
              <p className="text-lg">Subtotal</p>
              <p className="font-bold">$25.00</p>
            </div>
            <div className="border-b-2 border-gray-400 w-56 px-5 mx-auto"></div>
            <div className="flex justify-between w-full px-5 mt-3  mb-3 ">
              <p className="text-lg">Subtotal</p>
              <p className="font-bold ">$25.00</p>
            </div>
          </div>
          <div className="text-center" onClick={() => checkOut()}>
            <CustomButton
              title="Checkout"
              containerStyles="uppercase bg-red-700 text-white px-10 py-1 text-md rounded-full"
            />
          </div>
        </div>
      </div>
      <p className="uppercase font-semibold mb-4 ml-16 text-xl">
        YOU MIGHT ALSO ADD
      </p>
      <div className="flex flex-wrap justify-around items-center">
        {cards.map((card) => (
          <CustomCard
            title={card.title}
            image={card.image}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewOrder;
