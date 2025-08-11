import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  'HTML', 'CSS', 'JavaScript', 'Typescript', 'React.js', 'Tailwind',
  'Node.js', 'Express', 'MongoDB', 'Git', 'GitHub', "Vercel"
];

const About = () => {
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
        As a dedicated tutor in science, I bring a strong foundation in education and a commitment to fostering learning.
        My enthusiasm for software development has driven me to pursue full stack development, where I focus on building responsive and user-friendly web applications.
      </motion.p>

    
      <div className="overflow-hidden whitespace-nowrap w-[100%] max-w-xl">
        <motion.div
          className="inline-block text-lg px-2 py-1 rounded font-medium text-black bg-fuchsia-300 animate-scroll"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
          }}
        >
          {languages.map((lang, index) => (
            <span key={index} className="mx-4">{lang}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
