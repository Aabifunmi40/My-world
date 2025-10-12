
import { motion } from "framer-motion";

const services = [
  { title: "Web Development", desc: "Building scalable MERN stack applications for e-commerce, productivity, and more." },
  { title: "Responsive UI", desc: "Crafting mobile-first interfaces with React and Tailwind CSS for seamless user experiences." },
  { title: "API Integration", desc: "Integrating RESTful APIs and third-party services like Stripe or Google APIs." },
  { title: "Authentication", desc: "Implementing secure JWT-based authentication and role-based access with Node.js." },
  { title: "Database Management", desc: "Designing efficient MongoDB schemas and optimizing SQL queries." },
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

      <motion.p
        className="text-lg text-gray-200 max-w-3xl mx-auto text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Leveraging my background in science tutoring, I deliver clear, user-focused MERN stack solutions tailored to your needs.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <a key={index} href="#projects" aria-label={`View projects related to ${service.title}`}>
            <motion.article
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-fuchsia-300/50 transition-shadow focus:outline-fuchsia-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              aria-label={`Service: ${service.title}`}
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-200">{service.desc}</p>
            </motion.article>
          </a>
        ))}
      </div>

      <motion.a
        href="#contact"
        className="mt-10 bg-fuchsia-300 hover:bg-fuchsia-400 text-black px-6 py-3 rounded-lg font-semibold mx-auto block w-fit"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        aria-label="Contact me to discuss a project"
      >
        Let’s Work Together
      </motion.a>
    </section>
  );
};

export default Services;