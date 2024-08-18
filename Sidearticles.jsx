import React from "react";
import { sidearticles } from "@/Database";
import Sidearticlecard from "./Sidearticlecard";
import Wrapper from "../ProductPage/Wrapper";
const Sidearticles = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-5">
        {sidearticles.map((sa) => (
          <div key={sa.id}>
            <Sidearticlecard
              image={sa.image}
              title={sa.title}
              authorimage={sa.authorimage}
              description={sa.description}
              heading={sa.heading}
              author={sa.author}
              date={sa.date}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Sidearticles;
