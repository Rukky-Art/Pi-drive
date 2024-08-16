import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className='flex items-center justify-center '> 
      <img src="/capture 3.PNG" alt="" />

      </div>

      <div className="py-12 px-6 lg:px-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-lg text-green-900 font-bold text-lg leading-7">
            At PI Digital Road Transportation, we are dedicated to transforming road travel with cutting-edge technology.
            Our mission is to streamline and enhance the travel experience by addressing key challenges in the transport sector.
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-12">

            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/img12.png"
                alt="About Us"
                className="w-full h-auto lg:h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Revolutionizing Travel Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Navigating the bus transport sector can be challenging due to overcrowding, disorganization, and inconsistent waiting times.
                Our platform aims to address these issues by providing real-time updates, efficient booking systems, and seamless travel experiences.
                While cities like Lagos and Ibadan have seen progress, we strive to enhance travel for everyone seeking a more refined and stress-free journey.
              </p>
              <p className="text-lg text-gray-600">
                With our innovative solutions, we are committed to improving road transport and making travel a more enjoyable and reliable experience for all our users.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
