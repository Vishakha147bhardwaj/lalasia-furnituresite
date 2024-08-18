import React from "react";
import Wrapper from "../ProductPage/Wrapper";

const Testimonal = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="font-[700] text-sm md:text-lg text-[#FFB23F]">
          Testimonials
        </div>
        <div className="font-[700] text-2xl md:text-5xl ">
          What our customer say
        </div>
        <div className="text-[#AFADB5] sm:px-2 text-sm md:text-lg font-[500]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonal;
