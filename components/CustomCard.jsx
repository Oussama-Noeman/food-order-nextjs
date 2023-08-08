import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import star1 from "../public/Icon.png";
import star2 from "../public/Icon (1).png";
import CustomButton from "./CustomButton";
const CustomCard = ({ image, price, title, description, showModal }) => {
  return (
    <div className="flex flex-col justify-center items-center w-72  mb-6 ">
      <div className="flex flex-col  border-2">
        <div className="flex justify-end text-2xl me-4 mt-4 mb-0">
          <AiOutlineHeart />
        </div>
        <div className="relative w-full h-56  cursor-pointer">
          {/* <Link href="" onClick={showModal()}> */}
          <Image
            src={image}
            alt="cart image"
            className="object-contain mx-auto w-72 mt-0 "
            fill
          />
          {/* </Link> */}
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="ms-2 me-6">
            <CustomButton
              title={`$ ${price}.00`}
              containerStyles="bg-red-100 px-2 tracking-wide py-2 rounded-full mb-4 text-red-700 border border-red-700"
            />
          </div>

          <div className="flex justify-center items-center me-2 mb-4 ">
            <Image src={star1} alt="star" className="mr-1" />
            <Image src={star1} alt="star" className="mr-1" />
            <Image src={star1} alt="star" className="mr-1" />
            <Image src={star1} alt="star" className="mr-1" />
            <Image src={star2} alt="star" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="title font-semibold text-lg uppercase mt-4">
          {title}
        </div>
        <div className="text-xl max-w-xs text-center">{description}</div>
      </div>
      <div className="mt-4">
        <CustomButton
          title="ADD TO CART"
          containerStyles="uppercase text-lg border border-red-500 rounded-full px-10 py-1 hover:bg-black hover:text-gray-400 duration-500"
        />
      </div>
    </div>
  );
};

export default CustomCard;
