import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

function AnotherNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">Home</NavLink>

        <div className="hidden md:block relative">
          <button onClick={toggleDropdown} className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            Products
            {isDropdownOpen ? <FaCaretUp className="ml-1" /> : <FaCaretDown className="ml-1" />}
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-56 origin-top-right bg-gray-800 border border-gray-700 divide-y divide-gray-700 rounded-md shadow-lg focus:outline-none">
              <div className="px-1 py-1">
                <NavLink to="/products" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">All Products</NavLink>
                <NavLink to="/products/category1" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Category 1</NavLink>
                <NavLink to="/products/category2" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Category 2</NavLink>
              </div>
            </div>
          )}
        </div>

        <NavLink to="/about" className="text-xl font-bold">About</NavLink>
        <NavLink to="/contact" className="text-xl font-bold">Contact</NavLink>
      </div>
    </nav>
  );
}

export default AnotherNav;
