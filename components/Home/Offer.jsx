"use client";
import Image from "next/image";
import CustomButton from "../CustomButton";

const Offer = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="mt-32 mx-0 flex flex-col justify-center items-center">
        <div className="mobile:text-2xl sm:text-4xl md:text-5xl font-semibold uppercase">
          super saving offers!
        </div>
        <div>
          <CustomButton
            title="explore our deals"
            containerStyles="text-white uppercase text-xl bg-red-700 mobile:px-6 px-12 py-2  rounded-full mt-8"
            handleClick={handleClick}
          />
        </div>
        <div className="lg:h-80 h-[600px] bg-red-700 w-full my-16 relative">
          <div
            style={{
              backgroundImage: `url("/Rectangle 23878.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%", // Set the desired height for your hero section
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex lg:flex-row sm:flex-col mobile:flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center lg:ms-32 ">
              <div className="border-white border-2 h-28 w-96 mobile:w-80 text-3xl mobile:text-2xl ps-6 text-white flex justify-start items-center">
                Get deals up to
                <span className="font-bold text-5xl mobile:text-3xl ms-4">
                  50%
                </span>
              </div>
              <div className="border-white bg-white border-2 h-24 w-96 mobile:w-80 text-3xl ps-6 text-white flex justify-start items-center">
                <p className="text-black text-2xl mobile:text-xl">
                  <span className="font-bold">With Every Meal.</span> <br />
                  <span className="text-gray-500 text-xl">
                    Use Coupon Code:{" "}
                    <span className="uppercase text-red-700 font-bold text-2xl mobile:text-xl">
                      first50
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border-white border-2 h-28 w-96 mobile:w-80 text-3xl mobile:text-2xl ps-6 text-white flex justify-start items-center">
                Get deals up to
                <span className="font-bold text-5xl mobile:text-3xl ms-4">
                  70%
                </span>
              </div>
              <div className="border-white bg-white border-2 h-24 w-96 mobile:w-80 text-3xl ps-6 text-white flex justify-start items-center">
                <p className="text-black text-2xl mobile:text-xl">
                  <span className="font-bold">With Every Dessert.</span> <br />
                  <span className="text-gray-500 text-xl">
                    Use Coupon Code:{" "}
                    <span className="uppercase text-red-700 font-bold text-2xl  mobile:text-xl">
                      DESS80
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="ms w-full flex justify-end mr-12">
              <CustomButton
                title="View all >"
                containerStyles="bg-white lg:px-6  py-2 rounded-full text-red-700 md:px-20 sm:px-12 mobile:px-6 lg:mr-20"
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
