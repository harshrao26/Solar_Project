import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "../components/Dropdown";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#0B72BF] text-white px-4 md:px-20 py-4 z-50 sticky  top-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="">
          Logo
        </NavLink>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes
              className="text-white cursor-pointer"
              size={24}
              onClick={toggleMobileMenu}
            />
          ) : (
            <FaBars
              className="text-white cursor-pointer"
              size={24}
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-10 text-[1.3vw] items-center">
          <Dropdown
            buttonText="Products"
            buttonColor="bg-[#0B72BF]"
            buttonHoverColor="hover:bg-gray-200"
            menuItems={[
              { to: "/products", label: "All Products" },
              { to: "/products/category1", label: "Category 1" },
              { to: "/products/category2", label: "Category 2" },
            ]}
          />
          <NavLink to="/service">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/whoweare">Who We Are?</NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white text-black w-full fixed top-14 left-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto inl">
            <div className="inline-block">
              <Dropdown
                buttonText="Products"
                buttonColor="bg-[#0B72BF]"
                buttonHoverColor="hover:bg-gray-200"
                menuItems={[
                  { to: "/products", label: "All Products" },
                  { to: "/products/category1", label: "Category 1" },
                  { to: "/products/category2", label: "Category 2" },
                ]}
              />
            </div>
            <NavLink
              to="/service"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/whoweare"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
              Who We Are?
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
