import React from "react";
import OrderSummary from "../Cart/OrderSummary";
import Confirmation from "./Confirmation";

const BillingDetails = ({ Confirmation }) => {
  return (
    <div className="flex flex-wrap justify-between items-start h-auto mb-32">
      <div className=" lg:w-[60%] w-full ">
        <p className="font-semibold text-xl sm:ml-16 ml-6 mt-6">
          Billing Details
        </p>
        <div className="sm:ml-16 ml-6 mt-4 flex flex-wrap justify-start  ">
          <input
            type="text"
            className="sm:w-[45%] w-full  py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
            placeholder="First Name"
          />
          <input
            type="text"
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
            placeholder="Last Name"
          />

          <input
            type="text"
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
            placeholder="Company Name (Optional)"
          />
          <select
            name=""
            id=""
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
          >
            <option value="" disabled selected>
              Country / Region
            </option>
          </select>
          <input
            type="text"
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
            placeholder="Address"
          />
          <input
            type="text"
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
            placeholder="Town / City"
          />
          <select
            name=""
            id=""
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
          >
            <option value="" disabled selected>
              State
            </option>
          </select>
          <input
            type="text"
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
            placeholder="SIP Code"
          />

          <input
            type="number"
            name=""
            id=""
            placeholder="Phone Number"
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="sm:w-[45%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-4 mb-4"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="sm:w-[91%] w-full py-3 px-8 rounded-lg border-2 border-red-600  mr-10 mb-4"
            placeholder="Order Notes (Optional)"
          ></textarea>
        </div>
      </div>
      <div className=" lg:mr-12 lg:mx-0 mx-auto ">
        <OrderSummary Confirmation={Confirmation} />
      </div>
    </div>
  );
};

export default BillingDetails;
