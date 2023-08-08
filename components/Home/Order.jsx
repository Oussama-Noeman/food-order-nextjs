import React from "react";
import { cards } from "../../data/Card";
import CustomCard from "../CustomCard";

const Order = () => {
  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <div className="uppercase mobile:text-2xl sm:text-4xl md:text-5xl font-semibold">
          taste the difference
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 w-full">
        {cards.map((card) => (
          <CustomCard
            image={card.image}
            price={card.price}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default Order;
