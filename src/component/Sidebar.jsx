import React from 'react';

const Sidebar = ({ handleToggle }) => {
  return (
    <div
      className="bg-white min-h-[50vh] 
      fixed w-40 flex items-center justify-center cursor-pointer z-50 shadow-md"
    >
      <ul className="flex flex-col p-6 space-y-4 text-black font-medium">
        <li>
          <a href="#home" onClick={handleToggle} className="hover:text-red-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleToggle} className="hover:text-red-400">
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleToggle} className="hover:text-red-400">
            Services
          </a>
        </li>
        <li>
          <a href="#project" onClick={handleToggle} className="hover:text-red-400">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleToggle} className="hover:text-red-400">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
