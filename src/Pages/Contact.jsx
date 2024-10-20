import React from 'react';
import banner from '../assets/limbu.jpg';
import ContactCompo from '../Components/Contact';
const Contact = () => {
    return (
        <>
            <div className='h-96 w-full' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img className='h-96 w-full object-cover' src={banner} alt="banner" />
            </div>
            <ContactCompo/>
            
        </>
    );
};

export default Contact;
