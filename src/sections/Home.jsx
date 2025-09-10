import React from "react";

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center text-white justify-center px-4 py-8">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-center">
        
        {/* Name */}
        <h1 className="text-3xl font-bold">Alabi Oluwafunmilayo Mary</h1>

        {/* Role */}
        <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl text-amber-300 font-bold">
          I'm a Fullstack Developer
        </h2>

        {/* Stats */}
        <p className="mt-2 text-sm md:text-base">
           | 95% Client Satisfaction | 7 Months of Experience
        </p>

        {/* Buttons */}
        <div className="mt-6">
          <a
            href="#contact"
            className="mb-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 mr-2 rounded inline-block transition-colors"
          >
            Got a Project
          </a>

          <a
            href="/ALABI_OLUWAFUNMILAYO_CV_UPDATED.pdf" // place your CV inside public/cv/
            download="ALABI_OLUWAFUNMILAYO_CV_UPDATED.pdf"
            className="mb-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors inline-block"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          src="/Alabi_Funmilayo.jpg"
          alt="Alabi Oluwafunmilayo"
          className="w-95 h-100 object-contain rounded-xl shadow-lg"
          style={{
            boxShadow: "0 4px 20px rgba(255, 0, 0, 0.5)",
          }}
        />
      </div>

    </div>
  );
};

export default Home;
