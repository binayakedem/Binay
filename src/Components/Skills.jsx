import React from 'react'

const Skills = () => {
    const data=[
        {
          "id": 1,
          "name": "Java with Spring Boot",
          "image": "https://www.devopsschool.com/blog/wp-content/uploads/2023/12/image-168.png",
           "description": "An open-source Java-based framework used to create microservices."
        },
        {
          "id": 2,
          "name": "Python with Django",
          "image": "https://miro.medium.com/v2/resize:fit:1400/1*ws0l7_iuNWU2ozGQdZuCJg.jpeg",
           "description": "A high-level Python web framework that promotes rapid development and clean, pragmatic design."
        },
        {
          "id": 4,
          "name": "React js",
          "image": "https://miro.medium.com/v2/resize:fit:960/0*acB7EdIeWDFW0caX.jpg"
          ,
          "description": "A JavaScript library for building user interfaces."
        },
        {
          "id": 5,
          "name": "Node.js",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReof1h0J36RGurfOZFfF42rtDMDX9t0d9TbjyFcS0smTO5alQAh24VMayJrNa7UeK4OFg&usqp=CAU",
          "description": "A JavaScript runtime built on Chrome's V8 engine."
        },
        {
          "id": 6,
          "name": "MongoDB",
          "image": "https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png",
          "description": "A NoSQL database for high volume data storage."
        
        },
        {
          "id": 7,
          "name": "Express.js",
          "image": "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
          "description": "A minimal and flexible Node.js web application framework."
        },
        {
          "id": 8,
          "name": "Git",
          "image": "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
        },
        {
          "id": 9,
          "name": "HTML5",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgdDWCZtoif5bdJmw-DIoDHdtfNcVc0cQj5AUqs8hwLyH4J4Dem1htd53ieh4rAY5Dy0&usqp=CAU"
          ,
           "description": "The standard markup language for creating web pages."
        },
        {
            "id": 9,
            "name": "CSS3",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ6A-fY-YxIxZTSqLhiVKy_AI9OdRRyOJjjGq9KPxJ5uTCS3Oqxnm1mO183NEGCIlZns&usqp=CAU"
            ,
            "description": "A style sheet language used for describing the look of a document."
          }
      ]
  return (
    <div className='bg-gray-200 text-light-gray lg:px-32 md:px-20 px-2'>
        <h1 className='font-bold  text-black text-2xl text-center py-10'>Skills in </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2'>
                {
                    data.map((d)=>(
                        <div key={d.id}>
                            <div className=' rounded-lg shadow-black shadow-lg hover:animate-bounce ease-in-out cursor-pointer'>
                                <img className='rounded-lg object-cover h-40 w-full' src={d.image} alt="" />
                            </div>

                        </div>
                    ))
                }
        </div>

    </div>
  )
}

export default Skills