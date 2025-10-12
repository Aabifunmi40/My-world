import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Services", href: "#services" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact", href: "#contact" }
];

export default function Sidebar({ handleToggle }) {
  return (
    <motion.nav
      className="md:hidden bg-gray-900 fixed top-16 left-0 w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center z-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Mobile navigation menu"
      aria-hidden={!handleToggle}
    >
      <ul className="flex flex-col items-center space-y-6">
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: link.id * 0.1 }}
          >
            <a
              href={link.href}
              className="text-2xl text-gray-200 hover:text-fuchsia-300 focus:outline-fuchsia-300 transition-colors duration-200"
              onClick={handleToggle}
              aria-label={`Navigate to ${link.text} section`}
            >
              {link.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}