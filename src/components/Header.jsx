// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Mentorship", path: "/mentorship" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg"
          : "bg-black shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* <div className="h-16 w-16 bg-contain bg-no-repeat bg-center bg-[url('/logos/gold-logo.jpg')] border-2"> */}
        <img
          src="/logos/TSL LOGO 2.png"
          alt=""
          className="h-13 w-26 md:w-22 md:h-14"
        />
        {/* </div> */}

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-100 hover:text-[#B89B5E]/50 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/donation"
            className="bg-[#B89B5E] text-gray-100 px-4 py-2 rounded-md hover:bg-[#B89B5E]/50 transition"
          >
            Donate
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-gray-100 hover:text-[#B89B5E]/70 transition py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/donation"
              className="bg-[#B89B5E] text-white px-4 py-2 rounded-md text-center hover:bg-[#B89B5E]/50"
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
