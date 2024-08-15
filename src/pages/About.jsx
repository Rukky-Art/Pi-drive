import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
      <div className='items-center flex justify-center'>
              <p className='font-bold text-4xl text-blue-800'>About Us</p>
      </div>
          <h1>PI Digital Road Transportation</h1>
          <h2>At PI Digital Road Transportation, we are dedicated to transforming road travel with cutting-edge technology. <br />
            In many Nigerian states, navigating the bus transport sector can be challenging due to overcrowding, 
            disorganization, and inconsistent waiting times. <br />Although cities like Lagos and Ibadan have made progress, 
            these issues still impact many, particularly those <br />seeking a more refined travel experience.</h2>
    </div>
  )
}

export default About
