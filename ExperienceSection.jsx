import Image from "next/image";
import React from "react";
import { highlights } from "@/Database";
import Wrapper from "../ProductPage/Wrapper";

const ExperienceSection = ({ number, tagline }) => {
  const handleLearnMoreClick = () => {
    console.log("learn more button clicked");
  };
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row md:gap-[60px] ">
        <div className="flex flex-col gap-7">
          <div className="text-[#FFB23F] text-sm md:text-lg font-[700]]">
            Our Product
          </div>
          <div className="font-[700] text-2xl md:text-5xl mb-4">
            Crafted by talented and high quality material
          </div>
          <div className="font-[500] text-sm md:text-lg text-[#AFADB5] mb-4">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </div>

          <button
            className="text-white bg-[#518581] w-[170px] text-lg px-3 py-2"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </button>

          <div className=" w-full h-full md:w-[594px] md:h-[260px] mt-6">
            <Image
              src="https://res.cloudinary.com/drlhq9k3p/image/upload/v1711016888/unsplash_mpN7xjKQ_Ns_wuatxh.png"
              height={300}
              width={300}
              alt="furniture image"
              className="w-full md:w-[594px] md:h-[260px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 pt-[60px]">
          <div className="flex gap-6">
            {highlights.map((numbers) => (
              <div className="flex flex-col gap-1" key={numbers.id}>
                <div className="font-[700] text-2xl md:text-5xl">
                  {" "}
                  {numbers.number}{" "}
                </div>
                <div className="font-[500] text-sm md:text-lg text-[#AFADB5]">
                  {numbers.tagline}{" "}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-full md:w-[595px] md:h-[510px]">
            <Image
              src="https://res.cloudinary.com/drlhq9k3p/image/upload/v1711018993/unsplash_376KN_ISplE_benere.png"
              width={300}
              height={300}
              alt="image"
              className=" w-full h-full md:w-[595px] md:h-[510px]"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExperienceSection;
