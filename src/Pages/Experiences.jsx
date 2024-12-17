import React from 'react'
const Experiences = () => {
    const data=[
      {
        "id": 1,
        "image": "https://logolook.net/wp-content/uploads/2022/11/Java-Logo.png",
        "link":"https://dev.java/"
      },
      {
        "id": 2,
        "image": "https://contentstatic.techgig.com/thumb/msid-101591195,width-800,resizemode-4/Why-is-python-one-of-the-best-programming-languages.jpg?9070",
         "link":"https://www.python.org/"
      },
      {
        "id": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReof1h0J36RGurfOZFfF42rtDMDX9t0d9TbjyFcS0smTO5alQAh24VMayJrNa7UeK4OFg&usqp=CAU",
        "link":"https://nodejs.org/en"
      },
        {
          "id": 4,
          "image": "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
          "link":"https://www.javascript.com/"
        },
        {
          "id": 5,
          "image": "https://miro.medium.com/v2/resize:fit:960/0*acB7EdIeWDFW0caX.jpg",
          "link":"https://react.dev/"
        },
        {
          "id": 6,
          "image": "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
          "link":"https://expressjs.com/"
        },
        {
            "id": 7,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ6A-fY-YxIxZTSqLhiVKy_AI9OdRRyOJjjGq9KPxJ5uTCS3Oqxnm1mO183NEGCIlZns&usqp=CAU",
            "link":"https://www.w3schools.com/css/"
          },
          {
            "id": 8,
            "image": "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss.png",
            "link":"https://tailwindcss.com/"
          },
          {
            "id": 9,
            "image": "https://miro.medium.com/v2/resize:fit:1220/0*epnKnkKuLx2RAajt",
            "link":"https://www.postgresql.org/docs/"
          },
          {
            "id": 9,
            "image": "https://cdn.intuji.com/2023/10/MySQL.png",
            "link":"https://dev.mysql.com/doc/"
          },
        {
          "id": 10,
          "image": "https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png",
        "link":"https://www.mongodb.com/docs/"
        },
        {
          "id": 11,
          "image": "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
          "link":"https://github.com/"
        },
       
      ]
  return (
    <>
    <div className='h-60 overflow-hidden w-full' data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img className='h-60 w-full object-cover' src="https://st.depositphotos.com/1350793/2816/i/450/depositphotos_28167733-stock-photo-social-networking-concept.jpg" alt="banner" />
    </div>
    <div className='bg-gray-50 text-light-gray lg:px-32 md:px-20 px-2'>
        <h1 className='font-bold  text-black text-2xl text-center py-10 font-mont'>Projects based on</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2'>
                {
                    data.map((d)=>(
                        <div key={d.id} data-aos="zoom-in"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <div className=' border rounded-md ease-in-out cursor-pointer h-40 overflow-hidden'>
                              <a href={d.link} target="_blank">
                                <img className='rounded-lg object-cover h-full w-full hover:scale-110 duration-500 ease-in-out' src={d.image} alt="logo" />
                              </a>
                            </div>
                        </div>
                    ))
                }
        </div>

    </div>
</>
  )
}

export default Experiences