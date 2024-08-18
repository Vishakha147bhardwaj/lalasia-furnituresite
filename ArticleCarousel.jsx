import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ArticleCards from "./ArticleCards";
import { articles } from "@/Database";
import Wrapper from "../ProductPage/Wrapper";

const ArticleCarousel = () => {
  return (
    <Wrapper>
      <Carousel>
        <CarouselContent className="h-[200px] md:w-[582px] md:h-[565px]">
          {articles.map((ac, index) => (
            <CarouselItem key={index}>
              <ArticleCards
                image={ac.image}
                title={ac.title}
                heading={ac.heading}
                description={ac.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute z-10 top-1/2 transform -translate-y-1/2 right-0 hidden md:block" />
        <CarouselPrevious className="absolute z-10 top-1/2 transform -translate-y-1/2 left-0 hidden md:block" />
      </Carousel>
    </Wrapper>
  );
};

export default ArticleCarousel;
