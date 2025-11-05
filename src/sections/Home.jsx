import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening"
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center text-white justify-center px-4 py-8">
      <motion.div
        className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-amber-300 mb-4">
          Welcome! I craft scalable, user-focused web applications with the MERN stack.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Alabi Oluwafunmilayo Mary</h1>
        <h2 className="mt-4 text-2xl md:text-3xl text-green-400 font-semibold">
          Fullstack Developer
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Specializing in MERN stack development, I build responsive and scalable solutions that drive impact.
        </p>
        {/* <div className="mt-6 text-4xl font-mono text-green-400 bg-gray-900 px-6 py-3 rounded-lg shadow-lg">
          <span aria-live="polite">{time.toLocaleTimeString()}</span>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-amber-300">4+</h3>
            <p className="text-sm">Projects Delivered</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-amber-300">3</h3>
            <p className="text-sm">Satisfied Clients</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-amber-300">9+</h3>
            <p className="text-sm">Months of Expertise</p>
          </motion.div>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            aria-label="Contact me to discuss a project"
            className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Let’s Collaborate
          </a>
          <a
            href="/ALABI_OLUWAFUNMILAYO.pdf"
            download
            aria-label="Download my resume"
            className="bg-amber-300 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/Alabi_Funmilayo.jpg"
          alt="Profile photo of Alabi Oluwafunmilayo, Fullstack Developer"
          className="max-w-md w-full rounded-xl shadow-lg"
          style={{ boxShadow: "0 4px 20px rgba(192, 38, 211, 0.5)" }} // Changed to fuchsia-300
        />
      </motion.div>
    </div>
  );
};

export default Home;