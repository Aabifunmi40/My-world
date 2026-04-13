import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quiz from "../../src/assets/quiz.png";
import todo from "../../src/assets/todo.png";
import movieImg from "../../src/assets/movie.png";
import zyra from "../../src/assets/zyra hr.png";

const projects = [
  {
    id: 1,
    category: "Full-Stack · Solo",
    title: "RCCG Lords Heritage",
    description:
      "A complete church digital ecosystem — public website with scroll animations, YouTube sermon integration, prayer wall, and a full admin dashboard with role-based access control, member management, usher attendance tracking with charts, counselling booking, broadcast messaging, and AI-powered features via the Anthropic SDK.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Anthropic SDK", "Termii"],
    href: "https://rccglordsheritage.org",
    featured: true,
  },
  {
    id: 2,
    category: "Full-Stack · Group",
    title: "ZyraHR",
    description:
      "Mobile-first HR management system with GPS-geofenced attendance using the Haversine formula, onboarding, payroll automation, and JWT-secured role-based access control.",
    img: zyra,
    tags: ["MERN", "JWT", "Geofencing", "Netlify"],
    href: "https://zyrahr.netlify.app",
    featured: true,
  },
  {
    id: 3,
    category: "Full-Stack · Solo",
    title: "Todo List App",
    description:
      "MERN stack task manager with JWT authentication, protected routes, and full CRUD functionality for secure personal task management.",
    img: todo,
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    href: "https://fullstack-todo-app-me1d.vercel.app/",
  },
  {
    id: 4,
    category: "Frontend · Solo",
    title: "Movie Finder",
    description:
      "React app with TMDB API integration — search movies, view full details, and save favourites. Clean UI with dynamic data fetching.",
    img: movieImg,
    tags: ["React", "TMDB API", "Vercel"],
    href: "https://frontendmovie-murex.vercel.app/",
  },
  {
    id: 5,
    category: "Frontend · Solo",
    title: "Quiz Platform",
    description:
      "Responsive quiz app with timer, real-time scoring, category selection, and a leaderboard — built in React and JavaScript.",
    img: quiz,
    tags: ["React", "JavaScript", "GitHub Pages"],
    href: "https://aabifunmi40.github.io/quiz/",
  },
];

const filters = ["All", "Full-Stack", "Frontend"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter((p) =>
    active === "All" ? true : p.category.includes(active)
  );

  return (
    <section
      id="projects"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative min-h-screen bg-[#0D1B2A] text-white px-6 md:px-16 py-24 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      {/* Ambient blob */}
      <div
        className="pointer-events-none absolute rounded-full opacity-[0.07]"
        style={{
          width: 500, height: 500,
          background: "#C8960C",
          filter: "blur(110px)",
          top: -60, right: -60,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[3px] uppercase text-[#C8960C] mb-3">
          My Work
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.h2
            {...fadeUp(0.1)}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Selected <span className="italic text-[#C8960C]">Projects</span>
          </motion.h2>

          {/* Filter pills */}
          <motion.div {...fadeUp(0.2)} className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs font-semibold tracking-wide px-5 py-2 rounded-full border transition-all duration-200 ${
                  active === f
                    ? "bg-[#C8960C] border-[#C8960C] text-[#0D1B2A]"
                    : "border-white/15 text-white/50 hover:border-[#C8960C]/50 hover:text-[#C8960C]"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {filtered.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5, borderColor: "rgba(200,150,12,0.45)" }}
                style={{
                  textDecoration: "none",
                  gridColumn: p.featured && i === 0 && filtered.length > 1 ? "1 / -1" : undefined,
                }}
                className="group flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden transition-colors duration-300"
              >
                {/* Image — only shown if project has one */}
                {p.img ? (
                  <div className="h-48 w-full overflow-hidden flex-shrink-0">
                    <img
                      src={p.img}
                      alt={`${p.title} screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  /* Featured card without image — decorative placeholder */
                  <div
                    className="h-32 w-full flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(200,150,12,0.12) 0%, rgba(27,108,242,0.08) 100%)",
                      borderBottom: "1px solid rgba(200,150,12,0.12)",
                    }}
                  >
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-2xl font-black italic text-[#C8960C]/40 tracking-tight select-none"
                    >
                      rccglordsheritage.org
                    </span>
                  </div>
                )}

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  {/* Category */}
                  <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#C8960C]/70">
                    {p.category}
                  </span>

                  {/* Title + arrow */}
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-xl font-bold text-white group-hover:text-[#C8960C] transition-colors duration-300"
                    >
                      {p.title}
                    </h3>
                    <span className="text-white/20 group-hover:text-[#C8960C] transition-colors text-lg flex-shrink-0 mt-0.5">
                      ↗
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/45 flex-1">{p.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06] mt-auto">
                    {p.tags.map((t, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-semibold text-[#C8960C]/65 bg-[#C8960C]/[0.07] border border-[#C8960C]/15 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom callout ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-16 rounded-2xl border border-[#C8960C]/20 bg-[#C8960C]/[0.04] px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-xl md:text-2xl font-bold text-white mb-1"
            >
              Want to see the code?
            </p>
            <p className="text-sm text-white/40">
              More projects and experiments live on my GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Aabifunmi40"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#C8960C] text-[#C8960C] hover:bg-[#C8960C] hover:text-[#0D1B2A] font-bold px-7 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-1 whitespace-nowrap"
          >
            View GitHub ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
}