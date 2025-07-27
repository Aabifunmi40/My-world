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
  const skills = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Git', 'GitHub'];
  return (
    <div>
      
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-300 pt-20 px-4 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto p-4">
        <section id="about" className="mt-8">
          <h2 className="text-2xl font-bold">About me</h2>
          <p className="mt-2">As a dedicated tutor in science, I bring a strong foundation in education and a commitment to fostering learning. My enthusiasm for software development has driven me to pursue frontend development, where I focus on building responsive and user-friendly web
             applications using React.js, Tailwind CSS, HTML, CSS, and JavaScript..</p>
          
         
        </section>
    </div>
      
      </motion.h1>

      <motion.p
        className="text-xl text-black mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        
      </motion.p>

      <div className="overflow-hidden whitespace-nowrap w-full max-w-xl">
        <motion.div
          className="inline-block animate-scroll text-lg  px-2 py-1 rounded font-medium text-black bg-[gold]"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
          }}
        >
          {languages.map((lang, index) => (
            <span key={index} className="mx-4 ">{lang}</span>
          ))}
        </motion.div>
      </div>
    </section>
    
    </div>
  )
}

export default About