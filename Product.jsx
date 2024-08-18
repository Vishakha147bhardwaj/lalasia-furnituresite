import React from "react";

const Product = () => {
  return (
    <wrapper>
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <div className="font-[700] justify-center items-center text-sm md:text-lg text-[#FFB23F]">
          Product
        </div>
        <div className="font-[700] justify-center items-center text-2xl md:text-5xl text-[#151411]">
          Our popular product
        </div>
        <div className=" flex flex-wrap max-w-[656px] justify-center items-center text-center font-[500] text-sm d:text-lg text-[#AFADB5]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </div>
      </div>
    </wrapper>
  );
};

export default Product;
