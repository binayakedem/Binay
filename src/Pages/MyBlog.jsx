import { useState } from "react"
import blogPosts from "./data";
const MyBlog = () => {
    const [expandedPostIndex, setExpandedPostIndex] = useState(null);

 
  // Function to handle expanding/collapsing a post
  const toggleExpand = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal and display the clicked image
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className='bg-dark-50 text-gray-900 lg:px-32 md:px-20 px-2'>
        <h1 className="text-lg font-bold text-black text-center">Personal Experience Blog</h1>
       {blogPosts.map((post, index) => (
        <div
          key={index}
          className=" mx-auto my-4 p-4 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-2 text-[#F39C12]">{post.heading}</h2>

          {expandedPostIndex === index ? (
            <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="overflow-hidden h-4/5"  data-aos="zoom-up" data-aos-duration="1000">
                    <img className="h-full w-full object-cover rounded-md shadow  hover:scale-110 duration-500 ease-in-out cursor-pointer" src={post.primary_image} alt="primaryimage" />
                    </div>
                    <div className='flex flex-row items-center'>
                <div className='overflow-hidden h-10 w-10'>
                    <img className='h-full w-full object-cover rounded-full ' src="https://www.binayalimbu.com.np/assets/about-Be7h1ghU.png" alt="profile" />
                </div>
                <div className='flex flex-row text-gray-700'>
                    <p>By {post.author}</p>
                    <p> || {post.update_time}</p>
                </div>
            </div>
                </div>
              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                
                <h1 className="font-semibold text-lg my-2 text-black">Introduction</h1>
                <p data-aos="zoom-up" data-aos-duration="1000">{post.main_paragraph}</p>
              </div>
              <div>
                <h1 className="font-semibold text-lg my-2 text-black">Background</h1>
              <p>{post.second_paragraph}</p>
              </div>
              <div className="overflow-hidden h-4/5" data-aos="zoom-in" data-aos-duration="1200">
                    
                    <img className="h-full w-full object-cover rounded-md hover:scale-110 duration-500 ease-in-out cursor-pointer" src={post.second_image} alt="primaryimage" />
                </div>
                  </div>
                  <div>
            <h1 className="text-xl font-semibold mb-2 text-[#F39C12] text-center">Some Glimpse</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                {post.images.map((image, idx) => (
                    <div key={idx} className="overflow-hidden h-60 cursor-pointer" onClick={() => openImageModal(image)}>
                        <img 
                            src={image}
                            alt={`Image ${idx + 1}`}
                            className="h-full w-full object-cover rounded-lg mb-2 hover:scale-125 duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>

            {/* Modal to display full-size image */}
            {selectedImage && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="relative">
            <img 
                src={selectedImage} 
                alt="Full size" 
                className="w-screen h-screen   object-contain rounded-lg" 
            />
            <button
                className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold bg-yellow-700 rounded-full px-6"
                onClick={closeModal}
            >
                &times;
            </button>
        </div>
    </div>
)}
        </div>              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 text-blue-500 text-start hover:text-blue-700 underline"
                >
                Close
              </button>
            </div>
          ) : (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
               <div>
              <p data-aos="zoom-in-up" data-aos-duration="1200">{post.main_paragraph} ...</p>
               </div>
               <div className="overflow-hidden h-60"  data-aos="zoom-in" data-aos-duration="1200">
                <img className="h-full w-full object-cover hover:scale-125 duration-500 ease-in-out cursor-grab" src={post.primary_image} alt="primary image" />
               </div>
                </div>
              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 text-blue-500 hover:text-blue-700 underline"
              >
                Learn More
              </button>
             
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MyBlog