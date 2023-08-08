"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ReviewOrder from "../../components/Cart/ReviewOrder";
import BillingDetails from "../../components/Cart/BillingDetails";
import Confirmation from "../../components/Cart/Confirmation";

const page = () => {
  const [active, setActive] = useState("Review Order");
  const handleLinkClick = (linkName) => {
    setActive(linkName);
  };
  const checkOut = () => {
    setActive("Billing Details");
  };
  const setConfirmation = () => {
    setActive("Confirmation");
  };
  return (
    <div className="h-auto">
      <div className="md:ml-16 sm:ml-12 ml-6 w-auto  mt-9 flex  ">
        <p
          onClick={() => handleLinkClick("Review Order")}
          className={`cursor-pointer sm:text-lg text-sm text-gray-500 md:mr-6 mr-0 ${
            active === "Review Order" ? "font-bold text-red-700" : ""
          }`}
        >
          Review Order
        </p>
        <div className="">
          <IoIosArrowForward size={20} />
        </div>
        <p
          onClick={() => handleLinkClick("Billing Details")}
          className={`cursor-pointer sm:text-lg text-sm  text-gray-500 md:ml-4 ml-0 md:mr-6 mr-0 ${
            active === "Billing Details" ? "font-bold text-red-700" : ""
          }`}
        >
          Billing Details
        </p>
        <div className="">
          <IoIosArrowForward size={20} />
        </div>
        <p
          onClick={() => handleLinkClick("Confirmation")}
          className={`cursor-pointer sm:text-lg text-sm  text-gray-500 md:ml-4 ml-0 md:mr-6 mr-0 ${
            active === "Confirmation" ? "font-bold text-red-700" : ""
          }`}
        >
          Confirmation
        </p>
      </div>
      {active === "Review Order" && <ReviewOrder checkOut={checkOut} />}
      {active === "Billing Details" && (
        <BillingDetails Confirmation={setConfirmation} />
      )}
      {active === "Confirmation" && <Confirmation />}
    </div>
  );
};

export default page;
