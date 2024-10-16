import React from 'react'
import banner from '../assets/limbu.jpg'
import profile from '../assets/about.png'
import { FaUniversity } from "react-icons/fa";
const About = () => {
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
                <h1 className='text-black font-bold text-2xl my-6'>About Me</h1>
                <p className='text-gray-800 font-mono '>Hello! I'm an enthusiastic IT student who enjoys coding and continuous learning. My enthusiasm for technology motivates me to constantly adapt to new tools and frameworks. I thrive on solving complex problems and developing efficient, innovative solutions. With a strong interest in software development, I am committed to learning both frontend and backend technologies. Throughout my studies, I have completed over 20 projects that demonstrate my ability to apply theoretical knowledge to real-world scenarios. My journey is driven by curiosity and a desire to excel, with the goal of making a significant contribution to the tech industry. Let's connect and create something incredible together!</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-black font-bold text-2xl my-6'>Education</h1>
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
        <div className='bg-yellow-50 rounded shadow md:p-10 p-4' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <h1 className='text-black font-bold text-2xl text-center mb-10'>Contact Me</h1>
            <form action="" method="post">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6'>
                <input type="text" placeholder='Enter Your name' className='border p-2 rounded text-black w-full' />
                <input type="email" placeholder='Enter Your Email' className='border p-2 rounded text-black w-full' />
                <input type="text" placeholder='Enter Your Subject' className='border p-2 rounded text-black w-full' />
                </div>
                <input type="textarea" placeholder='Enter Your Message Here' className='border px-2 py-20 rounded text-black w-full' />
                <button className='text-white bg-[#F39C12] font-semibold my-6 px-8 py-3 rounded hover:text-white duration-300 ease-in-out' type='submit'>Contact Me</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default About