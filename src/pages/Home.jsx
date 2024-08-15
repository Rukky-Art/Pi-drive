import React from 'react';
import ImageSlide from '../components/ImageSlide';
import ImageSliders from '../components/ImageSliders';
import Advertisement from '../components/Advertisement';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className=''>
      <div className="">
        <Navbar/>
        <ImageSlide />
          <div className='flex items-center justify-center mb-20 mt-20 text-3xl'>
          <h4 className='text-[#15499F] font-medium laptop:font-semibold laptop:text-5xl laptop:leading-[58.51px] tablet:font-semibold tablet:text-5xl tablet:leading-[58.51px] flex items-center justify-center'>Available Buses and Routes</h4>
          </div>
        <ImageSliders />
        <Advertisement />
        <Footer/>

      </div>
    </div>

        


  )
}

export default Home

