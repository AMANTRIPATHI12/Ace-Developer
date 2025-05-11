import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Make sure react-icons is installed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-900 px-4 py-3 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-violet-400 text-xl font-bold tracking-wide">
          <Link to="/">Ace Developer</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/contact" label="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-lime-400 focus:outline-none">
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-3">
          <NavLink to="/" label="Home" onClick={toggleMenu} />
          <NavLink to="/about" label="About" onClick={toggleMenu} />
          <NavLink to="/projects" label="Projects" onClick={toggleMenu} />
          <NavLink to="/contact" label="Contact" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-lime-400 border-2 border-violet-600 rounded-br-lg px-4 py-2 hover:bg-violet-600 hover:text-white transition text-center"
  >
    {label}
  </Link>
);

export default Navbar;
