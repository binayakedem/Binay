import React from 'react'

import Gallary from '../Components/Gallary'

const Gallery = () => {

  return (
    <>
    <div className='h-60 w-full overflow-hidden' data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img className='h-60 w-full object-cover' src="https://artlogic-res.cloudinary.com/w_1400,h_1400,c_limit,f_auto,fl_lossy,q_auto:good/ws-flowers/usr/images/feature_panels/image/10/flowers-cork-street-50-years-2020-14-of-17-.jpg" alt="banner" />

    </div>
    


    <Gallary/>
    </>
  )
}

export default Gallery