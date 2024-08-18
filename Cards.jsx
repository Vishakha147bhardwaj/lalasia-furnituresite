import React from "react";
import Wrapper from "../ProductPage/Wrapper";
import ServiceCards from "./ServiceCards";
import { services } from "@/Database";

const Cards = () => {
  return (
    <Wrapper>
      <div className=" md:my-20 flex flex-col gap-4 md:grid md:grid-cols-3">
        {services.map((sc) => (
          <ServiceCards
            key={sc.id}
            index={sc.index}
            category={sc.category}
            description={sc.description}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Cards;
