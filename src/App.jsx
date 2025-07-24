import React from 'react'
import Navbar from './component/Navbar'
import Home from "../src/sections/Home"
import About from "../src/sections/About"
import Project from "../src/sections/Project"
import Contact from "../src/sections/Contact"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App