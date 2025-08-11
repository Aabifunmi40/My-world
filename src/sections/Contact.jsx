import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-lg">Connect with me today</p>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <FaPhoneAlt />
            <span>+234 8052030540</span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:kkoredesemi@gmail.com"
              className="text-blue-500 hover:underline"
            >
              kkoredesemi@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <FaGithub />
            <a
              href="https://github.com/Aabifunmi40"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Aabifunmi40
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <FaLinkedin className="text-blue-500" />
            <a
              href="https://linkedin.com/in/alabi-oluwafunmilayo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/alabi-oluwafunmilayo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
