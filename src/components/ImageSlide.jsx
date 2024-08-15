import React, { useState, useEffect } from 'react';
import image5 from '../assets/images/image5.jpg';
import images24 from '../assets/images/images24.jpg';
import image1 from '../assets/images/image1.jpg';

const images = [
    { src: image5, text: 'WELCOME TO PI DRIVE', subtext: 'Let us take the stress out of your move' },
    { src: images24, text: 'A Stress Free Ride' },
    { src: image1, text: 'Transportation Simplified' }
];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden" style={{ background: '#96C8ED' }}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: index === currentImageIndex ? 0.7 : 0 // Set opacity for active image
                    }}
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                        <p className="text-2xl tablet:text-5xl laptop:text-6xl font-bold p-4 text-white"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                opacity: index === currentImageIndex ? 1 : 0, // Adjust opacity for active text
                                textAlign: 'left', // Text alignment
                                lineHeight: '1.2', // Line height for better spacing
                                marginBottom: '10px' // Adjust the spacing between the texts
                            }}
                        >
                            {image.text}
                        </p>
                        {image.subtext && (
                            <h3 className="text-xl tablet:text-3xl laptop:text-4xl font-medium text-white"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    opacity: index === currentImageIndex ? 1 : 0, // Adjust opacity for active subtext
                                    textAlign: 'left', // Text alignment
                                    marginTop: '10px' // Adjust spacing from the main text
                                }}
                            >
                                {image.subtext}
                            </h3>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
