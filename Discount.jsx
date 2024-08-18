import React from "react";
import Wrapper from "../ProductPage/Wrapper";

const Discount = () => {
  const handleDiscount = () => {
    console.log("learn more button clicked");
  };
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row gap-10 md:gap-48">
        <div className="flex font-[700] text-2xl md:text-5xl">
          Join with me to get special discount
        </div>
        <button
          className="text-white bg-[#518581] w-[170px] text-lg px-3 py-2"
          onClick={handleDiscount}
        >
          Learn More{" "}
        </button>
      </div>
    </Wrapper>
  );
};

export default Discount;
