import { Search } from "lucide-react";
import { useState } from "react";
import Wrapper from "../ProductPage/Wrapper";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Wrapper>
      <div className="bg-white flex sm:gap-2 md:w-[800px] md:mx-auto z-10 justify-between items-center px-2 py-2 shadow-sm focus-visible:border">
        <div>
          <Search size={32} strokeWidth={1} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search property"
          className="h-full bg-transparent sm:w-full"
        />
        <button
          className="text-white bg-[#518581] w-fit text-lg px-5 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </Wrapper>
  );
};

export default SearchBox;
