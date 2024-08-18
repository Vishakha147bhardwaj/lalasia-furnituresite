import React from "react";
import Wrapper from "../ProductPage/Wrapper";

const Articles = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-4 w-[327px] md:w-[544px]">
        <div className="text-[#FFB23F] text-sm md:text-lg font-[700]">
          Article
        </div>
        <div className="text-2xl md:text-5xl font-[700] w-[308px] md:w-[544px] flex flex-wrap">
          The best furniture comes from Lalasia
        </div>
        <div className="font-[500] text-lg text-[#AFADB5]">
          Pellentesque etiam blandit in tincidunt at donec.
        </div>
      </div>
    </Wrapper>
  );
};

export default Articles;
