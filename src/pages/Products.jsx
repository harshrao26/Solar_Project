import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Box from "../components/Box";
import { ProductsInfo, ProductsFilter } from "../utils/data";
import { Link } from "react-router-dom";

function Products() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div className="w-full"></div>
      <div className="flex flex-col lg:flex-row w-full px-5 lg:px-10 py-5">
        <div className="w-full lg:w-[25%]">
          <div className="cursor-pointer" onClick={toggleFilter}>
            <h3 className="font-semibold bg-[#0B72BF] text-white rounded-lg text-base lg:text-[1.5vw] flex items-center justify-between px-4 lg:px-10 py-2 capitalize">
              Filter
              <IoMdArrowDropdown />
            </h3>
            <div
              className={`${
                isFilterOpen ? "block" : "hidden"
              } bg-white  left-20 mt-2 w-full rounded-lg shadow-lg z-10`}
            >
              {ProductsFilter.map((value, index) => (
                <div key={index}>
                  <h3 className="font-semibold bg-[#0B72BF] text-white mt-4 md:mt-8  rounded-lg text-base lg:text-[1.3vw] flex items-center justify-between px-4 lg:px-10 py-2 capitalize">
                    {value.filterheadtext}
                    <IoMdArrowDropdown />
                  </h3>
                  <ul>
                    {value.options.map((option, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 lg:gap-5 px-2 py-2 text-sm lg:text-base bg-white border-solid border-b-[0.1px] border-zinc-500"
                        >
                          <input type="checkbox" name="" id="" />
                          <h1>{option}</h1>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[75%] pl-0 lg:pl-8 flex flex-wrap justify-start gap-4">
          {/* Map through products data and display in boxes */}
          {ProductsInfo.map((val, index) => {
            return (
              <Link key={index} to="/products/1">
                <Box data={val} />
              </Link>
            );
          })}
          <Link to="/product/details">Next Products</Link>
        </div>
      </div>
    </>
  );
}

export default Products;
