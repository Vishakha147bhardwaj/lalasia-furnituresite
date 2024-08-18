import React from "react";
import TotalProductCard from "../ProductPage/TotalProductCard";
import Wrapper from "../ProductPage/Wrapper";

const RelatedCard = ({ products, onSelectCard }) => {
  // Determine the number of items to display based on screen size
  const displayedProducts = products.slice(0, 3);

  return (
    <Wrapper>
      <div className="flex flex-col">
        <h1 className="md:text-[32px] font-[700] text-lg">Related Items</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mt-10 sm:gap-2 md:gap-5">
          {displayedProducts.map((pc) => (
            <TotalProductCard
              key={pc.id}
              id={pc.id}
              image={pc.image}
              title={pc.title}
              heading={pc.heading}
              shortdescription={pc.shortdescription}
              price={pc.price}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default RelatedCard;
