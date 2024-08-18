import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DiscountCard from "./DiscountCard";
import { discountcarousal } from "@/Database";

const DiscountCarousal = () => {
  return (
    <div className="mt-10 md:mb-10">
      <Carousel className="w-full relative">
        <CarouselContent className=" relative">
          {discountcarousal.map((dc, index) => (
            <CarouselItem key={index}>
              <div className="flex">
                <DiscountCard
                  image={dc.image}
                  title={dc.title}
                  description={dc.description}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute hidden md:block z-10 left-[25px] top-1/2 " />
        <CarouselNext className="absolute hidden md:block z-10 right-[25px] top-1/2 " />
      </Carousel>
    </div>
  );
};

export default DiscountCarousal;
