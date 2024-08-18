import React from "react";
import Wrapper from "../ProductPage/Wrapper";
import Image from "next/image";

const FirstSection = () => {
  return (
    <Wrapper>
      <div className="flex flex-col mt-20 items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center text-[26px] font-[700] md:text-[64px]">
          Services
        </div>
        <div className="flex flex-wrap md:items-center md:justify-center text-sm text-[#AFADB5] md:text-lg text-center md:w-[505px]">
          The product crafted by talented crafter and using high quality
          material with love inside
        </div>
        {/* <div className="flex md:w-[1240px] w-[327px]">
          <Image
            src={
              "https://res.cloudinary.com/drlhq9k3p/image/upload/v1716891174/Rectangle_24_hggu9n.png"
            }
            width={300}
            height={300}
            className=" w-full object-contain"
          />
        </div> */}
      </div>
    </Wrapper>
  );
};

export default FirstSection;
