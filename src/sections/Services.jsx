import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "🌐 Web Development", desc: "Building modern, scalable websites and applications." },
  { title: "📱 Responsive UI", desc: "Designing mobile-friendly, user-first interfaces." },
  { title: "⚡ API Integration", desc: "Connecting apps with external APIs and services." },
  { title: "🔒 Authentication", desc: "Secure login, user accounts, and role-based access." },
  { title: "🛠️ Database Management", desc: "Efficient database design and management (MongoDB, SQL)." },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-red-500/50 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
