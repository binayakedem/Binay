import React from 'react'
import Projects from '../Components/Projects'
const ProjectPage = () => {
  return (
    <>
    <div className='h-60 w-full overflow-hidden' data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img className='h-60 w-full object-cover' src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
    </div>
    <Projects/>
</>
  )
}

export default ProjectPage