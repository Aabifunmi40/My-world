import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
  { val: "4+",  label: "Projects Shipped" },
  { val: "6mo", label: "Time to Production" },
  { val: "50+", label: "Students Taught" },
];

const skills = [
  "React.js", "Node.js", "Express.js", "MongoDB",
  "TypeScript", "Tailwind CSS", "Framer Motion", "REST APIs",
  "Anthropic SDK", "Cloudinary", "JWT Auth", "Termii SMS",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const Home = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening"
    );
  }, []);

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative min-h-screen bg-[#0D1B2A] text-white overflow-hidden flex flex-col"
    >
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blobPulse {
          0%,100% { transform: scale(1) translate(0,0); }
          50%      { transform: scale(1.08) translate(12px,-16px); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: inline-flex;
          animation: ticker 24s linear infinite;
          white-space: nowrap;
        }
        .ticker-track:hover { animation-play-state: paused; }
        .spin-ring { animation: spinRing 20s linear infinite; }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div
        className="pointer-events-none absolute rounded-full opacity-[0.12]"
        style={{
          width: 520, height: 520,
          background: "#C8960C",
          filter: "blur(90px)",
          top: -140, right: "8%",
          animation: "blobPulse 9s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full opacity-[0.09]"
        style={{
          width: 360, height: 360,
          background: "#1B6CF2",
          filter: "blur(80px)",
          bottom: 80, left: "4%",
          animation: "blobPulse 13s ease-in-out infinite reverse",
        }}
      />

      {/* ══════════════ HERO ══════════════ */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-20 max-w-6xl mx-auto w-full">

        {/* ── Left: Text ── */}
        <div className="flex-1 flex flex-col items-start text-left">

          {/* Greeting chip */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2.5px] uppercase text-[#C8960C] bg-[#C8960C]/10 border border-[#C8960C]/25 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#C8960C] animate-pulse inline-block" />
              {greeting} · Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.1)}
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.08 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-black text-white mb-3"
          >
            Hi, I'm{" "}
            <span className="italic text-[#C8960C]">Funmi.</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            {...fadeUp(0.2)}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-white/40 mb-6"
          >
            Full-Stack MERN Developer
          </motion.h2>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-base md:text-lg leading-relaxed text-white/55 max-w-lg mb-10"
          >
            I craft production-grade web applications — from full church ecosystems
            to HR platforms — with clean code, smart integrations, and a teacher's
            eye for making complex things simple.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C8960C] hover:bg-[#E5AE18] text-[#0D1B2A] font-bold px-7 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-[#C8960C]/25"
            >
              Let's Collaborate →
            </a>
            <a
              href="/funmi_cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-[#C8960C] hover:text-[#C8960C] text-white font-semibold px-7 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-1"
            >
              Download Resume ↗
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex gap-10 pt-8 border-t border-white/[0.07] w-full max-w-lg"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl font-black text-[#C8960C]"
                >
                  {s.val}
                </p>
                <p className="text-xs text-white/40 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          {/* Spinning dashed ring */}
          <div
            className="spin-ring absolute rounded-full border-2 border-dashed border-[#C8960C]/30"
            style={{ inset: -22 }}
          />
          {/* Inner solid ring */}
          <div
            className="absolute rounded-full border-4 border-[#C8960C]/50"
            style={{ inset: -4 }}
          />

          {/* Photo */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10">
            <img
              src="/Alabi_Funmilayo.jpg"
              alt="Alabi Oluwafunmilayo — Fullstack Developer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute -bottom-3 -right-6 z-20 bg-[#C8960C] text-[#0D1B2A] text-xs font-bold px-4 py-2 rounded-full shadow-xl shadow-[#C8960C]/30 whitespace-nowrap"
          >
            ✦ Lagos, Nigeria
          </motion.div>
        </motion.div>
      </main>

      {/* ══════════════ SKILLS TICKER ══════════════ */}
      <div className="border-t border-b border-white/[0.06] bg-white/[0.015] py-[14px] overflow-hidden select-none">
        <div className="ticker-track">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-6 text-sm font-medium text-[#C8960C]/75"
            >
              <span className="text-[#C8960C] font-black text-base">✦</span> {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;