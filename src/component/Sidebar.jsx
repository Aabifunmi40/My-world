import React from 'react';

const Sidebar = ({ handleToggle }) => {
  return (
    <div className="bg-white min-h-[50vh] 
     fixed w-20 flex items-center justify-center cursor-pointer z-50
     ">
      <ul className="flex flex-col p-6 space-y-4">
        <li><a href="#home" onClick={handleToggle}>Home</a></li>
        <li><a href="#about" onClick={handleToggle}>About</a></li>
        <li><a href="#project" onClick={handleToggle}>Project</a></li> {/* ✅ matches App.jsx */}
        <li><a href="#contact" onClick={handleToggle}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
