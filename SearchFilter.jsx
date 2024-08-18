import Filter from "@/icon/Products-page/Filter";
import React, { useState, useEffect } from "react";
import Search from "@/icon/Search";
import { totalproductcards } from "@/Database";
import TotalProducts from "./TotalProducts";
import Wrapper from "./Wrapper";
import { useRouter } from "next/router";

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setFilteredProducts(totalproductcards);
  }, []);

  useEffect(() => {
    const updatedFilteredProducts = totalproductcards.filter((product) => {
      if (product.title) {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
    setFilteredProducts(updatedFilteredProducts);
  }, [searchQuery]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleCardClick = (id) => {
    router.push(`/productDetail/${id}`);
  };

  const categories = ["All", "Lamp", "Drawer", "Wooden Chest"];

  return (
    <Wrapper>
      <div className="flex mt-10 flex-col  ">
        <div className="flex gap-10 ">
          <div className="bg-white flex gap-2 md:w-[800px] md:mx-auto z-10 justify-between items-center px-2 py-2 shadow-sm focus-visible:border">
            <div className="flex md:flex-row items-center gap-6 w-full">
              <div>
                <Search size={32} strokeWidth={1} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search property"
                className="h-full bg-transparent w-fit"
              />
            </div>
            <div className="bg-[#518581] text-white">
              <button
                className="text-white bg-[#518581] w-[100px] md:w-[170px] text-sm md:text-lg px-3 py-2"
                onClick={() => {}}
              >
                Find Now
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <button
              className="flex items-center gap-1 pt-5 me-40"
              onClick={toggleDropdown}
            >
              <Filter />
              Filter
            </button>
            {openDropdown && (
              <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2">
                <select
                  value={selectedCategory}
                  onChange={handleDropdownChange}
                  className="w-full"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
        <div>
          {searchQuery === "" ? (
            <TotalProducts
              products={totalproductcards}
              onSelectCard={handleCardClick}
            />
          ) : (
            <>
              <TotalProducts
                products={filteredProducts}
                onSelectCard={handleCardClick}
              />
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchFilter;
