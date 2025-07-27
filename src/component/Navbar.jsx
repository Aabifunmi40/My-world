import React from 'react'
import { Link } from 'react-scroll'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import Sidebar from "./Sidebar"


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };



  return (
    <div className=' '>

       <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between  items-center ">
           <h1 className="font-bold text-xl">Alabi Oluwafunmilayo</h1>
            <div className="flex max-tablet:hidden space-x-6  ">
          <nav><Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-500">Home</Link></nav>
          <nav><Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-500">About</Link></nav>
          <nav><Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-500">Projects</Link></nav>
          <nav><Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link></nav>
          </div>
          <section className=" hidden max-tablet:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </div>
         <div>{toggle && <Sidebar handleToggle={handleToggle} />}</div>
       
    
       </nav>
         
    </div>
  )
}

export default Navbar