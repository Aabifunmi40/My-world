import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contactDetails = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    text: "+234 8052030540",
    href: "tel:+2348052030540",
    label: "Call me at +234 8052030540"
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    text: "kkoredesemi@gmail.com",
    href: "mailto:kkoredesemi@gmail.com",
    label: "Email me at kkoredesemi@gmail.com"
  },
  {
    id: 3,
    icon: <FaGithub />,
    text: "github.com/Aabifunmi40",
    href: "https://github.com/Aabifunmi40",
    label: "Visit my GitHub profile"
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    text: "linkedin.com/in/alabi-oluwafunmilayo",
    href: "https://linkedin.com/in/alabi-oluwafunmilayo",
    label: "Visit my LinkedIn profile"
  }
];

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-200 max-w-3xl mx-auto text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Let’s collaborate to build scalable, user-focused MERN stack solutions tailored to your needs.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {contactDetails.map((detail) => (
          <motion.article
            key={detail.id}
            className="group bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-fuchsia-300/50 transition-shadow duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: detail.id * 0.2 }}
            aria-label={detail.label}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-fuchsia-300 text-2xl">{detail.icon}</span>
              <a
                href={detail.href}
                className="text-gray-200 hover:text-fuchsia-300 focus:outline-fuchsia-300 transition-colors duration-200"
                target={detail.href.startsWith("http") ? "_blank" : undefined}
                rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={detail.label}
              >
                {detail.text}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}