import React from "react";
import Wrapper from "../ProductPage/Wrapper";

const ServiceCards = ({ index, category, description }) => {
  return (
    <Wrapper>
      <div className=" flex flex-col gap-2 md:gap-4">
        <div className="font-[700] text-[#518581] md:text-[64px] text-[32px]">
          {index}
        </div>
        <div className="font-[700] text-sm md:text-[24px]">{category}</div>
        <div className="font-[500] text-xs text-[#AFADB5] md:text-lg">
          {description}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceCards;
