import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from './logo';

function Footer() {
    return (
        <footer className='text-[#15499F] py-8 mt-8'>
            <div className='container mx-auto flex flex-col laptop:flex laptop:flex-row tablet:flex tablet:flex-row justify-between px-4 sm:px-2 md:px-8'>
                <div className='w-full sm:w-1/2 md:w-auto mb-6 sm:mb-0 flex justify-center sm:justify-start'>
                    <Logo />
                </div>
                <div className='w-full sm:w-1/2 md:w-1/5 mb-6 sm:mb-0'>
                    <h3 className='font-bold text-[#15499F]'>Company</h3>
                    <ul className='list-none mt-4'>
                        <li className='mb-2'><Link to='/company'>Company</Link></li>
                        <li className='mb-2'><Link to='/about'>About Us</Link></li>
                        <li className='mb-2'><Link to='/team'>Team</Link></li>
                    </ul>
                </div>

                {/* Experience Section */}
                <div className='w-full sm:w-1/2 md:w-1/5 mb-6 sm:mb-0'>
                    <h3 className='font-bold text-[#15499F]'>Experience</h3>
                    <ul className='list-none mt-4'>
                        <li className='mb-2'><Link to='/contact'>Contact Us</Link></li>
                        <li className='mb-2'><Link to='/faqs'>FAQs</Link></li>
                        <li className='mb-2'><Link to='/find-terminal'>Find to Terminal</Link></li>
                        <li className='mb-2'><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>

                {/* Terms Section */}
                <div className='w-full sm:w-1/2 md:w-1/5 mb-6 sm:mb-0'>
                    <h3 className='font-bold text-[#15499F]'>Terms</h3>
                    <ul className='list-none mt-4'>
                        <li className='mb-2'><Link to='/terms'>Terms</Link></li>
                        <li className='mb-2'><Link to='/privacy-policy'>Privacy Policy</Link></li>
                        <li className='mb-2'><Link to='/terms-and-conditions'>Terms and Conditions</Link></li>
                    </ul>
                </div>

                {/* Connect with Us Section */}
                <div className='w-full sm:w-1/2 md:w-1/5 mb-6 sm:mb-0'>
                    <h3 className='font-bold text-[#15499F]'>Connect with Us</h3>
                    <div className='flex justify-center sm:justify-start mt-4 space-x-4'>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} className='text-[#15499F]' />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} className='text-[#15499F]' />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} className='text-[#15499F]' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
