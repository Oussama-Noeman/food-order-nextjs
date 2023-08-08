import React, { useState } from "react";

const ModalItems = ({ source }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          src={source}
          alt="drink"
          width={150}
          height={150}
          className="border-1 border-red-700 mt-4 hover:opacity-25"
        />
        {isHovered && (
          <div className="absolute w-[150px] h-[150px] rounded-md inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <button className=" text-red-500 p-2 rounded-lg bg-white   hover:opacity-100 border-2 border-white">
              Quick View
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalItems;
