import Title from "@/icon/Navbar/Title";
import Vector from "@/icon/Navbar/Vector";
import Vector1 from "@/icon/Navbar/Vector1";
import Vector2 from "@/icon/Navbar/Vector2";
import React from "react";
import FooterCard from "../FooterCard";
import { footercard } from "@/Database";
import Wrapper from "../ProductPage/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <div className="flex flex-col gap-10">
          <div className="flex">
            <div className="flex flex-col px-3">
              <Vector />
              <Vector1 />
              <Vector2 />
            </div>
            <div>
              <Title />
            </div>
          </div>

          <div className="font-[500] text-[#AFADB5] md:text-[#151411] text-sm md:text-lg max-w-[504px] flex flex-wrap">
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </div>
        </div>
        <div className="flex gap-20">
          {footercard.map((data) => (
            <FooterCard key={data?.name} data={data} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
