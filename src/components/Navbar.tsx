"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Companies", href: "#companies" },
    { label: "Core Values", href: "#values" },
    { label: "Board", href: "#board" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-blue-900">BEKAL</span>
          <span className="text-sm font-light text-gray-500 ml-2">
            INTERNATIONAL HOLDING
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
