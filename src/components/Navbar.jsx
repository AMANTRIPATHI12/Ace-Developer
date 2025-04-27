import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <nav className="bg-gray-900 p-2 flex justify-between items-center shadow-md sticky w-full">
  <div className="flex space-x-4">
    <Link
      to="/"
      className="text-lime-400 border-2 border-violet-600 rounded-br-lg px-4 py-2 hover:bg-violet-600 hover:text-white transition"
    >
      Home
    </Link>
    <Link
      to="/about"
      className="text-lime-400 border-2 border-violet-600 rounded-br-lg px-4 py-2 hover:bg-violet-600 hover:text-white transition"
    >
      About
    </Link>
    <Link
      to="/projects"
      className="text-lime-400 border-2 border-violet-600 rounded-br-lg px-4 py-2 hover:bg-violet-600 hover:text-white transition"
    >
      Projects
    </Link>
    <Link
      to="/contact"
      className="text-lime-400 border-2 border-violet-600 rounded-br-lg px-4 py-2 hover:bg-violet-600 hover:text-white transition"
    >
      Contact
    </Link>
  </div>

  <div className="text-violet-400 text-xl font-bold tracking-wide">
    <Link to="/">Ace Developer</Link>
  </div>
</nav>
  );
};

export default Navbar;