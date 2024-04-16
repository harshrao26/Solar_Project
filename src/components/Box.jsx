import React from "react";
import Button from "./Button";
function Box({data}, {key}) {
  const {text, img, price} = data;
  return (
    <>
      <div className="border-solid border-[0.1px] border-zinc-300 bg-white w-full rounded-lg">
        <div className="w-full relative overflow-hidden">
          <img
            className="p-4  w-full h-68  object-cover border-solid border-b-[2px] border-zinc-300"
            src={img}
            alt={text}
          />
        </div>
        <div className="px-2 ">
          <p className=" w-[full] text-md leading-5 py-1">
            {text}
          </p>
          <h1 className="text-[#0B72BF] font-semibold py-1">Rs. {price}/-</h1>
          <div className="inline-block py-2">
            <Button color="blue" name="Check"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
