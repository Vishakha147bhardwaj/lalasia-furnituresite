import React from "react";

const SecondSection = () => {
  return (
    <wrapper>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[250px] md:px-0">
        <div className="flex flex-col gap-4 max-w-full md:max-w-[500px] mt-12 md:mt-24">
          <p className=" text-left text-sm md:text-lg text-[#FFB23F] font-semibold">
            Benefit
          </p>
          <p className="text-left text-2xl md:text-5xl font-semibold">
            Benefits when using our services
          </p>
        </div>
        <div className="flex flex-col max-w-full md:max-w-[500px] mt-6 md:mt-36">
          <p className="text-left text-sm md:text-lg text-[#AFADB5]">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </div>
    </wrapper>
  );
};

export default SecondSection;
