import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function CardPin() {
    const [pin, setPin] = useState(['', '', '', '']);
    const pinRefs = useRef([]);

    const handlePinChange = (index, value) => {
        if (/^[0-9]$/.test(value) || value === '') {
            const newPin = [...pin];
            newPin[index] = value;
            setPin(newPin);

            if (value !== '' && index < pinRefs.current.length - 1) {
                pinRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && pin[index] === '') {
            if (index > 0) {
                pinRefs.current[index - 1].focus();
            }
        } else if (event.key === 'ArrowLeft' && index > 0) {
            pinRefs.current[index - 1].focus();
        } else if (event.key === 'ArrowRight' && index < pinRefs.current.length - 1) {
            pinRefs.current[index + 1].focus();
        }
    };

    const handleClick = (index) => {
        pinRefs.current[index].focus();
    };

    return (
        <div className="fixed flex flex-col items-center text-white w-screen h-[1024px] font-poppins 
        bg-circle-pattern bg-cover bg-center">
            <Navbar/>
            <div className="top-[136px] flex items-center justify-center w-[850px] h-[589px] rounded-lg border-[#CCCCCC] rounded-2xl mt-[-1px]">
                <div className="flex flex-col w-[194px] h-[589px] p-4 bg-[#CCCCCC]">
                    <div className='w-[162px] h-[92px] px-2 py-8 gap-3 mt-[12px]'>
                        <h3 className='w-[110px] h-[28px] gap-0 text-2xl font-normal leading-[28px] text-left text-[#443E3E]'>PAY WITH</h3>
                        <div className='w-[162px] h-[50px] p-[16px_8px] gap-[12px] flex items-center justify-left border-y-2 border-[#443E3E] mt-[20px]'>
                            <img src="/card.png" alt="Card" />
                            <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>Card</h3>
                        </div>
                        <div className='flex mt-[10px] gap-[20px]'>
                            <img src="/transfer.png" alt="Transfer" />
                            <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>Transfer</h3>
                        </div>
                        <div className='w-[162px] h-[50px] p-[16px_8px] gap-[12px] flex items-center justify-left border-y-2 border-[#443E3E] mt-[20px]'>
                            <img src="/palmpay.png" alt="Palmpay" />
                            <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>Palmpay</h3>
                        </div>
                        <div className='flex mt-[10px] gap-[20px]'>
                            <img src="/opay.png" alt="Opay" />
                            <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>Opay</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[624px] h-[589px] p-4 bg-[#FFFFFF]">
                    <div className='w-[584px] h-[92px] border-b-2 border-[#443E3E] flex flex-col'>
                        <h3 className='font-normal text-2xl leading-7 text-[#CCCCCC]'>nafrof@gmail.com</h3>
                        <h3 className='font-normal text-2xl leading-7 text-[#CCCCCC] ml-[65px]'>pay <span className='text-[#70B2E2]'>NGN 600</span></h3>
                    </div>
                    <div>
                        <h3 className='flex items-center justify-center font-normal text-2xl leading-6 text-[#443E3E] mt-[60px] flex-col'>
                            Please Enter Your 4-digit Card Pin <span>to authorize this payment</span>
                        </h3>
                    </div>

                    <div className='flex justify-center mt-6 gap-4'>
                        {pin.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handlePinChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onClick={() => handleClick(index)}
                                ref={el => pinRefs.current[index] = el}
                                className="w-[64px] h-[64px] text-center border border-[#CCCCCC] bg-[#FFFFFF] rounded-[4px_0px_0px_0px] text-black text-2xl font-bold"
                            />
                        ))}
                    </div>

                    <div className='flex justify-center mt-8'>
                        <Link to='/tryAgain'
                            className="w-[84px] h-[28px] text-[#FDB64E] font-poppins text-[24px] font-bold leading-[28px]"
                            
                        >
                            Cancel
                        </Link>
                    </div>
                    <div className='w-[584px] h-[56px] gap-[12px] flex items-center justify-center mt-[180px] p-[5px]'>
                        <img src="/Group.png" alt="" className='w-[18px] h-[20px] ' />
                        <h4 className='font-bold text-sm leading-5 text-[#443E3E]'>Secured by <span className='font-semi-bold text-[#000000] leading-5'> Paystack </span></h4>

                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CardPin;
