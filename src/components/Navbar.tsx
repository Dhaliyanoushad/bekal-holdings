"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Companies", href: "#companies" },
    { label: "Core Values", href: "#values" },
    { label: "Board", href: "#board" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 h-20 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#004237]"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="flex items-center -ml-2 cursor-pointer"
        >
          <div className="flex flex-col items-end">
            <span
              className="text-[#faf6ee] uppercase"
              style={{
                fontSize: "2.8rem",
                lineHeight: "0.85",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Black", sans-serif',
              }}
            >
              BEKAL
            </span>
            <span
              className="text-[#faf6ee]"
              style={{
                fontSize: "0.65rem",
                lineHeight: "1",
                marginTop: "0.15rem",
                fontWeight: 600,
                fontFamily: "Arial, Helvetica, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Holding
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <a
                href={link.href}
                className="relative px-1 py-1 text-[#f0e8db] hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-px bg-[#faf6ee] origin-left transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ backgroundColor: "#00382c" }}
            transition={{ duration: 0.2 }}
            className="ml-6 px-5 py-2 bg-[#005c4d] text-[#faf6ee] rounded-sm text-sm font-medium border border-[#005c4d]"
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Menu Trigger */}
        <motion.div whileTap={{ scale: 0.95 }} className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#faf6ee] hover:opacity-80 transition-colors p-1"
          >
            {isMenuOpen ? (
              <X size={26} className="stroke-[1.5]" />
            ) : (
              <Menu size={26} className="stroke-[1.5]" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f2e29] overflow-hidden"
          >
            <div className="px-4 pb-6 pt-2 border-t border-[#005c4d]/30">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-2 text-[#f0e8db] hover:text-white border-b border-[#005c4d]/20 last:border-0 transition-colors text-sm font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: links.length * 0.05 }}
                className="mt-4 w-full px-4 py-3 bg-[#005c4d] hover:bg-[#004237] text-[#faf6ee] rounded-sm text-sm font-medium transition-colors"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
