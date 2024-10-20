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

import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'

import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'
import s7 from '../assets/s7.png'
import s8 from '../assets/s8.png'

import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'
import b7 from '../assets/b7.jpg'
import b8 from '../assets/b8.jpg'
import b9 from '../assets/b9.jpg'

import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'
import c8 from '../assets/c8.png'
import c9 from '../assets/c9.png'
import  c10 from '../assets/c10.png'
const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(3); // State to manage visible images

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
    { id: 20, src: p1 },
    { id: 21, src: p2 },
    { id: 22, src: p3 },
    { id: 23, src: p4 },
    { id: 24, src: p5 },

    { id: 25, src: s1 },
    { id: 26, src: s2 },
    { id: 27, src: s3 },
    { id: 28, src: s4 },
    { id: 29, src: s5 },
    { id: 30, src: s6 },
    { id: 31, src: s7 },
    { id: 32, src: s8 },

    { id: 33, src: b1 },
    { id: 34, src: b2 },
    { id: 35, src: b3 },
    { id: 36, src: b4 },
    { id: 37, src: b5 },
    { id: 38, src: b6 },
    { id: 39, src: b7 },
    { id: 40, src: b8 },
    { id: 41, src: b9 },

    { id: 42, src: c1 },
    { id: 43, src: c2 },
    { id: 44, src: c3 },
    { id: 45, src: c4 },
    { id: 46, src: c5 },
    { id: 47, src: c6 },
    { id: 48, src: c7 },
    { id: 49, src: c8 },
    { id: 50, src: c9 },
    { id: 51, src: c10 }
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
                key={image.id} 
                className="overflow-hidden h-[200px] w-full shadow-sm shadow-black "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 transform hover:scale-125 "
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
