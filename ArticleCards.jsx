import Image from "next/image";
import React, { useState } from "react";

const ArticleCards = ({ title, image, heading, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Image
        src={image}
        width={300}
        height={300}
        alt="article-image"
        className="w-full h-full object-cover"
      />

      <div className="flex w-full flex-col z-10 absolute bottom-0 px-3  bg-opacity-75 text-white">
        <div className="font-semibold text-xs md:text-lg">{title}</div>
        <div className="font-bold text-[16px] md:text-2xl">{heading}</div>
        <div
          className={`font-normal text-sm md:text-lg ${
            expanded ? "" : "line-clamp-1"
          }`}
        >
          {description}
        </div>
        <button
          onClick={toggleExpanded}
          className="text-xs md:text-lg opacity-[85%] font-[500] h-[32px] w-[93px] mt-2"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </>
  );
};

export default ArticleCards;
