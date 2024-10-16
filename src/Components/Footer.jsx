import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin,FaFacebook,FaInstagram ,FaGithubSquare ,FaPhone} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='text-light-gray bg-dark-slate mt-6'>
       <div className=' lg:px-32 md:px-20 px-2'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          <div className='flex flex-col p-3' >
            <h1 className='text-warm-orange font-bold md:text-2xl text-lg my-1'>Quick Links</h1>
            <div className='flex flex-col lg:gap-1 '>
                <NavLink  to="/"className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Home</NavLink>
                <NavLink  to='/skills' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Skills</NavLink>
                <NavLink   to='/projects' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Projects</NavLink>
                <NavLink  to='/experiences'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> Experiences</NavLink>
                <NavLink  to='/about' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>About</NavLink>
                <NavLink  to='/blogs'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>Blogs</NavLink>
            </div>
          </div>
          <div className='p-3'>
            <h1 className='text-warm-orange font-bold md:md:text-2xl text-lg my-1'>Find Me</h1>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row items-center gap-1'>
            <a href="https://www.facebook.com/binayakdm" target='_blank'> <FaFacebook size={24} color='white'/></a><a href="https://www.facebook.com/binayakdm" target='_blank' className='text-light-gray'> Facebook</a>
              </div>
              <div className='flex flex-row items-center gap-1'>
                 <a href="https://github.com/binayakedem/" target='_blank'><FaGithubSquare size={24} color='white'/></a><a href="https://github.com/binayakedem/" target='_blank' className='text-light-gray'> Github</a>
              </div>
              <div className='flex flex-row items-center gap-1'>

                 <a href="https://www.instagram.com/binayalimbuz/" target='_blank'><FaInstagram size={24} color='white'/></a><a href="https://www.instagram.com/binayalimbuz/" target='_blank' className='text-light-gray'> Instagram</a>
              </div>
              <div className='flex flex-row items-center gap-1'>

                <a href="https://www.linkedin.com/in/binayalimbu/" target='_blank'> <FaLinkedin size={24} color='white'/></a><a href="https://www.linkedin.com/in/binayalimbu/" target='_blank' className='text-light-gray'> Linkedin</a>
              </div>

            </div>
          </div>
          <div className='p-3'>
            <h1 className='text-warm-orange font-bold md:text-2xl text-lg my-1'>Contact Me</h1>
            <div className='flex flex-row gap-2 items-center'>
                <FaPhone color='green'/>
                <p>+977-9843555471</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <FaPhone color='green'/>
                <p>+977-9803588079</p>
            </div>
            <div className='flex flex-row gap-2 items-center my-1 '>
            <MdOutlineAttachEmail color='red'/>
                <p>iambinayalimbu@gmail.com</p>
            </div>
            <div className='flex flex-row gap-2 items-center my-1 '>
            <MdOutlineAttachEmail color='red'/>
                <p>binayalimbu300@gmail.com</p>
            </div>
          </div>


        </div>

       </div>

    </div>
  )
}

export default Footer