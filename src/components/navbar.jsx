import React, { useState } from "react";

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-900 px-6 h-15 flex flex-wrap justify-between items-center shadow-md ">
      {/* Logo */}
      <div className="flex items-center bg-white rounded-md shadow-md p-2 relative left-10 drop-shadow-xl">
        <h1 >PDF KEYWORD HIGHLIGHTER</h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden">
        <button type="button" className="block text-gray-200 hover:text-white focus:text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="hidden md:flex md:justify-between md:w-auto w-full md:items-center relative right-20 gap-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          {/* Courses */}
          <a href="#" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            About Us
          </a>

          {/* Profile */}
          <a href="#" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            Profile
          </a>
        </div>
  </div>
</nav>
);
}

export default Nav;





