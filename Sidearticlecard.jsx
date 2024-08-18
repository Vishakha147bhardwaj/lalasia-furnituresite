import React from "react";
import { sidearticles } from "@/Database";
import Image from "next/image";

const Sidearticlecard = ({
  image,
  title,
  author,
  authorimage,
  heading,
  description,
  date,
}) => {
  return (
    <div className="flex gap-6">
      <Image
        src={image}
        width={300}
        height={400}
        alt="furniture photo"
        className=" w-[110px] h-[110px] md:w-[230px] md:h-[230px]"
      />
      <div className=" flex flex-col gap-2 md:gap-5">
        <div className="text-[#AFADB5] font-[500] text-xs md:text-lg">
          {title}
        </div>
        <div className=" flex flex-wrap w-[230px] md:w-[318px] font-[700] text-[16px] md:text-2xl">
          {heading}
        </div>
        <div className="text-[#AFADB5] font-[500] w-[230px] hidden md:block  md:text-lg md:w-[300px] truncate">
          {description}
        </div>
        <div className="flex gap-2 mt-2">
          <Image
            src={authorimage}
            width={300}
            height={400}
            alt="author image"
            className=" w-[18px] h-[18px] md:w-[28px] md:h-[28px]"
          />
          <div className="font-[700] text-xs ">{author}</div>
          <div className=" font-[500] text-[#AFADB5] hidden md:block text-xs">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidearticlecard;
