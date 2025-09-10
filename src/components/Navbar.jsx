import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Make sure react-icons is installed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gray-900 px-4 py-3 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-violet-400 text-xl font-bold tracking-wide">
          <Link to="/" onClick={closeMenu}>Ace Developer</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/projects" label="Projects" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-lime-400 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 flex flex-col items-start px-4">
          <NavLink to="/" label="Home" onClick={closeMenu} />
          <NavLink to="/about" label="About" onClick={closeMenu} />
          <NavLink to="/projects" label="Projects" onClick={closeMenu} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-lime-400 border-2 border-violet-600 rounded-br-lg px-4 py-2 hover:bg-violet-600 hover:text-white transition text-center w-full"
  >
    {label}
  </Link>
);

export default Navbar;
