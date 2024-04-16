import React from "react";
import Products from "./Products";

function Home() {
  return (
    <>
      <div>
        <img
          class="h-auto max-w-full"
          src="https://bluebirdsolar.com/cdn/shop/files/shop-page-banner.jpg?v=1681546274"
          alt="image description"
        />
      </div>
      <div>
        <div>
          <h1 className="text-center tracking-tighter text-3xl md:text-5xl py-10">
            Our Solar Panels,
            <br /> Your Energy{" "}
            <span className="font-bold text-[#0B72BF] font-['Edwardian_Script_ITC'] md:text-7xl tracking-wider">
              Independence..
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="text-center text-xl md:text-3xl text-[#0B72BF]">
        <h1 className="pt-5">Solar Panels</h1>
      </div>
      <div className="px-4 md:px-0">
        <Products />
      </div>
    </>
  );
}

export default Home;
