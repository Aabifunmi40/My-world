import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-bold text-xl">
            My<span className='text-red-400'>Portfolio</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="flex max-tablet:hidden space-x-6">
            <a href="#home" className="hover:text-red-400">Home</a>
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#services" className="hover:text-red-400">Services</a> {/* NEW */}
            <a href="#project" className="hover:text-red-400">Projects</a>
            <a href="#contact" className="hover:text-red-400">Contact</a>
          </nav>

          {/* Mobile Hamburger */}
          <section className="hidden max-tablet:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </div>

        {/* Sidebar for Mobile */}
        {toggle && <Sidebar handleToggle={handleToggle} />}
      </nav>
    </div>
  );
};

export default Navbar;
