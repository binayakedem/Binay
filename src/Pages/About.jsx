import React from 'react'
import banner from '../assets/limbu.jpg'
import profile from '../assets/about.png'
import { FaUniversity } from "react-icons/fa";
import { FaLinkedin,FaFacebook,FaInstagram ,FaGithubSquare ,FaPhone} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
const About = () => {
    const email1 = 'binayalimbu300@gmail.com';
    const email2= 'iambinayalimbu@gmail.com';
    const handleEmailClick1 = () => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email1}`);
    };
    const handleEmailClick2 = () => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email2}`);
    };
  return (
    <>
     <div className='h-96  w-full' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img className='h-96 w-full object-cover' src={banner} alt="banner" />
    </div>
    <div className='bg-dark-50 text-light-gray lg:px-32 md:px-20 px-2'>
        <div className='grid col-span-1 md:grid-cols-2 gap-5'>
            <div className='overflow-hidden' data-aos="zoom-in" data-aos-duration="1200">
                <img className='h-full w-auto' src={profile} alt="profile" />
            </div>
            <div className='p-6 my-2 ' data-aos="fade-up" data-aos-duration="2000">
                <div>
                <h1 className='text-black font-bold text-2xl my-6 font-mont'>About Me</h1>
                <p className='text-gray-800 font-mono '>Hello! I'm an enthusiastic IT student who enjoys coding and continuous learning. My enthusiasm for technology motivates me to constantly adapt to new tools and frameworks. I thrive on solving complex problems and developing efficient, innovative solutions. With a strong interest in software development, I am committed to learning both frontend and backend technologies. Throughout my studies, I have completed over 20 projects that demonstrate my ability to apply theoretical knowledge to real-world scenarios. My journey is driven by curiosity and a desire to excel, with the goal of making a significant contribution to the tech industry. Let's connect and create something incredible together!</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-black font-bold text-2xl my-6 font-mont'>Education</h1>
                    <div className='flex flex-row gap-2 items-center'>
                    <FaUniversity color='black'/> <p className='text-gray-900'>Orchid International College,</p > <p className='text-warm-orange font-bold text-lg font-mono'>BSc.CSIT</p>

                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                    <FaUniversity color='black'/> <p className='text-gray-900'>Nepal Mega College,</p > <p className='text-warm-orange font-bold text-lg font-mono'>+2 Science</p>

                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                    <FaUniversity color='black'/> <p className='text-gray-900'>Shree Sundevi Secondary School,</p > <p className='text-warm-orange font-bold text-lg font-mono'>SLC</p>

                    </div>
                    
                </div>
            </div>

        </div>
        <hr className='border-b-2 my-3' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 h-96 pt-4'>
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d472.8095015057145!2d85.34084043398627!3d27.70040259506336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1729261861189!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className='text-black flex flex-col gap-2    '>
        <h1 className='font-bold text-lg text-yellow-600 font-mont'>Contacts</h1>
        <div className='flex flex-row gap-2 items-center'>
                <FaPhone color='green'/>
                <p>+977-9843555471</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <FaPhone color='green'/>
                <p>+977-9803588079</p>
            </div>
        <div className='flex flex-row gap-2 items-center my-1 '>
            <MdOutlineAttachEmail color='red' onClick={handleEmailClick2}/>
                <p onClick={handleEmailClick2} className='cursor-pointer'>{email2}</p>
            </div>
            <div className='flex flex-row gap-2 items-center my-1 '>
            <MdOutlineAttachEmail color='red' onClick={handleEmailClick1}/>
                <p onClick={handleEmailClick1} className='cursor-pointer'>{email1}</p>
            </div>
            <div className='flex flex-row gap-4 items-center '>
                <p>Find me: </p>
                 <a href="https://www.facebook.com/binayakdm" target='_blank'> <FaFacebook color='blue'/></a>
                 <a href="https://github.com/binayakedem/" target='_blank'><FaGithubSquare color='black'/></a>
                 <a href="https://www.instagram.com/binayalimbuz/" target='_blank'><FaInstagram color='red'/></a>
                <a href="https://www.linkedin.com/in/binayalimbu/" target='_blank'> <FaLinkedin color='blue'/></a>
               
            </div>
      </div>
      </div>
                  
    </div>
    </>
  )
}

export default About