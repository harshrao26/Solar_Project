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
      <div className="text-center text-xl md:text-3xl text-[#0971BE]">
        <h1 className="pt-5">Solar Panels</h1>
      </div>
      <div className="px-4 md:px-0">
        <Products />
      </div>
    </>
  );
}

export default Home;
