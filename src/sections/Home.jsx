import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/Aabifunmi40' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/' },
    { name: 'Email', url: 'mailto:kkoredesemi@gmail.com' }
  ];

  return (
    <div className="bg-gray-400 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-8">
      
      {/* Text section - LEFT side */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold">Alabi Oluwafunmilayo Mary</h1>

        <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl text-amber-300 font-bold">
          I'm a Software Developer
        </h2>

        <p className="mt-2 text-sm md:text-base">
          2 Ongoing Projects | 95% Client Satisfaction | 6 Months of Experience
        </p>

        <div className="mt-4">
          {socials.map((social, index) => (
            <a key={index} href={social.url} className="mx-2 underline">{social.name}</a>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="mailto:kkoredesemi@gmail.com?subject=Project%20Enquiry"
            className="mb-3 bg-red-500 text-white px-4 py-2 mr-2 rounded inline-block"
          >
            Got a Project
          </a>
          <button className="mb-3 bg-red-500 text-white px-4 py-2 rounded">My Resume</button>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img
  src="/Alabi_Funmilayo.jpg"
  alt="Alabi Oluwafunmilayo"
  className="w-64 h-80 object-contain rounded-xl"
  style={{
    boxShadow: '0 4px 20px rgba(255, 0, 0, 0.5)' 
  }}
/>

      </div>
    </div>
  );
};

export default Home;
