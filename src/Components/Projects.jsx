import React, { useState } from 'react'
import prabidhi from '../assets/image.png'
import hariyali from '../assets/hariyali.png'
import vivo from '../assets/vivo.png'
import trail from '../assets/trail.png'
import subhfront from '../assets/subhfront.png'
import subhdashboard from '../assets/subhdash.png'
import hashcnet from '../assets/hashnet.jpg'
import quote from '../assets/quote.jpg'
import intersect from '../assets/intersect.jpg'
const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      id: 1,
      name: "Prabidhi Enterprise Pvt. Ltd",
      languages: ["React.js", "Tailwind CSS"],
      image: prabidhi,
      description: "Prabidhi is a company website that displays services, contacts, and more.",
      sourcecode: "https://github.com/binayakedem/Prabidhi-Enterprise",
      preview: "https://prabidhi-virid.vercel.app/"
    },
    {
      id: 2,
      name: "Hash Cnet Pvt. Ltd.",
      languages: ["React.js", "Tailwind CSS"],
      image: hashcnet,
      description: "This system displays information about Hash Cnet Pvt. Ltd.",
      sourcecode: "https://github.com/binayakedem/",
      preview: "https://hashcnet.com.np/"
    },
    {
      id: 3,
      name: "Vivo Education Pvt. Ltd",
      languages: ["React.js", "Tailwind CSS"],
      image: vivo,
      description: "Vivo is a website showing information about consultancy services.",
      sourcecode: "https://github.com/binayakedem/trailmaker-practice-project",
      preview: "https://trailmaker-practice-project1.vercel.app/"
    },
    {
      id: 4,
      name: "Trail Consultancy",
      languages: ["React.js", "Tailwind CSS"],
      image: trail,
      description: "Trail Consultancy is a website showing consultancy service information.",
      sourcecode: "https://github.com/binayakedem/trail-consultancy",
      preview: "https://trailconsultancy.vercel.app/"
    },
    {
      id: 5,
      name: "Subh Bihani Digital Media Frontend",
      languages: ["React.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
      image: subhfront,
      description: "This website shows limited information due to the backend not running.",
      sourcecode: "https://github.com/binayakedem/subh-bihani-frontend",
      preview: "https://subh-bihani-frontend.vercel.app/"
    },
    {
      id: 6,
      name: "Subh Bihani Digital Media Dashboard",
      languages: ["React.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
      image: subhdashboard,
      description: "This dashboard shows limited information due to the backend not running.",
      sourcecode: "https://github.com/binayakedem/subh-bihani-dashboard",
      preview: "https://subh-bihani-dashboard.vercel.app/"
    },
    {
      id: 7,
      name: "Intersect Pvt.Ltd.",
      languages: ["React.js", "Tailwind CSS"],
      image: intersect,
      description: "This system displays information about Intersect Pvt.Ltd.",
      sourcecode: "https://github.com/binayakedem/intersect",
      preview: "https://intersect1.vercel.app/"
    },
    {
      id: 8,
      name: "Hariyali Abhiyan",
      languages: ["React.js", "Tailwind CSS"],
      image: hariyali,
      description: "This system displays information about Hariyali Abhiyan.",
      sourcecode: "https://github.com/binayakedem/hariyana",
      preview: "https://hariyana.vercel.app/"
    },
    {
      id: 8,
      name: "Quote Generator App",
      languages: ["JavaScript", "HTML", "CSS"],
      image: quote,
      description: "This system displays the quote generator app.",
      sourcecode: "https://github.com/binayakedem/quote",
      preview: "https://quote-xi.vercel.app/"
    },
    {
      id: 9,
      name: "Pre-order System",
      languages: ["React.js", "CSS", "Bootstrap", "Firebase"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6eUe2B-rM_EFa4piJFA0hYXuQK2M_WeoSg&s",
      description: "Firebase is used to authenticate and store information.",
      sourcecode: "https://github.com/binayakedem/preorder/",
      preview: "null"
    },
    {
      id: 10,
      name: "World News",
      languages: ["React.js", "CSS", "Firebase"],
      image: "https://thumbs.dreamstime.com/b/world-news-text-silver-d-uppercase-letters-placed-next-to-globe-showing-most-north-south-america-background-symbols-99681085.jpg",
      description: "This system fetches and displays worldwide news.",
      sourcecode: "https://github.com/binayakedem/world-news",
      preview: "null"
    },
    {
      id: 11,
      name: "Sustainable Energy Production Prediction",
      languages: ["React.js", "Bootstrap", "CSS", "Python"],
      image: "https://www.eia.gov/todayinenergy/images/2021.02.08/main.svg",
      description: "This system predicts sustainable energy production up to 2050.",
      sourcecode: "https://github.com/binayakedem/SustainableEnergyProductionPrediction",
      preview: "null"
    },
    {
      id: 12,
      name: "To-Do Project",
      languages: ["Python", "CSS", "HTML"],
      image: "https://www.smartsheet.com/sites/default/files/2022-09/IC-Project-Task-Checklist-Template.png",
      description: "This system performs CRUD operations for a daily to-do list.",
      sourcecode: "https://github.com/binayakedem/python-todo-project",
      preview: "null"
    },
    {
      id: 13,
      name: "Restaurant Management System",
      languages: ["Python", "Django with Rest Framework", "React.js"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSfeT-5B6ENiwvlHXuG-DXLyK4raUCtCNsqYetGMqMCyvdQxlIEAh-aSwa_W69hzjdq0&usqp=CAU",
      description: "Admin, Normal customer, pre-order customer, and Recipient pages.",
      sourcecode: "https://github.com/binayakedem/frontend-restaurant",
      preview: "null"
    },
    {
      id: 14,
      name: "Basics of Python",
      languages: ["Python"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L3bn1GkJ2Nm6ikVwF2dmqJZCmL8rAjVbyCTdeWKelvCok51IZQ3-l-zi6XlXvLmIXkU&usqp=CAU",
      description: "This project covers all the basics of Python.",
      sourcecode: "https://github.com/binayakedem/python-basic",
      preview: "null"
    }
  ];

  // Set the limit for initially shown projects
  const initialLimit = 4;
  const displayedProjects = showMore ? data : data.slice(0, initialLimit);

  return (
    <div className='bg-dark-500 text-light-gray lg:px-32 md:px-20 px-2'>
<h1 className="bg-gradient-to-r from-red-700 via-yellow-600 to-blue-700 bg-clip-text text-transparent font-bold text-2xl text-center py-10 animate-gradient font-mont" style={{ backgroundSize: '200% 200%' }}>
  Some Live Projects
</h1>

      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-2 pb-5'>
        {
          displayedProjects.map((d) => (
            <div data-aos="zoom-in-up" data-aos-duration="1500" key={d.id} className='flex flex-col rounded-xl border border-black p-4 shadow-lg bg-gray-200 '>
              <div className='flex flex-col gap-4'>
                <div className='overflow-hidden h-52 md:h-72 lg:h-96'>
                  <a href={d.preview} target='_blank'>
                    <img className='h-full w-full object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer' src={d.image} alt={d.name} />
                  </a>
                </div>
                <div>
                  <h1 className='font-semibold text-lg text-black font-mont'>{d.name}</h1>
                  <p className='text-gray-900'> {d.description}</p>
                </div>
                <div className='flex flex-row flex-wrap rounded-full'>
                  {d.languages.map((language, index) => (
                    <span key={index} className="px-3 py-1 border mx-2 border-black text-black rounded-full cursor-pointer text-sm hover:bg-yellow-200">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              <div className='text-center p-2 text-[#2563EB] font-semibold flex flex-row justify-between items-center px-2'>
                <div>
                  {
                    d.preview === "null" ? <p className='text-red-600'>No preview</p> : <a className='text-center underline text-[#2563EB] cursor-pointer hover:text-yellow-500' target='_blank' href={d.preview}>Preview</a>
                  }
                </div>
                <a className='underline text-[#2563EB] hover:text-yellow-500 cursor-pointer' href={d.sourcecode} target='_blank'>Source code</a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center py-8">
        <button 
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" 
          onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default Projects;
