import React from 'react'
import { FaLinkedin,FaFacebook,FaInstagram ,FaGithubSquare ,FaPhone} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
const  SecondaryNav = () => {
  return (
    <div className='bg-yellow-100 text-black lg:px-32 md:px-20 px-2'>
        <div className='hidden md:flex md:flex-row md:justify-between md:items-center py-2 '>
            <div className='flex flex-row gap-2 items-center'>
                <FaPhone color='green'/>
                <p>+977-9843555471</p>
            </div>
            <div className='flex flex-row gap-2 items-center justify-center '>
            <MdOutlineAttachEmail color='red'/>
                <p>iambinayalimbu@gmail.com</p>
            </div>
            <div className='flex flex-row gap-4 items-center justify-center'>
                <p>Find me: </p>
                 <a href="https://www.facebook.com/binayakdm" target='_blank'> <FaFacebook color='blue'/></a>
                 <a href="https://github.com/binayakedem/" target='_blank'><FaGithubSquare color='black'/></a>
                 <a href="https://www.instagram.com/binayalimbuz/" target='_blank'><FaInstagram color='red'/></a>
                <a href="https://www.linkedin.com/in/binayalimbu/" target='_blank'> <FaLinkedin color='blue'/></a>
               
            </div>

        </div>
       
    </div>
  )
}

export default SecondaryNav