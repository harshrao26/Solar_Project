import React from "react";
import Button from "../components/Button";
import Loading from "./Loading";
import { GrCheckboxSelected } from "react-icons/gr";

import { IoCartOutline } from "react-icons/io5";

function ProductsDetails() {
  return (
    <div className=" w-full h-screen flex">
      <div className="  w-full h-[80vh] flex px-20 py-10">
        <div className=" bg-slate-00 w-[40%] h-[100%] ">
          <img
            className=" object-contain w-[100%] h-[100%]"
            src="https://bluebirdsolar.com/cdn/shop/files/ShopImage2-100WPoly_72853ac1-d385-4d4d-a6a9-7d423cf635bd_360x.jpg?v=1688548518"
            alt=""
          />
        </div>
        <div className="w-[60%] ml-5">
          <h1 className="text-[2vw] tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi?
          </h1>
          <p className="text-[1.5vw] font-semibold my-2">₹12,935/-</p>
          <p className="text-[1vw] my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis nulla saepe, quos libero, laborum, error excepturi numquam quaerat minus repellendus? Minus, sit sapiente voluptates fuga delectus quidem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis nulla saepe, quos libero, laborum, error excepturi numquam quaerat minus repellendus? Minus, sit sapiente voluptates fuga delectus quidem?
          </p>
          <div className="flex gap-4">
            <div className=" my-2 text-[2vw] flex gap-2 items-center">
              {/* <GrCheckboxSelected /> */}

              <Button name="Shop Now" color="blue" />
            </div>
            <div className=" my-2 text-[2vw] flex gap-2 items-center">
              {/* <IoCartOutline /> */}
              <Button name="Add Cart" color="zinc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
