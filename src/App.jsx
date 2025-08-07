import React from 'react';
import Navbar from './component/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="project"><Project /></section> {/* ✅ Note: id="project" */}
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
