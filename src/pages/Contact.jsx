import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center border border-blue-500 h-[500px]'>
        <p className='space-y-5'>for more information,  <span className='flex flex-col items-center mt-2 text-center justify-center 
        font-bold text-2lg'>  Call: (Miss Nafrof)
        </span><span className='flex flex-col text-center justify-center font-bold text-2lg'> 08163506125</span></p> 
      </div>
      
      <Footer/>
    </div>
  )
}

export default Contact
