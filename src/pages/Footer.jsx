import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { VscDebugDisconnect } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="bg-zinc-800">
        <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 py-10 text-white">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              className="mb-5"
              src="https://bluebirdsolar.com/s/files/1/0637/5555/0942/files/BBS-Logo-1_small@2x.png?v=1681546274"
              alt="image"
            />
            <p className="flex text-sm md:text-base leading-tight items-center mb-5">
              <span className="mr-2">
                <FaLocationDot />
              </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae!
            </p>
            <p className="flex text-sm md:text-base leading-tight items-center mb-5">
              <span className="mr-2">
                <VscDebugDisconnect />
              </span>
              info@example.com <br /> +91-123456789
            </p>
            <div className="text-xl leading-tight mb-5">
              <h5>Follow Us On</h5>
              <div className="flex gap-4 mt-2">
                <Link to="/">
                  <FaFacebook />
                </Link>
                <Link to="/">
                  <BsInstagram />
                </Link>
                <Link to="/">
                  <FaLinkedin />
                </Link>
                <Link to="/">
                  <IoLogoWhatsapp />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3">
                <h1 className="font-semibold mb-3">Company {index + 1}</h1>
                <ul className="text-sm md:text-base">
                  <li>About Us</li>
                  <li>Infrastructure & Manufacturing </li>
                  <li>Presence & Network</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-zinc-500"></div>
        <div className="text-white font-normal py-5 mx-4 md:mx-10 text-sm md:text-base">
          © 2024 ABC | All Rights Reserved | T&C | Privacy Policy |
          Cancellation Policy | Return Policy | Shipping Policy
        </div>
      </div>
    </>
  );
}

export default Footer;
