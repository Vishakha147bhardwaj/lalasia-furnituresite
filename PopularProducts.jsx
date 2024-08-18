"use client";

import React from "react";
import PopularCard from "./PopularCard";
import { popularproductscards } from "@/Database";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PopularProducts = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="relative">
        {popularproductscards.map((pc) => (
          <CarouselItem
            key={pc.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <div className="flex md:gap-3 ">
              <PopularCard
                image={pc.image}
                title={pc.title}
                heading={pc.heading}
                description={pc.description}
                price={pc.price}
              />
            </div>
          </CarouselItem>
        ))}
        <CarouselPrevious className="absolute top-[40%] hidden md:block left-4 z-10" />
        <CarouselNext className="absolute top-[40%] hidden md:block md:right-4 z-10" />
      </CarouselContent>
    </Carousel>
  );
};

export default PopularProducts;
