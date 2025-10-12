import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const navLinks = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Services", href: "#services" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg shadow-fuchsia-300/20 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="#home" aria-label="FunmiDev Portfolio Home">
            Funmi<span className="text-fuchsia-300">Dev</span>
          </a>
        </motion.h1>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              className="text-lg text-gray-200 hover:text-fuchsia-300 focus:outline-fuchsia-300 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Navigate to ${link.text} section`}
            >
              {link.text}
            </motion.a>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-fuchsia-300 focus:outline-fuchsia-300"
          onClick={handleToggle}
          aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={toggle}
        >
          {toggle ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
      </div>
      {toggle && (
        <motion.div
          className="md:hidden bg-gray-900 fixed top-16 left-0 w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center space-y-6 z-40"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              className="text-2xl text-gray-200 hover:text-fuchsia-300 focus:outline-fuchsia-300 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggle}
              aria-label={`Navigate to ${link.text} section`}
            >
              {link.text}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}