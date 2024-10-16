import React, { useState } from 'react';
import image1 from '../assets/image0.png';
import image2 from '../assets/image00.png';
import image3 from '../assets/image000.png';
import image4 from '../assets/image1.png';
import image5 from '../assets/image2.png';
import image6 from '../assets/image3.png';
import image7 from '../assets/image4.png';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';

import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.jpg'
import i3 from '../assets/i3.png'
import i4 from '../assets/i4.png'
import i5 from '../assets/i5.png'
import i6 from '../assets/i6.png'
import i7 from '../assets/i7.png'
import i8 from '../assets/i8.png'
import i9 from '../assets/i9.png'


const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6); // State to manage visible images

  // Array of imported images with unique IDs
  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: i1 },
    { id: 11, src: i2 },
    { id: 12, src: i3 },
    { id: 13, src: i4 },
    { id: 14, src: i5 },
    { id: 15, src: i6 },
    { id: 16, src: i7 },
    { id: 17, src: i8 },
    { id: 19, src: i9 },
  ];

  // Function to open full image view
  const openImage = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  // Function to close full image view
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Function to load more images
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 9); // Increase the visible images count
  };

  return (
    <>
      <div className="bg-gray-50 text-light-gray lg:px-32 md:px-20 px-2">
        <h1 className="font-bold text-black text-2xl text-center py-10">Gallery</h1>
        <div className='md:pb-8 pb-2'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.slice(0, visibleImages).map((image) => (
              <div
                key={image.id} // Use the unique id here
                className="overflow-hidden h-[200px] w-full"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 transform hover:scale-125"
                  onClick={() => openImage(image.src)}
                />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages < images.length && (
            <button
              onClick={loadMoreImages}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Load More
            </button>
          )}

          {/* Full-Size Image Overlay */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <img src={selectedImage} alt="Full Size" className="max-w-full max-h-screen" />
                <button
                  className="absolute top-2 right-2 bg-[#F39C12] text-white px-4 py-2 rounded-full"
                  onClick={closeImage}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallary;
