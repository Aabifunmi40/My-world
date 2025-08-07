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
          <h1 className="font-bold text-xl">
            Alabi <span className='text-red-400'>Oluwafunmilayo</span>
          </h1>

          <nav className="flex max-tablet:hidden space-x-6">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a> {/* ✅ matches id="project" */}
            <a href="#contact">Contact</a>
          </nav>

          <section className="hidden max-tablet:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </div>

        {toggle && <Sidebar handleToggle={handleToggle} />}
      </nav>
    </div>
  );
};

export default Navbar;
