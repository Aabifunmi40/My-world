import React from "react";
import tip from "../../src/assets/tipcalculator.png"
import quiz from "../../src/assets/quiz.png"

const projects = [
  {
    id: 1,
    title: "Quiz Platform",
    description: "A responsive quiz app built with JavaScript — timer, scoring and categories.",
    img: quiz,
    href: " https://aabifunmi40.github.io/quiz/"
  },
  {
    id: 2,
    title: "Movie Finder",
    description: "Search movies, view details and save favorites (TMDB integration).",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    href: "https://aabifunmi40.github.io/tip-calculator/"
  },
  {
    id: 3,
    title: "tip calculator",
    description: "Real-time chat built with Socket.io and a Node/Express backend.",
    img: tip,
    href: "https://aabifunmi40.github.io/tip-calculator/"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, blog and contact form.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    href: "https://my-world-beige.vercel.app/"
  }
];

export default function ProjectCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">My Projects</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group block rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800">

            <div className="h-56 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>
              <a
                href={p.href}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Project
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
