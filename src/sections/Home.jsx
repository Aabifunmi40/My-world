import React from 'react'
import pic from "../../public/pic.jpg"
import { IoLogoGithub } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/Aabifunmi40' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/' },
    { name: 'Email', url: 'mailto:kkoredesemi@gmail.com' }
    // {name:"instagram", url:""}
  ];
  return (
    // <div className='min-h-[85vh] '>
    //   <section id="home" className="h-screen flex flex-col justify-center items-center bg-[gold] pt-20 px-4 text-center">
    //     <div  className=''>
    //         <h1 className="text-5xl font-bold ">Hi,am <span className='text-blue-400'>Funmi</span></h1>
    //         <p className="text-xl">A software Developer</p>
    //         <h3>My journey into tech started in my quest for learnig and breaking bounds. </h3>
    //         <div className='space-x-6'>
    //             <button className='bg-orange-500'>Got a project?</button>
    //             <button className='bg-white'>My resume</button>
    //         </div>
    //     </div>
    //       <div>
    //          <img src={pic}   className='w-80 mt-15 ml-72 rounded-3xl'/>
    //       </div>
    //     </section>
    //     <logo>
    //      <a href="https://github.com/" ><IoLogoGithub /></a>
    //      <BsLinkedin />
    //     </logo>
      
    //  <BsLinkedin />
       
    
   
    // </div>
        <div className="min-h-screen bg-gray-600 text-white">
      <header className="text-center p-6 ">
        <h1 className="text-3xl font-bold mt-20 "> Alabi Oluwafunmilayo Mary</h1>
        {/* <nav className="mt-4">
          <a href="#home" className="mx-2">Home</a> | <a href="#about" className="mx-2">About</a> | <a href="#projects" className="mx-2">Projects</a> | <a href="#contact" className="mx-2">Contacts</a>
        </nav> */}
        <div className="w-48 h-48 rounded-full  mb-6 bg-cover bg-center mx-auto mt-4 animate-bounce" style={{ backgroundImage: "url('pic.jpg')" }}></div>
        <button className="mb-3 bg-red-500 text-white px-4 py-2 mr-2 rounded">Get a project?</button>
        <button className="mb-3 bg-red-500 text-white px-4 py-2 rounded">My resume</button>
        <section id="contact" className="mt-8 bg-white">
          <h2 className="text-5 xl font-bold text-center bg-red-600 ">Contacts</h2>
          <p  className='bg-orange-600'>2 Ongoing Projects | 95% Client Satisfaction | 6 Months of Experience</p>
          <div className="mt-2">
            {socials.map((social, index) => (
              <a key={index} href={social.url} className="bg-green-600 mx-2">{social.name}</a>
            ))}
            
          </div>
        </section>
      </header>
    
      
      </div>
  )
}

export default Home