import React from "react";
import Button from "../components/Button";
import Loading from "./Loading";
import { GrCheckboxSelected } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";

function ProductsDetails() {
  return (
    // <div className="w-full min-h-screen flex flex-col">
    //   <div className="flex-1 px-5 py-10">
    //     <div className="w-full h-[80vh] flex flex-col lg:flex-row">
    //       <div className="lg:w-2/5">
    //         <img
    //           className="object-cover w-full h-full"
    //           src="https://bluebirdsolar.com/cdn/shop/files/ShopImage2-100WPoly_72853ac1-d385-4d4d-a6a9-7d423cf635bd_360x.jpg?v=1688548518"
    //           alt=""
    //         />
    //       </div>
    //       <div className=" lg:w-3/5 leading-none ml-0 lg:ml-5 mt-5 lg:mt-0">
    //         <h1 className=" text-2xl lg:text-4xl font-bold mb-2">
    //           Lorem ipsum do elit. Suscipit, mod?
    //         </h1>
    //         <p className="leading-none text-lg lg:text-xl font-semibold mb-4">₹12,935/-</p>
    //         <p className="text-base lg:text-lg leading-none mb-4">
    //           Lorem ipsuuam quaerat minus repellendus? Minus, sit sapiente voluptates fuga delectus quidem?
    //           {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis nulla saepe, quos libero, laborum, error excepturi numquam quaerat minus repellendus? Minus, sit sapiente voluptates fuga delectus quidem? */}
    //         </p>
    //         <div className="flex lg:flex-row gap-4">
    //           <div className="flex  items-center">
    //             <Button name="Shop Now" color="blue" />
    //           </div>
    //           <div className="flex  items-center">
    //             <Button name="Add Cart" color="zinc" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <section class="overflow-hidden">
        <div class="mx-auto max-w-5xl px-10 py-10">
          <div class="mx-auto flex flex-wrap items-center lg:w-4/5 border-[1px] p-4 border-zinc-200 rounded-md ">
            <img
              alt="165 Watt 12 Volt Polycrystalline Solar Panel"
              class="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src="https://bluebirdsolar.com/cdn/shop/files/ShopImage2-100WPoly_72853ac1-d385-4d4d-a6a9-7d423cf635bd_360x.jpg?v=1688548518"
            />
            <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 class="text-sm font-semibold tracking-widest text-gray-500">
                Company Name
              </h2>
              <h1 class="my-4 text-3xl font-semibold text-black">
                165 Watt 12 Volt Polycrystalline Solar Panel
              </h1>
              {/* <div class="my-4 flex items-center">
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span class="ml-3 inline-block text-xs font-semibold">
                    4 Reviews
                  </span>
                </span>
              </div> */}
              <p class="leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur rem amet repudiandae neque adipisci eum enim, natus illo
                inventore totam?
              </p>
              <div class="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                
                <div class="ml-auto flex items-center">
                  <span class="mr-3 text-sm font-semibold">Quantity</span>
                  <div class="relative">
                    <select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="title-font text-xl font-bold text-gray-900">
                  Rs. 15500
                </span>
                <button
                  type="button"
                  class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDetails;
