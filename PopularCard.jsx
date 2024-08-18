import Image from "next/image";
import React from "react";

const PopularCard = ({ image, title, heading, description, price }) => {
  return (
    <div className="flex flex-col gap-[15px] w-[300px] ">
      <div className=" w-full h-[194px] md:h-[300px] ">
        <Image
          src={image}
          width={300}
          height={300}
          alt="product-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" font-[700] text-xs md:text-lg text-[#AFADB5]">
        {title}
      </div>
      <div className="text-[#151411] font-[700] text-[16px] md:text-2xl">
        {heading}
      </div>
      <div className="text-[#AFADB5] font-[500] text-sm md:text-lg">
        {description}
      </div>
      <div className="font-[700] text-[16px] md:text-2xl ">{price}</div>
    </div>
  );
};

export default PopularCard;
