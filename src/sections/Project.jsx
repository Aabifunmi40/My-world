import React from "react";
import { motion } from "framer-motion";
import quiz from "../../src/assets/quiz.png";
import todo from "../../src/assets/todo.png";
import movieImg from "../../src/assets/Movie.png";
import zyra from "../../src/assets/zyra hr.png";

const projects = [
  {
    id: 1,
    title: "Quiz Platform",
    description: "A responsive quiz app built with React and JavaScript, featuring a timer, scoring, and category selection for engaging user experiences.",
    img: quiz,
    href: "https://aabifunmi40.github.io/quiz/"
  },
  {
    id: 2,
    title: "Movie Finder",
    description: "A React app with TMDB API integration, enabling users to search movies, view details, and save favorites seamlessly.",
    img: movieImg,
    href: "https://frontendmovie-murex.vercel.app/"
  },
  {
    id: 3,
    title: "Todo List App",
    description: "A MERN stack app with JWT authentication, CRUD functionality, and protected routes for secure task management.",
    img: todo,
    href: "https://todo-app-demo.vercel.app" // Update with actual link
  },
  {
    id: 4,
    title: "Zyra HR",
    description: "A MERN stack HR system with employee management, attendance tracking, payroll automation, and secure authentication for efficient HR processes.",
    img: zyra,
    href: "https://zyrahr.netlify.app"
  }
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="text-lg text-gray-200 max-w-3xl mx-auto text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Discover my MERN stack projects, crafted to deliver scalable, user-focused solutions for real-world challenges.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {projects.map((p) => (
          <motion.article
            key={p.id}
            className="group block rounded-2xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-fuchsia-300/50 transition-shadow duration-200 bg-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: p.id * 0.2 }}
            aria-label={`Project: ${p.title}`}
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={p.img}
                alt={`Screenshot of ${p.title} project`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <a
                href={p.href}
                className="inline-block px-4 py-2 text-sm font-medium text-black bg-fuchsia-300 rounded-lg hover:bg-fuchsia-400 focus:outline-fuchsia-300 transition-colors duration-200"
                aria-label={`View ${p.title} live demo`}
              >
                View Project
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}