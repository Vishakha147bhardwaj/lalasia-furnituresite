import Quotes from "@/icon/Landing-page/Quotes";
import RatingStar from "@/icon/Landing-page/RatingStar";
import Image from "next/image";
import React from "react";

const CustomerCards = ({ name, thoughts, ratings, image }) => {
  return (
    <div className="relative  items-center md:h-[256px] border-[1px] border-[red] ">
      {/* w-[594px] */}
      <div className="absolute top-1 left-3">
        <Quotes />
      </div>
      <div className=" flex flex-wrap justify-center px-4 py-16  align-center font-[500] text-sm md:text-lg text-[#AFADB5]">
        {/* w-[500px] */}
        {thoughts}
      </div>
      <div className="flex px-6 justify-between">
        <div className="flex gap-2">
          <div className=" w-[28px] h-[28px]md:w-[50px] md:h-[60px]">
            {" "}
            <Image src={image} width={300} height={300} alt="customer-image" />
          </div>
          <div className="font-[700] text-sm md:text-xl pt-[8px]">{name}</div>
        </div>
        <div className="flex items-center">
          <div className="flex ">
            <RatingStar />
          </div>
          <div className="font-[700] text-sm md:text-lg pt-[7px] ">
            {ratings}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCards;
