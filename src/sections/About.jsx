import React from "react";
import { motion } from "framer-motion";

const languages = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind",
  "Node.js", "Express", "MongoDB", "Git", "GitHub", "Vercel"
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-4 py-20 text-center flex flex-col justify-center items-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        As a dedicated science tutor, I honed my ability to explain complex concepts clearly, fostering student success. My passion for technology led me to software development, where I now specialize in building full-stack MERN applications. I thrive on creating responsive, user-friendly, and scalable web solutions that address real-world challenges. My tutoring background fuels my knack for collaboration and adaptability, ensuring I deliver creative solutions to every project.
      </motion.p>

      <motion.p
        className="text-lg max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        One of my proudest achievements is developing a task management MERN app deployed on Vercel, streamlining workflows for a team of 10+ users. Check out my <a href="#project" className="text-fuchsia-300 hover:underline">projects</a> to see it in action!
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="bg-fuchsia-300 text-black p-3 rounded-lg text-center font-medium"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", boxShadow: "0 4px 10px rgba(192, 38, 211, 0.5)" }}
            transition={{ duration: 0.3 }}
            aria-label={`Skill: ${lang}`}
          >
            {lang}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-lg mb-4">Interested in collaborating? Let’s create something amazing together!</p>
        <a
          href="#contact"
          aria-label="Contact me to discuss a project"
          className="px-6 py-3 bg-fuchsia-300 text-black rounded-lg font-semibold hover:bg-fuchsia-400 focus:outline-fuchsia-300 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}