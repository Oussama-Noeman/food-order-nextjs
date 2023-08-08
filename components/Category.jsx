"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
const Category = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="  flex lg:flex-row   flex-wrap justify-center  items-center  lg:my-12 ">
        <Link href={"/"}>
          <Image
            src={"/Frame 39704.png"}
            alt="cat1"
            width={100}
            height={90}
            className="lg:mt-0 mt-12  mx-10"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/Frame 39694.png"}
            alt="cat1"
            width={100}
            height={90}
            className="lg:mt-0 mt-12  mx-10"
          />
          <p></p>
        </Link>
        <Link href={"/"}>
          <Image
            src={"/Frame 39696.png"}
            alt="cat1"
            width={90}
            height={90}
            className="lg:mt-0 mt-12  mx-10"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/Frame 39698.png"}
            alt="cat1"
            width={55}
            height={90}
            className="lg:mt-0 mt-12  mx-10"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/Frame 39701.png"}
            alt="cat1"
            width={90}
            height={90}
            className="lg:mt-0 mt-12  mx-10"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/Frame 39702.png"}
            alt="cat1"
            width={70}
            height={90}
            className="lg:mt-0 mt-12  mx-10"
          />
        </Link>
      </div>

      <div className="space-x-16 flex flex-wrap justify-center items-center my-10 mobile:flex-col mobile:items-center mobile:justify-center mobile:mr-14">
        <div className="font-semibold text-3xl text-gray-500 mobile:hidden">
          <button>&lt; </button>
        </div>
        <div className="font-semibold text-3xl text-gray-500 mobile:mt-12 sm:hidden">
          <button>&lt;</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/Rectangle 23867.png"}
            alt="burger"
            width={200}
            height={200}
            className="object-contain"
          />
          <h4 className="uppercase text-red-500 font-semibold mt-2">
            double hamburger
          </h4>
          <CustomButton
            title="$8.00"
            containerStyles="bg-red-700 text-white rounded-full px-4 py-1 text-xl mt-3"
            handleClick={handleClick}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/Rectangle 23868.png"}
            alt="burger"
            width={200}
            height={200}
            className="object-contain"
          />
          <h4 className="uppercase text-red-500 font-semibold mt-2">
            Regular Hamburger
          </h4>
          <CustomButton
            title="$5.00"
            containerStyles="bg-red-700 text-white rounded-full px-4 py-1 text-xl mt-3"
            handleClick={handleClick}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/Rectangle 23869.png"}
            alt="burger"
            width={200}
            height={200}
            className="object-contain"
          />
          <h4 className="uppercase text-red-500 font-semibold mt-2">
            Beef Mozzarella
          </h4>
          <CustomButton
            title="$6.00"
            containerStyles="bg-red-700 text-white rounded-full px-4 py-1 text-xl mt-3"
            handleClick={handleClick}
          />
        </div>
        <div className="font-semibold text-3xl text-gray-500 mobile:mt-12 ">
          <button>&gt;</button>
        </div>
      </div>
    </>
  );
};

export default Category;
