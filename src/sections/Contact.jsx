import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_i604l6j";
const TEMPLATE_ID = "template_csgqjsp";
const PUBLIC_KEY  = "TCAB4GeLk49JNLHNR";

const contactLinks = [
  { icon: <FaEnvelope />, label: "Email", text: "kkoredesemi@gmail.com", href: "mailto:kkoredesemi@gmail.com" },
  { icon: <FaPhoneAlt />, label: "Phone", text: "+234 805 203 0540", href: "tel:+2348052030540" },
  { icon: <FaGithub />, label: "GitHub", text: "github.com/Aabifunmi40", href: "https://github.com/Aabifunmi40" },
  { icon: <FaLinkedin />, label: "LinkedIn", text: "alabi-oluwafunmilayo", href: "https://linkedin.com/in/alabi-oluwafunmilayo" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

export default function Contact() {
  const formRef = useRef();
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: `Portfolio enquiry from ${form.name}`,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err.status, err.text);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative min-h-screen bg-[#0D1B2A] text-white px-6 md:px-16 py-24 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 14px 18px;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.25); }
        .contact-input:focus { border-color: rgba(200,150,12,0.6); }
      `}</style>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute rounded-full opacity-[0.08]"
        style={{
          width: 460,
          height: 460,
          background: "#C8960C",
          filter: "blur(100px)",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[3px] uppercase text-[#C8960C] mb-3">
          Let's talk
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Get in <span className="italic text-[#C8960C]">Touch</span>
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-base text-white/45 max-w-lg mb-16">
          Open to freelance projects, collaborations, and full-time roles.
          Send me a message and I'll get back to you within 24 hours.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div {...fadeUp(0.2)}>
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 bg-[#C8960C]/[0.05] border border-[#C8960C]/20 rounded-2xl p-12"
              >
                <span className="text-5xl">🎉</span>
                <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-white">
                  Message sent!
                </p>
                <p className="text-sm text-white/45">
                  Thanks for reaching out — I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs font-semibold text-white/40 hover:text-[#C8960C] transition-colors"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/40 tracking-widest uppercase">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="contact-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/40 tracking-widest uppercase">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-white/40 tracking-widest uppercase">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or what you need help with..."
                    className="contact-input resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status !== "sending" ? { y: -2 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                  className="mt-2 bg-[#C8960C] hover:bg-[#E5AE18] disabled:opacity-60 disabled:cursor-not-allowed text-[#0D1B2A] font-bold px-8 py-4 rounded-full text-sm transition-colors duration-200 shadow-lg shadow-[#C8960C]/20 w-full"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-[#0D1B2A]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div {...fadeUp(0.3)} className="flex flex-col gap-5">
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-6 py-5">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">Available for work</p>
                <p className="text-xs text-white/40 mt-0.5">Open to freelance, contracts &amp; full-time roles</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {contactLinks.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.25, duration: 0.5 }}
                  whileHover={{ x: 4, borderColor: "rgba(200,150,12,0.4)" }}
                  className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-6 py-4 transition-colors duration-200 group"
                  style={{ textDecoration: "none" }}
                >
                  <span className="text-[#C8960C] text-lg flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-[11px] font-semibold text-white/30 tracking-widest uppercase mb-0.5">{c.label}</p>
                    <p className="text-sm font-medium text-white/80 group-hover:text-[#C8960C] transition-colors duration-200">{c.text}</p>
                  </div>
                  <span className="ml-auto text-white/20 group-hover:text-[#C8960C] text-sm transition-colors">→</span>
                </motion.a>
              ))}
            </div>

            <p className="text-xs text-white/25 text-center mt-1">⏱ Average response time: within 24 hours</p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25"
        >
          <p>Built by <span className="text-[#C8960C] font-semibold">Funmi</span> · {new Date().getFullYear()}</p>
          <p>Lagos, Nigeria · Open to remote worldwide</p>
        </motion.div>
      </div>
    </section>
  );
}