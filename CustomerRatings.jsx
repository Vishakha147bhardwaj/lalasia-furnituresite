import React from "react";
import { customers } from "@/Database";
import CustomerCards from "./CustomerCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Wrapper from "../ProductPage/Wrapper";

const CustomerRatings = () => {
  return (
    <Wrapper>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="relative">
          {customers.map((c) => (
            <CarouselItem
              key={c.id}
              className=" basic:1 md:basis-1/3 lg:basis-1/3"
            >
              <div className="flex gap-14">
                <CustomerCards
                  name={c.name}
                  thoughts={c.thoughts}
                  ratings={c.ratings}
                  image={c.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Wrapper>
  );
};

export default CustomerRatings;
