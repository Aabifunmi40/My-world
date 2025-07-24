import React from 'react'
import { motion } from 'framer-motion';

const languages = [
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'React',
  'Tailwind',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'GitHub',
  "Vercel"
];


const About = () => {
  return (
    <div>
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-[gold] pt-20 px-4 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Oluwafunmilayo
      </motion.h1>

      <motion.p
        className="text-xl text-black mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A frontend developer passionate about clean design and smooth experience
      </motion.p>

      <div className="overflow-hidden whitespace-nowrap w-full max-w-xl">
        <motion.div
          className="inline-block animate-scroll px-4 text-lg font-medium text-black bg-blue-500"
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
    </div>
  )
}

export default About