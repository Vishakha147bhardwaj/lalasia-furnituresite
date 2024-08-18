import Sort from "@/icon/Products-page/Sort";
import React from "react";
import TotalProductCard from "./TotalProductCard";
import Wrapper from "./Wrapper";

const TotalProducts = ({ products, onSelectCard }) => {
  return (
    <Wrapper>
      <div className="flex flex-col mx-auto mt-10">
        <div className="flex justify-between px-20 mx-30">
          <div className="font-[700] text-[18px] md:text-5xl items-start ">
            Total Product
          </div>
          <div className="hidden md:flex">
            <Sort />
            <div className="font-[500] text-lg me-14">Sort By</div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-20 lg:mx-auto lg:gap-5">
          {products.map((pc) => (
            <TotalProductCard
              key={pc.id}
              id={pc.id}
              image={pc.image}
              title={pc.title}
              heading={pc.heading}
              shortdescription={pc.shortdescription}
              price={pc.price}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default TotalProducts;
