import React from 'react'
import { Link } from 'react-scroll'




const Sidebar = ({handleToggle}) => {
  return (
    <div
        className=" bg-fuchsia-500 min-h-[40vh] fixed w-20 flex items-center justify-center cursor-pointer"
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
        
        <Link onClick={handleToggle} to="/projects">
          {" "}
          <nav>Projects</nav>
        </Link>
        <Link onClick={handleToggle} to="/Contact">
          {" "}
          <nav>contact</nav>
        </Link>
        
        
        </div>
     
    </div>
  )
}

export default Sidebar