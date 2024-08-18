import Image from "next/image";
import React from "react";

const DiscountCard = ({ image, title, description }) => {
  const handleClick = () => {
    console.log("button is clicked");
  };
  return (
    <div className="flex flex-col h-[200px] w-[375px] md:w-full md:h-[500px]  ">
      <Image
        src={image}
        width={300}
        height={400}
        className="w-full h-full object-cover absolute"
      />
      <div className="relative flex flex-col md:gap-5 justify-start items-start w-full h-full top-10 md:top-40 left-10 md:left-40">
        <button
          onClick={handleClick}
          className=" z-10 px-2 py-2 md:px-4 md:py-2 rounded-2xl text-[10px] md:text-sm text-[white] bg-[#518581] justify-start"
        >
          Discount
        </button>
        <div className="font-[700] text-[16px] md:text-5xl text-[white] md:w-[428px]">
          {title}
        </div>
        <div className="font-[700] text-xs w-[204px] md:text-2xl text-[white] opacity-[80%] md:w-[428px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
