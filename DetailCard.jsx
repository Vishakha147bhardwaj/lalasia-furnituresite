import React from "react";
import Wrapper from "../ProductPage/Wrapper";
import Image from "next/image";

const DetailCard = ({
  image,
  heading,
  shortdescription,
  description,
  price,
  colors,
}) => {
  const handleAddToCart = () => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const product = { image, heading, shortdescription, price };
    const updatedCartItems = [...existingCartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    const product = { image, heading, shortdescription, price };
    localStorage.setItem("singleCartItem", JSON.stringify(product));
    alert("Redirecting to checkout...");
  };
  return (
    <Wrapper>
      <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
        <Image
          src={image}
          width={300}
          height={300}
          className="w-full md:h-[600px] md:w-[600px] object-contain"
        />
        <div className="flex flex-col gap-4 md:mt-10 md:gap-6">
          <div className="font-[700] text-2xl md:text-[44px]">{heading}</div>
          <div className="font-[500] text-sm text-[#AFADB5] md:text-lg">
            {shortdescription}
          </div>
          <div className="font-[700] mt-3 text-sm md:text-lg">Color</div>
          <div className="flex ">
            {colors.map((color) => (
              <div
                key={color.hexcode}
                className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                style={{ backgroundColor: color.hexcode }}
              ></div>
            ))}
          </div>
          <div className=" flex  w-[327px] md:w-[590px]">
            <div className="flex flex-wrap text-sm md:text-lg text-[#AFADB5]">
              {description}
              <button className=" text-sm text-[#518581] md:text-lg">
                Read More
              </button>
            </div>
            {/* <button className=" text-sm md:text-lg">Read More</button> */}
          </div>
          <div className="font-[700] text-2xl md:text-[44px]">{price}</div>
          <div className="flex gap-2 flex-col md:flex-row">
            <button
              onClick={handleBuyNow}
              className=" md:w-[285px] py-[15px] px-[30px] w-full text-[#FFFFFF] bg-[#518581] md:text-lg"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="md:w-[285px] py-[15px] px-[30px]font-[700] border-[1px] border-[#F3F3F3] w-full text-[#151411] bg-[#FFFFFF] md:text-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailCard;
