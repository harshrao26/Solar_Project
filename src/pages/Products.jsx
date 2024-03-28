import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Box from "../components/Box";
import { ProductsInfo, ProductsFilter } from "../utils/data";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      <div className="w-full"></div>
      <div className="flex w-full px-10 py-5">
        <div className="left w-[25%] ">
          <div className="">
            {ProductsFilter.map((value, index) => (
              <div key={index}>
                <h3 className=" font-semibold bg-[#0971BE] text-white rounded-lg text-[1.5vw] flex items-center justify-between px-10 py-2 capitalize">
                  
                  {value.filterheadtext}
                <IoMdArrowDropdown />

                </h3>
                <ul className="mb-10">
                  {value.options.map((option, idx) => {
                    return (
                      <div className="flex items-center gap-5 px-2 py-2 text-[1.vw] bg-white border-solid border-b-[0.1px] border-zinc-500 ">
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
        <div className="right w-[75%] pl-8 flex flex-wrap sticky top-0 items-start justify-start gap-4">
          {/* Map through products data and display in boxes */}
          {ProductsInfo.map((val, index) => {
            return (
              <Link to= "/products/1">
                <Box key={index} data={val} />
              </Link>
            );
          })}
          <Link to= "/product/details">Next Products</Link>
        </div>
      </div>
    </>
  );
}

export default Products;
