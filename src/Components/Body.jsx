import React, { useState, useEffect } from 'react';
import videoSrc from '../assets/vid1.mp4'
const Body = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `../../Binaya Limbu.pdf`;
    link.download = 'Binaya Limbu CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const roles = [
    "Software ",
    "Frontend ",
    "MERN Stack ",
    "Backend ",
    "Java ",
    "Python",
];
const [currentRole, setCurrentRole] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentRole(prevRole => (prevRole + 1) % roles.length);
    }, 1500); 

    return () => clearInterval(interval);
}, []);
  return (
    <div className="relative h-[60vh] lg:h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill lg:object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex items-center  h-full bg-black bg-opacity-40">
        <div className='mx-4 md:mx-12 lg:mx-24 lg:py-4 '>
        <h1 className="text-white text-4xl md:text-6xl font-bold">Hi, Im <span className='text-warm-orange font-sarif'>  {roles[currentRole]}</span></h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold"> Developer</h1>
        <button
        onClick={handleDownload}
        className="px-4 py-2 bg-[#F39C12] lg:mt-28 mt-16 text-white rounded hover:bg-[#0849FF] transition duration-300"
      >
        Download CV
      </button>

        </div>
      </div>
    </div>
  )
}

export default Body
