import React from 'react'
import { Link } from 'react-scroll'


const Sidebar = ({handleToggle}) => {
  return (
    <div
        className=" bg-[#f2f7f8] min-h-[80vh] fixed w-full flex items-center justify-center"
    >
      <div className=" flex flex-col items-center  gap-5 ">
        <Link onClick={handleToggle} to="/home">
          {" "}
        <nav>Home</nav>
        </Link>
        <Link onClick={handleToggle} to="/about">
          {" "}
          <nav>About</nav>
        </Link>
        
        <Link onClick={handleToggle} to="/contact">
          {" "}
          <nav>Contact</nav>
        </Link>
        <Link onClick={handleToggle} to="/project">
          {" "}
          <nav>Project</nav>
        </Link>
        
        
        </div>
     
    </div>
  )
}

export default Sidebar