import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="shadow-md py-4 h-full w-full">
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between ">
       
        <div className="flex items-center space-x-4 relative">
          <Link to="/" className="text-lg font-semibold text-gray-700 no-underline">
            MyWebsite
          </Link>
          <button onClick={toggleDropdown} className="text-gray-700 font-medium focus:outline-none">
            Important Websites
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <Link to="/site1" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Site 1</Link>
              <Link to="/site2" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Site 2</Link>
              <Link to="/site3" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Site 3</Link>
            </div>
          )}
          <Link to="/login" className="text-gray-700 font-medium no-underline hover:text-gray-900">
            Login
          </Link>
          <Link to="/signup" className="text-gray-700 font-medium no-underline hover:text-gray-900">
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;