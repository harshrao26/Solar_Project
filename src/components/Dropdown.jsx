import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

function Dropdown({ buttonText, buttonColor, buttonHoverColor, menuItems }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let closeTimeout;

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Adjust delay as needed
  };

  const cancelClose = () => {
    clearTimeout(closeTimeout);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseLeave={closeDropdown}
      onMouseEnter={cancelClose}
    >
      <button
        onMouseEnter={toggleDropdown}
        className={` inline-flex gap-2 justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-white font-medium items-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ${buttonColor}`}
      >
        <h1 className="">{buttonText}</h1>
        {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isDropdownOpen && (
        <div className="absolute z-50 mt-2 w-56 origin-top-right bg-gray-800 border border-gray-700 divide-y divide-gray-700 rounded-md shadow-lg focus:outline-none transition-all duration-300">
          <div className="px-1 py-1">
            {menuItems.map((menuItem, index) => (
              <NavLink
                key={index}
                to={menuItem.to}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-all duration-300"
                onClick={closeDropdown}
              >
                {menuItem.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
