import React from 'react'

const Project = () => {
  const projects = ['https://aabifunmi40.github.io/quiz/', 'Project 2', 'Project 3', 'Project 4'];
  return (
    <div>
        <section id="projects" className="  bg-gray-400 h-[100vh] flex items-center justify-center mx-auto  pt-24">
          <h2 className=" text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {projects.map((project, index) => (
              <div key={index} className="bg-white text-black p-4 rounded shadow">
                {project}
              </div>
            ))}
          </div>
        </section>

    </div>
  )
}

export default Project