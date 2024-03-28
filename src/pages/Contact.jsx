import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  return (
    <>
      <div className=" flex flex-col">
        <div className="bg-[url('https://cdn.shopify.com/s/files/1/0637/5555/0942/files/Contact_Us_header.jpg?v=1665829726')] bg-cover bg">
          <h1 className="mb-8 text-3xl font-semibold px-10 py-32 text-white ">
            Contact Us
          </h1>
          
        </div>
        <div className="mx-20 p-8 bg-gray-100 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
