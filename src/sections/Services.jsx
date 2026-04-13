import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🏗️",
    title: "Full-Stack Web Apps",
    desc: "End-to-end MERN stack development — from database design to deployed product. I handle the full build so you don't have to juggle multiple developers.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    icon: "🎨",
    title: "Responsive UI Design",
    desc: "Pixel-perfect, mobile-first interfaces built with React and Tailwind CSS. Fast, accessible, and polished on every screen size.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: "🔌",
    title: "API & Third-Party Integrations",
    desc: "Connecting your app to the services that power it — payments, SMS, email, AI, maps, and more. I've integrated Termii, Resend, Cloudinary, YouTube, and the Anthropic SDK in live production apps.",
    tags: ["REST APIs", "Termii", "Resend", "Cloudinary"],
  },
  {
    icon: "🔐",
    title: "Auth & Access Control",
    desc: "Secure, role-based authentication flows — JWT, session management, Super Admin approval systems, and permission layers that scale with your user base.",
    tags: ["JWT", "RBAC", "Node.js", "bcrypt"],
  },
  {
    icon: "🤖",
    title: "AI Feature Integration",
    desc: "Adding intelligent, AI-powered features to existing platforms using the Anthropic SDK — chatbots, content generators, summarisers, and smart assistants.",
    tags: ["Anthropic SDK", "Node.js", "Prompt Engineering"],
  },
  {
    icon: "📊",
    title: "Dashboards & Data Views",
    desc: "Admin dashboards with real-time data, charts, audit trails, and management tools. Built for the people running the show, not just the end users.",
    tags: ["React", "Charts", "MongoDB", "Real-time"],
  },
  {
    icon: "👩‍🏫",
    title: "Frontend Dev Tutoring",
    desc: "One-on-one or group sessions — physical or online — covering HTML, CSS, JavaScript, and React from zero to job-ready. Eight years of teaching experience behind every lesson.",
    tags: ["HTML/CSS", "JavaScript", "React", "Ages 6–adult"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function Services() {
  return (
    <section
      id="services"
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
          bottom: -80, right: -80,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[3px] uppercase text-[#C8960C] mb-3">
          What I offer
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            {...fadeUp(0.1)}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            How I Can <span className="italic text-[#C8960C]">Help You</span>
          </motion.h2>

          <motion.a
            {...fadeUp(0.2)}
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C8960C] hover:bg-[#E5AE18] text-[#0D1B2A] font-bold px-7 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-[#C8960C]/20 w-fit"
          >
            Start a Project →
          </motion.a>
        </div>

        {/* ── Service cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 + 0.1, duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -5, borderColor: "rgba(200,150,12,0.45)" }}
              className="group flex flex-col gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 cursor-default transition-colors duration-300"
            >
              {/* Icon */}
              <span className="text-3xl">{s.icon}</span>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg font-bold text-white group-hover:text-[#C8960C] transition-colors duration-300"
              >
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/50 flex-1">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/[0.06]">
                {s.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-[11px] font-semibold tracking-wide text-[#C8960C]/70 bg-[#C8960C]/08 border border-[#C8960C]/15 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom callout ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-16 rounded-2xl border border-[#C8960C]/20 bg-[#C8960C]/[0.04] px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-xl md:text-2xl font-bold text-white mb-1"
            >
              Not sure what you need?
            </p>
            <p className="text-sm text-white/40">
              Send me a message and we'll figure it out together.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#C8960C] text-[#C8960C] hover:bg-[#C8960C] hover:text-[#0D1B2A] font-bold px-7 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-1 whitespace-nowrap"
          >
            Let's Talk →
          </a>
        </motion.div>

      </div>
    </section>
  );
}