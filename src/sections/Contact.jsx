import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
        {/* <section id="contact" className="h-screen flex items-center justify-center bg-white pt-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="mt-4 text-gray-600">Get in touch: email@example.com</p>
      </div>
    </section>
      <section id="contact" className="min-h-screen bg-white pt-24 pb-16 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

        <form
          action="https://formsubmit.co/your-email@example.com"
          method="POST"
          // className="space-y-4 text-left"
        >
          {/* Hidden anti-spam field */}
          {/* <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          {/* <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          {/* <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form> */}
      {/* </div>
    </section> */} 
    <section id="contact" className="min-h-screen bg-white pt-24 pb-16 px-4 flex items-center justify-center">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

        <motion.form
          action="https://formsubmit.co/your-email@example.com"
          method="POST"
          className="space-y-4 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
    </div>
  )
}

export default Contact