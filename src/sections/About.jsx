import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js",     icon: "⚛️" },
  { name: "Node.js",      icon: "🟢" },
  { name: "Express.js",   icon: "🚂" },
  { name: "MongoDB",      icon: "🍃" },
  { name: "TypeScript",   icon: "🔷" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "JavaScript",   icon: "⚡" },
  { name: "HTML & CSS",   icon: "🌐" },
  { name: "Git & GitHub", icon: "🗂️" },
  { name: "Vercel",       icon: "▲" },
  { name: "Cloudinary",   icon: "☁️" },
  { name: "REST APIs",    icon: "🔗" },
];

const journey = [
  { year: "2017–2025", role: "Science Teacher", place: "Omotayo Schools",         icon: "🔬" },
  { year: "2024",      role: "Started Coding",  place: "Self-taught · Bootcamp",  icon: "💻" },
  { year: "2025",      role: "Graduate Trainee",place: "SAIL Innovation Lab",     icon: "🚀" },
  { year: "2025",      role: "Shipped 4+ Apps", place: "Freelance · Live in prod",icon: "🏆" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

export default function About() {
  return (
    <section
      id="about"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative min-h-screen bg-[#0D1B2A] text-white px-6 md:px-16 py-24 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      {/* Ambient blob */}
      <div
        className="pointer-events-none absolute rounded-full opacity-[0.08]"
        style={{
          width: 480, height: 480,
          background: "#C8960C",
          filter: "blur(100px)",
          top: -100, left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Section label ── */}
        <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[3px] uppercase text-[#C8960C] mb-3">
          Get to know me
        </motion.p>

        {/* ── Heading ── */}
        <motion.h2
          {...fadeUp(0.1)}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl font-black text-white mb-16"
        >
          About <span className="italic text-[#C8960C]">Me</span>
        </motion.h2>

        {/* ══ TOP GRID: bio + timeline ══ */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Bio */}
          <div>
            <motion.p {...fadeUp(0.15)} className="text-base md:text-lg leading-relaxed text-white/60 mb-6">
              I spent eight years as a science teacher — breaking down complex ideas into clear, 
              digestible lessons. That same instinct now drives how I build software: thoughtfully, 
              with the end user always in mind.
            </motion.p>
            <motion.p {...fadeUp(0.25)} className="text-base md:text-lg leading-relaxed text-white/60 mb-6">
              Within six months of transitioning into tech, I independently designed and shipped 
              production-grade applications — including a{" "}
              <a href="#projects" className="text-[#C8960C] hover:underline font-medium">
                full church digital ecosystem
              </a>{" "}
              with AI features, SMS/email integrations, and a real-time admin dashboard serving 
              an active congregation.
            </motion.p>
            <motion.p {...fadeUp(0.35)} className="text-base md:text-lg leading-relaxed text-white/60">
              I also teach frontend development to learners aged 6–16, which keeps me sharp, 
              humble, and always looking for better ways to explain things.
            </motion.p>

            {/* Mini CTA */}
            <motion.div {...fadeUp(0.45)} className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#C8960C] hover:bg-[#E5AE18] text-[#0D1B2A] font-bold px-7 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-[#C8960C]/20"
              >
                Let's Work Together →
              </a>
            </motion.div>
          </div>

          {/* Journey timeline */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[2px] uppercase text-white/30 mb-2">
              My Journey
            </p>
            {journey.map((j, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-5 py-4 hover:border-[#C8960C]/30 transition-colors duration-300"
              >
                <span className="text-2xl mt-0.5 flex-shrink-0">{j.icon}</span>
                <div>
                  <p className="text-xs text-[#C8960C] font-semibold tracking-widest uppercase mb-1">{j.year}</p>
                  <p className="font-semibold text-white text-sm">{j.role}</p>
                  <p className="text-xs text-white/40 mt-0.5">{j.place}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ══ SKILLS ══ */}
        <motion.div {...fadeUp(0.2)}>
          <p className="text-xs font-semibold tracking-[3px] uppercase text-white/30 mb-6">
            Tech Stack
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "rgba(200,150,12,0.6)" }}
                className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 cursor-default transition-colors duration-200"
              >
                <span className="text-lg">{s.icon}</span>
                <span className="text-sm font-medium text-white/80">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ BOTTOM CALLOUT ══ */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-20 rounded-2xl border border-[#C8960C]/20 bg-[#C8960C]/[0.04] px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-xl md:text-2xl font-bold text-white mb-1"
            >
              Ready to build something great?
            </p>
            <p className="text-sm text-white/45">
              Open to freelance projects, collaborations, and full-time roles.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#C8960C] text-[#C8960C] hover:bg-[#C8960C] hover:text-[#0D1B2A] font-bold px-7 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-1 whitespace-nowrap"
          >
            Get in Touch →
          </a>
        </motion.div>

      </div>
    </section>
  );
}