import React from 'react'
import { NavLink } from 'react-router-dom'
const Blognavigator = () => {
    return (
        <div className='bg-dark-500 text-light-gray lg:px-32 md:px-20 px-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 justify-center md:py-4 py-2 lg:py-8'>
                <div data-aos="zoom-in " data-aos-duration="1200">
                    <div className='overflow-hidden h-60'>
                        <NavLink to="/blog">
                            <img className='object-cover h-full w-full hover:scale-125 duration-500 cursor-grab ease-in-out' src="https://copysmiths.com/wp-content/uploads/2022/05/feature-image-maintain-a-successful-blog.jpg" alt="blog image" />
                        </NavLink>

                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='overflow-hidden h-10 w-10'>
                            <img className='h-full w-full object-cover rounded-full ' src="https://www.binayalimbu.com.np/assets/about-Be7h1ghU.png" alt="profile" />
                        </div>
                        <div className='flex flex-row text-gray-700'>
                            <p>By Binaya Limbu</p>
                            <p> || 2024 oct,19</p>
                        </div>
                    </div>
                </div>
                <div className='text-black px-2' data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className='text-xl font-semibold mb-2 text-[#F39C12] text-center md:text-start font-mont'>Welcome to My Blog!</h1>
                    <p className="text-justify">I am excited to share my journey with you through this platform. Here you'll find my observations and anecdotes from my travels as I discover new locations, advance technological advancements, and pick up priceless lessons. My intention is to capture these moments on camera and give you a peek of the amazing world we live in. Come along with me as I explore intriguing discoveries and impart the knowledge I've gained in the aim of enlightening and motivating others. Together, let's go off on this adventure!</p>
                    <NavLink to='/blog'>Learn More...</NavLink>
                </div>

            </div>

        </div>
    )
}

export default Blognavigator