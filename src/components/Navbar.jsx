import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/gbs.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Classes", path: "/classes" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const contactInfos = [
  { icon: <FaPhoneAlt />, text: "+91 7205837919" },
  { icon: <FaEnvelope />, text: "globalbrillantschool@gmail.com" },
  { icon: <FaMapMarkerAlt />, text: "Pattamundai" },
];

const socialLinks = [
  { icon: <FaFacebookF />, link: "https://facebook.com" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      {/* Top Info Bar */}
      <div className="hidden sm:block bg-[#277055] text-white text-xs sm:text-sm px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            {contactInfos.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="opacity-70">{c.icon}</span>
                <span className="ml-1">{c.text}</span>
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="hover:text-[#FFC857] transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 select-none">
          {/* Logo Image */}
          <img
            src={logo}
            alt="Global Brilliant School Logo"
            className="h-20 w-20 object-contain"
          />
          {/* Brand Text */}
          <div className="items-center gap-1 text-2xl font-bold tracking-tight hidden sm:block">
            <span className="text-[#277055]">Global</span>
            <span className="text-[#FFC857]">Brilliant</span>
            <span className="text-gray-800">School</span>
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.name}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-colors font-semibold ${
                  isActive
                    ? "bg-[#277055] text-white shadow-lg"
                    : "hover:bg-[#FFC857] hover:text-[#277055] text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle Menu"
            className="text-[#277055] text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#F6FAF8] shadow-xl px-4 py-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full font-semibold ${
                    isActive
                      ? "bg-[#277055] text-white shadow"
                      : "hover:bg-[#FFC857] hover:text-[#277055] text-gray-700"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
