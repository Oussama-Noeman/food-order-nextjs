"use client";
import React, { Fragment, useState } from "react";
import { categories, cards } from "../../data/Categories";
import CustomCard from "../../components/CustomCard";
import Modal from "../../components/Modal";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className={`bg-white h-auto `}>
        <div className="mt-12 w-full  grid grid-cols-12 ">
          <div className="sidebar col-span-3  gap-4 md:flex flex-col lg:pl-14 md:pl-6 mt-6  hidden">
            {categories.map((category) => (
              <p
                key={category.name}
                className={
                  category.name === "Hamburgers"
                    ? "text-xl  capitalize mb-2 text-red-700 font-bold"
                    : "text-xl font-normal capitalize mb-2"
                }
              >
                <span className="mr-4 font-bold ">.</span>
                {category.name}
              </p>
            ))}
          </div>
          <div className="md:hidden  text-xl ">
            <select name="" id="" className="sm:ml-20 ml-20">
              {categories.map((category) => (
                <option value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="items md:col-span-9 col-span-12   mb-12">
            <div className="flex flex-wrap justify-around items-center gap-1 mr-4">
              {cards.map((card) => (
                <div
                  className="lg:w-[25%] md:w-[35%] mt-6"
                  onClick={() => setShowModal(true)}
                >
                  <CustomCard
                    image={card.image}
                    price={card.price}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </Fragment>
  );
};

export default page;
