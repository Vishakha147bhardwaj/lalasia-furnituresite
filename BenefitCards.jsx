import React from "react";
import { benefitcards } from "@/Database";
import Cards from "./Cards";
import Wrapper from "../ProductPage/Wrapper";

const BenefitCards = () => {
  return (
    <Wrapper>
      <div className="md:grid md:grid-cols-3 gap-[25px] mx-auto flex flex-col ">
        {benefitcards.map((bc) => (
          <div key={bc.id}>
            <Cards
              title={bc.title}
              description={bc.description}
              image={bc.image}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default BenefitCards;
