import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Logo from './logo';

function NavItem({ to, children, isSignUp }) {
    let classes = "hover:text-[#F8981D] mx-2 md:mx-4 lg:mx-16 whitespace-nowrap";

    if (isSignUp) {
        classes += " bg-[#2B74B9] border rounded-md  py-1 laptop px-5 laptop:px-7 tablet:py-2 text-[#FFFFFF]";
    }

    return (
        <li>
            <Link to={to} className={classes}>{children}</Link>
        </li>
    );
}

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='bg-[#FFFFFF] px-4 py-2 md:py-4 md:px-6 lg:px-8 flex flex-col md:flex-row md:items-center w-full 
        font-bold leading-7 text-blue-800 text-lg md:text-xl lg:text-2xl' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className='flex justify-between items-center w-full md:w-auto'>
                <Logo />
                <button className='md:hidden' onClick={handleMenuToggle}>
                    {/* Icon for the menu button */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <nav className={`${isMobile && !isMenuOpen ? 'hidden' : 'block'} md:flex mt-4 md:mt-0 w-full md:w-auto`}>
                <ul className="laptop:flex laptop:flex-row tablet:flex tablet:flex-row w-full grid grid-cols-2 md:w-auto mt-5 laptop:ml-20">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/about">About Us</NavItem>
                    <NavItem to="/contact">Contact Us</NavItem>
                    <NavItem to="/signin" isSignUp={true}>Sign In</NavItem>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
