import React from 'react'
import prabidhi from '../assets/image.png'
import hariyali from '../assets/hariyali.png'
import vivo from '../assets/vivo.png'
import trail from '../assets/trail.png'
import subhfront from '../assets/subhfront.png'
import subhdashboard from '../assets/subhdash.png'
import hashcnet from '../assets/hashnet.jpg'
const Projects = () => {
    const data=[
        {
          "id": 1,
          "name":"Prabidhi Enterprise Pvt.Ltd",
          "languages":"React.js, Tailwind CSS",
          "image": prabidhi,
           "description": "Prabidhi is company website, which display the services contacts and so on.",
           "sourcecode":"https://github.com/binayakedem/Prabidhi-Enterprise",
           "preview":"https://prabidhi-virid.vercel.app/"
        },
        {
          "id": 2,
          "name":"Hash Cnet Pvt.Ltd.",
          "languages":"React.js, Tailwind CSS",
          "image": hashcnet,
           "description": "System display the information about the hash cnet pvt. ltd.",
           "sourcecode":"https://github.com/binayakedem/",
           "preview":"https://hashcnet.vercel.app/"
        },
        
          {
            "id": 3,
            "name":"Vivo Education Pvt.Ltd",
            "languages":"React.js, Tailwind CSS",
            "image": vivo,
             "description": "Vivo is a website which shows information about the consultancy service .",
             "sourcecode":"https://github.com/binayakedem/trailmaker-practice-project",
             "preview":"https://trailmaker-practice-project1.vercel.app/"
          },
          {
            "id": 4,
            "name":"Trail Consultancy",
            "languages":"React.js, Tailwind CSS",
            "image": trail,
             "description": "Trail Consultancy is a website which shows information about the consultancy service .",
             "sourcecode":"https://github.com/binayakedem/trail-consultancy",
             "preview":"https://trailconsultancy.vercel.app/"
          },
          {
            "id": 5,
            "name":"Subh Bihani Digital Media frontend",
            "languages":"React.js, Tailwind CSS, MongoDB, Node.js, Express.js,",
            "image": subhfront,
             "description": "website which shows limited information information due to backend is not running. ",
             "sourcecode":"https://github.com/binayakedem/subh-bihani-frontend",
             "preview":"https://subh-bihani-frontend.vercel.app/"
          },
          {
            "id": 6,
            "name":"Subh Bihani Digital Media dashboard",
            "languages":"React.js, Tailwind CSS, MongoDB, Node.js, Express.js,",
            "image": subhdashboard,
             "description": "website which shows limited information information due to backend is not running. ",
             "sourcecode":"https://github.com/binayakedem/subh-bihani-dashboard",
             "preview":"https://subh-bihani-dashboard.vercel.app/"
          },
          {
            "id": 7,
            "name":"Hariyali Abhiyan",
            "languages":"React.js, Tailwind CSS",
            "image": hariyali,
             "description": "System display the information about the Hariyali Abhiyan.",
             "sourcecode":"https://github.com/binayakedem/hariyana",
             "preview":"https://hariyana.vercel.app/"
          },
          {
            "id": 8,
            "name":"Quote Generator app",
            "languages":"Javascript , HTML and CSS",
            "image": hariyali,
             "description": "System display the quote generator app.",
             "sourcecode":"https://github.com/binayakedem/quote",
             "preview":"https://quote-xi.vercel.app/"
          },
          {
            "id": 9,
            "name":"Pre-order system",
            "languages":"React.js, CSS, Bootstrap,firebase ",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6eUe2B-rM_EFa4piJFA0hYXuQK2M_WeoSg&s",
             "description": "firebase to authenticate and store information. ",
             "sourcecode":"https://github.com/binayakedem/preorder/",
             "preview":"null"
          },
          {
            "id": 10,
            "name":"World news",
            "languages":"React.js, CSS, Firebase,",
            "image": "https://thumbs.dreamstime.com/b/world-news-text-silver-d-uppercase-letters-placed-next-to-globe-showing-most-north-south-america-background-symbols-99681085.jpg",
             "description": "Fetch news and display world wide news ",
             "sourcecode":"https://github.com/binayakedem/world-news",
             "preview":"null"
          },
          {
            "id": 11,
            "name":"Sustainable energy production prediction",
            "languages":"React.js, bootstrap, css, python ",
            "image": "https://www.eia.gov/todayinenergy/images/2021.02.08/main.svg",
             "description": "System predicts the sustainable energy production prediction up to 2050.",
             "sourcecode":"https://github.com/binayakedem/SustainableEnergyProductionPrediction",
             "preview":"null"
          },
          {
            "id": 12,
            "name":"To Do Project",
            "languages":"python , CSS, HTML",
            "image": "https://www.smartsheet.com/sites/default/files/2022-09/IC-Project-Task-Checklist-Template.png",
             "description": "System performs crud to perform daily to do list",
             "sourcecode":"https://github.com/binayakedem/python-todo-project",
             "preview":"null"
          },
          {
            "id": 13,
            "name":"Restaurant Management system",
            "languages":"python django with rest framework, react.js ",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSfeT-5B6ENiwvlHXuG-DXLyK4raUCtCNsqYetGMqMCyvdQxlIEAh-aSwa_W69hzjdq0&usqp=CAU",
             "description": "Admin, Normal customer, pre-order customer and lastly Recipient page.",
             "sourcecode":"https://github.com/binayakedem/frontend-restaurant",
             "preview":"null"
          },
          {
            "id": 14,
            "name":"Basics of python",
            "languages":"python ",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L3bn1GkJ2Nm6ikVwF2dmqJZCmL8rAjVbyCTdeWKelvCok51IZQ3-l-zi6XlXvLmIXkU&usqp=CAU",
             "description": "All basic of python.",
             "sourcecode":"https://github.com/binayakedem/python-basic",
             "preview":"null"
          },

      ]
  return (
    <div className='bg-dark-500 text-light-gray lg:px-32 md:px-20 px-2'>
        <h1 className='font-bold  text-black text-2xl text-center py-10'>Projects </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2'>
                {
                    data.map((d)=>(
                        <div key={d.id} className='flex flex-col rounded-md'>
                            <div className='shadow-black shadow-lg rounded-md'>
                                <div className='relative '>
                                    <img className='h-40 w-full object-cover' src={d.image} alt={d.name} />
                                    <div className='absolute inset-0  text-white bg-black opacity-0 hover:opacity-95 hover:bg-opacity-95 p-2 duration-500 cursor-pointer'>
                                        <p className='font-serif my-2'><span className='font-bold text-lg text-blue-600'>Tools:</span>{d.languages}</p>
                                        <p className='font-mono my-2 '><span className='font-bold text-lg text-blue-600'>Project:</span>{d.description}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold text-black font-mono text-center p-2'>{d.name}</p>
                                </div>
                                <div className='text-center p-2 text-blue-600 font-semibold flex flex-row justify-between items-center px-2'>
                                  {
                                    d.preview==='null'?<p className='text-red-600'>No preview</p>:<a className='text-center' href={d.preview} target='_blank'>Preview</a>
                                  }
                                    
                                    <a href={d.sourcecode} target='_blank'>Source Code</a>
                                </div>
                            </div>

                        </div>
                    ))
                }
        </div>

    </div>
  )
}

export default Projects