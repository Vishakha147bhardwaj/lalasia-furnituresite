import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const TotalProductCard = ({
  id,
  image,
  title,
  heading,
  shortdescription,
  price,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="flex flex-col gap-[15px] w-[156px] md:w-[300px] ">
      <div onClick={handleCardClick} className="cursor-pointer">
        <div className="h-[130px] w-full md:h-[360px]">
          <Image
            src={image}
            width={300}
            height={300}
            alt="product-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" font-[700] text-xs md:text-lg text-[#AFADB5]">
        {title}
      </div>
      <div className="text-[#151411] line-clamp-1 font-[700] text-[16px] md:text-[26px]">
        {heading}
      </div>
      <div className="text-[#AFADB5] font-[500] line-clamp-1 text-xs md:text-lg">
        {shortdescription}
      </div>
      <div className="font-[700] text-sm  md:text-2xl">{price}</div>
    </div>
  );
};

export default TotalProductCard;
