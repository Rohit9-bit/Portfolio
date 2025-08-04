import React from "react";
import {Link} from "react-scroll";
const Navbar = () => {
  const navItems = ["about", "samples", "skills", "connect"];

  return (
    <nav
      className="flex items-center justify-between pt-3 md:pt-5 px-3 sm:px-5 md:px-6 lg:px-8"
    >
      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
      </div>
      <div className="hidden md:flex items-center space-x-5 sm:space-x-8 md:space-x-12 lg:space-x-18">
        {navItems.map((item, index) => (
          <Link
            to={`${item}`}
            offset={0}
            duration={1000}
            smooth
            key={index}
            className="text-black font-medium text-sm md:text-base lg:text-lg hover:text-purple-600 transition duration-300 uppercase cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
