import React from 'react';
import google from '../assets/images/google.png';
import apple from '../assets/images/apple.png';

function Advertisement() {
  return (
    <div className='text-center bg-[#96C8ED] text-blue-500 justify-center p-4 max-w-7xl rounded mx-auto font-poppins 
    mt-8'>
      <div className='mt-10'>
        <h3 className='justify-center text-white text-4xl font-bold mt-10'>
          Enjoy the
          <span className='text-[#E65425]'> PI DRIVE</span>
        </h3>
      </div>
      <h2 className='text-[#15499F] text-2xl font-semibold mt-4'>Move Freely, Do Easily</h2>
      <h5 className='text-[#15499F] text-xl font-medium mt-2'>
        It is all you need in one travel app, Book Bus ticket, hire a bus and pay the bills
      </h5>
      <div className='mt-6 flex justify-center'>
        <a href='https://play.google.com/store' target='_blank' rel='noopener noreferrer' className='block'>
          <button className='bg-black shadow-md hover:shadow-lg rounded-lg py-3 px-6 mx-2'>
            <img src={google} alt='Google Play Store'  />
          </button>
        </a>
        <a href='https://www.apple.com/app-store/' target='_blank' rel='noopener noreferrer' className='block'>
          <button className='bg-black shadow-md hover:shadow-lg rounded-lg py-3 px-6 mx-2'>
            <img src={apple} alt='Apple App Store'  />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Advertisement;
