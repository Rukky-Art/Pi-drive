import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img10 from '../assets/images/img10.png';
import images26 from '../assets/images/images26.png';
import img12 from '../assets/images/img12.png';

function ImageSliders() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const images = [
    { src: img10, alt: 'image 10', text: 'Apata to Moniya' },
    { src: images26, alt: 'Images 26', text: 'New Garage to Olodo' },
    { src: img12, alt: 'Image 12', text: 'Gate to Olorunda' }
  ];

  return (
    <div className="flex flex-col tablet:flex-row laptop:flex-row justify-center items-center mx-auto space-x-0 
    tablet:space-x-4 laptop:space-x-4 space-y-4 tablet:space-y-0 laptop:space-y-0 p-4 max-w-7xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-full tablet:w-1/3 laptop:w-1/3 border border-gray-300 rounded-lg overflow-hidden shadow-lg 
            transition-transform duration-300 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full"
          />
          <div className="p-2 bg-white">
            <h2
              className="text-lg"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '28px',
                textAlign: 'left'
              }}
            >
              {image.text}
            </h2>
          </div>
          <div className=" w-full bg-[#2B74B9] text-white 
            font-bold py-2 px-4 rounded-xl bg-hover-orange-500"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '24px',
              fontWeight: '700',
              lineHeight: '28px',
              textAlign: 'center',
              width: '100%',
            }}>
            <Link to="/book">Booking</Link>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageSliders;
