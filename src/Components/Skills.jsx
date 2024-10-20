import React from 'react'
import backend from '../assets/backend.png'
import frontend from '../assets/frontend.png'
import database from '../assets/database.png'
import version from '../assets/version.png'
import responsive from '../assets/responsive.png'
const Skills = () => {
  const data = [
    {
      id: 1,
      title: "Frontend",
      description: "I am expert in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind.",
      logo: frontend
    },
    {
      id: 2,
      title: "Backend",
      description: "I am proficient in Node.js, Express, Python, Java, Spring Boot, and Django.",
      logo: backend
    },
    {
      id: 3,
      title: "Database",
      description: "I have experience with MySQL, MongoDB, PostgreSQL, and SQLite.",
      logo: database
    },
    {
      id: 4,
      title: "Version Control",
      description: "I use Git and GitHub for version control.",
      logo: version
    },
    {
      id: 5,
      title: "Responsive Design",
      description: "I am familiar with Figma and Canva for design and responsive layouts.",
      logo: responsive
    }
  ];
  
  return (
    <div className='bg-gray-200 text-light-gray lg:px-32 md:px-20 px-2'>
        <h1 className='font-bold  text-black text-2xl text-center py-10 font-mont'>I specialized in range of Skills </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2'>
                {
                    data.map((d)=>(
                        <div key={d.id} data-aos="flip-left"data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='border border-gray-500 p-4 shadow-black flex flex-col justify-center items-center cursor-pointer hover:bg-yellow-100 hover:duration-1000 hover:text-black rounded-2xl  shadow'>
                            <div className='overflow-hidden h-20'>
                              <img className='h-full w-full object-cover' src={d.logo} alt="logo" />
                            </div>
                            <h1 className='font-semibold text-lg text-black font-mont'>{d.title}</h1>
                            <p className='text-gray-900'>{d.description}</p>

                        </div>
                    ))
                }
        </div>

    </div>
  )
}

export default Skills