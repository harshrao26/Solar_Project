import React from "react";

function Service() {
  return (
    <>
      <div class="w-full">
        <div class="relative w-full bg-white">
          <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div class="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              <div class="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
                <div class="rounded-full bg-white p-1 px-2">
                  <p class="text-sm font-medium">We&#x27; hiring</p>
                </div>
                <p class="text-sm font-medium">Join our team →</p>
              </div>
              <h1 class="mt-8 text-3xl font-bold tracking-tight text-[#0B72BF] md:text-4xl lg:text-6xl">
                People who care about your growth
              </h1>
              <p class="mt-8 text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur modi blanditiis dolores quasi eaque explicabo!
              </p>
              <form action="" class="mt-8 flex items-start space-x-2">
                <div>
                  <input
                    class="flex w-full rounded-md border border-[#0B72BF]/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                  />
                  <p class="mt-2 text-sm text-gray-500">
                    We care about your privacy
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="rounded-md bg-[#0B72BF] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0B72BF]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div class="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
              <img
                class="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        
        <section class="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
          <div>
            <div class="mx-auto max-w-2xl lg:text-center">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, assumenda
              </p>
            </div>
            <div class="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
              <div class="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                >
                  <span class="flex text-lg font-semibold text-black">
                    How do I get started?
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-gray-500"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
                <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p class="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat aliquam adipisci iusto aperiam? Sint asperiores
                    sequi nobis inventore ratione deleniti?
                  </p>
                </div>
              </div>
              <div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
                <button
                  type="button"
                  class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                >
                  <span class="flex text-start text-lg font-semibold text-black">
                  Lorem ipsum dolor sit amet consectetur.
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="hidden h-5 w-5 text-gray-500 md:block"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
                <button
                  type="button"
                  class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                >
                  <span class="flex text-start text-lg font-semibold text-black">
                  Lorem ipsum dolor sit amet consectetur.
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="hidden h-5 w-5 text-gray-500 md:block"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <p class="textbase mt-6 text-center text-gray-600">
              Can&#x27;t find what you&#x27;re looking for?{" "}
              <a
                href="#"
                title=""
                class="font-semibold text-black hover:underline"
              >
                Contact our support
              </a>
            </p>
          </div>
        </section>
        <div class="mx-auto my-12 max-w-7xl md:my-24 lg:my-32">
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div class="px-4 py-10 lg:col-span-5 lg:px-0">
              <span class="mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold">
                Pricing that fits your budget
              </span>
              <h1 class="text-3xl font-bold md:text-5xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p class="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam magni, rem sed sint neque doloribus saepe veniam
                minima quaerat minus.
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
