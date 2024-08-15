import React from 'react'
import { CiSettings } from "react-icons/ci";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbCameraCheck } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const WelcomePage = () => {
    return (
        <div className=''>
            <Navbar/>
            <div className='flex justify-center mt-4 gap-4'>
                <img src="/Ellipse 5.png" alt="" className='rounded-full w-[67px] h-[66px]' />
                <p className='text-[30px] font-bold text-[#478ECC]'>Welcome back Oluwatoyin</p>
            </div>
            <div className='flex flex-row gap-6 justify-center '>
                <div className='h-[436px] w-[250px] border-2 rounded-md bg-[#478ECC] pl-6 text-[#FFFFFF]'>
                    <div className='flex pt-32 gap-2 border-b-2 w-[208px] border-[#FFFFFF] pb-4'>
                        <CiSettings className='size-5' />
                        <button>SETTINGS</button>
                    </div>
                    <div className='flex gap-2 mt-6 border-b-2 w-[208px] border-[#FFFFFF] pb-4'>
                        <RxCounterClockwiseClock />
                        <button>BOOKING HISTORY</button>
                    </div>
                    <div className='flex gap-2 mt-6 border-b-2 w-[208px] border-[#FFFFFF] pb-4'>
                        <TbCameraCheck />
                        <button>PAYMENT</button>
                    </div>
                    <div className='flex gap-2 mt-6 border-b-2 w-[208px] border-[#FFFFFF] pb-4'>
                        <FaHandsHelping />
                        <button>HELP & SUPPORT</button>
                    </div>
                </div>
                <div className='w-[580px] h-[434px] border-2 rounded-md bg-[#478ECC] pl-6 pt-10 '>
                    <div className='w-[500px] h-[90px] bg-[#FFFFFF] rounded-md'>
                        <p className='pt-4 pl-4'>Customer care contact</p>
                        <h1 className='pl-4 pt-3 font-medium'>08162010551, contact@gmail.com</h1>
                    </div>
                    <div className='w-[500px] h-[90px] bg-[#FFFFFF] rounded-md mt-4'>
                        <p className='pl-4 pt-3'>Privacy and Policy</p>
                        <div className='flex justify-end mr-8'>
                            <FaArrowRightLong />
                        </div>
                        <h1 className='pl-4 font-medium'>Read through our Privacy Policy </h1>
                    </div>
                    <div className='w-[500px] h-[90px] bg-[#FFFFFF] rounded-md mt-4'>
                        <p className='pl-4 pt-3'>Terms & Conditions</p>
                        <div className='flex justify-end mr-8'>
                            <FaArrowRightLong />
                        </div>
                        <h1 className='pl-4 font-medium'>Read through our terms & conditions </h1>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center items-center mt-6'>
                <Link to='/book'>
                
                <button className='w-[250px] h-[32px] rounded-md bg-[#478ECC] text-[#FFFFFF] font-medium'>BOOKING</button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default WelcomePage
