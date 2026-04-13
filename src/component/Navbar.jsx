import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const navLinks = [
  { id: 1, text: "Home",     href: "#home"     },
  { id: 2, text: "About",    href: "#about"    },
  { id: 3, text: "Services", href: "#services" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");

  /* Shrink navbar + track active section on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&display=swap');
        .nav-link-active { color: #C8960C !important; }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: scrolled
            ? "rgba(13,27,42,0.95)"
            : "rgba(13,27,42,0.7)",
          borderBottom: scrolled
            ? "1px solid rgba(200,150,12,0.15)"
            : "1px solid rgba(255,255,255,0.05)",
          transition: "background 0.3s, border-color 0.3s",
        }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={close}
            aria-label="Funmi portfolio home"
            style={{ textDecoration: "none" }}
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-xl font-black text-white tracking-tight"
            >
              Funmi<span style={{ color: "#C8960C", fontStyle: "italic" }}>.</span>
            </motion.span>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-label={`Go to ${link.text}`}
                  className={isActive ? "nav-link-active" : ""}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? "#C8960C" : "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.target.style.color = "white"; }}
                  onMouseLeave={(e) => { if (!isActive) e.target.style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {link.text}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      style={{
                        position: "absolute",
                        left: 0, right: 0, bottom: -4,
                        height: 2,
                        borderRadius: 999,
                        background: "#C8960C",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#C8960C] hover:bg-[#E5AE18] text-[#0D1B2A] font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ textDecoration: "none" }}
          >
            Hire Me →
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-white/70 hover:border-[#C8960C]/50 hover:text-[#C8960C] transition-colors duration-200"
          >
            {open ? <RxCross1 size={18} /> : <RxHamburgerMenu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "rgba(13,27,42,0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(200,150,12,0.15)",
            }}
            className="fixed top-16 left-0 w-full z-40 flex flex-col px-6 py-8 gap-2"
          >
            {navLinks.map((link, i) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderRadius: 14,
                    fontSize: 17,
                    fontWeight: 600,
                    color: isActive ? "#C8960C" : "rgba(255,255,255,0.65)",
                    background: isActive ? "rgba(200,150,12,0.08)" : "transparent",
                    border: isActive
                      ? "1px solid rgba(200,150,12,0.2)"
                      : "1px solid transparent",
                    transition: "all 0.2s",
                  }}
                >
                  {link.text}
                  {isActive && <span style={{ color: "#C8960C", fontSize: 14 }}>●</span>}
                </motion.a>
              );
            })}

            {/* Mobile CTA */}
            <motion.a
              href="#contact"
              onClick={close}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              style={{ textDecoration: "none" }}
              className="mt-4 flex items-center justify-center gap-2 bg-[#C8960C] hover:bg-[#E5AE18] text-[#0D1B2A] font-bold px-6 py-4 rounded-full text-sm transition-all duration-200"
            >
              Hire Me →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}