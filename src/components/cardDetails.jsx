import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function CardDetails() {
  return (
    <div className="fixed flex flex-col items-center text-white w-screen h-[1024px] font-poppins
     bg-circle-pattern bg-cover bg-center">
      <Navbar/>
      <div className="top-[136px] flex items-center justify-center ml-[295] w-[850px] h-[589px] rounded-lg 
         border-[#CCCCCC]  rounded-2xl mt-[-1px]">
        <div className="flex flex-col w-[194px] h-[589px] p-0 p-4 bg-[#CCCCCC]">
          <div className='w-[162px] h-[92px] px-2 py-8 gap-3 mt-[12px] '>
            <h3 className='w-[110px] h-[28px] gap-0 text-2xl font-normal leading-[28px] text-left text-[#443E3E]'>PAY WITH</h3>
            <div className='w-[162px] h-[50px] p-[16px_8px] gap-[12px]  flex items-center justify-left border-y-2 border-[#443E3E] mt-[20px]'>
              <img src="/card.png" alt="" />
              <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>Card</h3>
            </div>
            <div className='flex mt-[10px] gap-[20px]'>
              <img src="/transfer.png" alt="" />
              <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>Transfer</h3>

            </div>
            <div className='w-[162px] h-[50px] p-[16px_8px] gap-[12px]  flex items-center justify-left border-y-2 border-[#443E3E] mt-[20px]'>
              <img src="/palmpay.png" alt="" />
              <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>Palmpay</h3>
            </div>
            <div className='flex mt-[10px] gap-[20px]'>
              <img src="/opay.png" alt="" />
              <h3 className='font-light text-2xl leading-7 text-[#443E3E]'>opay</h3>

            </div>

          </div>
        </div>


        <div className="flex flex-col w-[624px] h-[589px] p-0 p-4 bg-[#FFFFFF]">
          <div className='w-[584px] h-[92px] border-b-2 border-[#443E3E] flex flex-col'>
            <h3 className='font-normal text-2xl leading-7 text-[#CCCCCC] '>nafrof@gmail.com</h3>
            <h3 className='font-normal text-2xl leading-7 text-[#CCCCCC] ml-[65px]'>pay <span className='text-[#70B2E2]'>NGN 600</span></h3>

          </div>

          <h3 className='flex items-center justify-center font-medium text-2xl leading-7 text-[#443E3E] mt-[40px]'>Enter your card details to pay</h3>
          <div className="w-[584px] h-[280px] gap-[10px] flex flex-col">
            <div className='h-[100px] gap-[8px] flex flex-col mt-[30px]'>
              <label className="font-normal text-2xl leading-7 text-[#443E3E]">Card Number</label>
              <input
                type="text"
                maxLength="19"
                placeholder="0000 0000 0000 0000"
                className="p-2 border border-gray-300 text-[#70B2E2] rounded-xl"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
                }}
              />
            </div>

            <div className='flex h-[100px] gap-[16px]'>
              <div className='h-[100px] w-[284px] gap-[8px] flex flex-col'>
                <label className="font-poppins text-2xl leading-7 text-[#443E3E] mt-4">Card Expiry</label>
                <input
                  type="text"
                  maxLength="5"
                  placeholder="MM/YY"
                  className="p-2 border border-gray-300 text-[#70B2E2] rounded-xl"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2').slice(0, 5);
                  }}
                />
              </div>
              <div className='h-[100px] w-[284px] gap-[8px] flex flex-col'>

                <label className="font-poppins text-2xl leading-7 text-[#443E3E] mt-4">CVV</label>
                <input
                  type="text"
                  maxLength="3"
                  placeholder="123"
                  className="p-2 border border-gray-300 text-[#70B2B2] rounded-xl"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
                  }}
                />
              </div>



            </div>

            
            <Link to="/cardPin"
              className="w-[584px] h-[70px]  py-[10px] bg-[#2B74B9] text-[#FFFFFF] font-poppins text-[24px] font-bold leading-[28px] 
              rounded-xl flex items-center justify-center"
            >
              pay NGN 600
            </Link>

            <div className='w-[584px] h-[56px] gap-[12px] flex items-center justify-center mt-[80px] p-[5px]'>
              <img src="/Group.png" alt="" className='w-[18px] h-[20px] ' />
              <h4 className='font-bold text-sm leading-5 text-[#443E3E]'>Secured by <span className='font-semi-bold text-[#000000] leading-5'> Paystack </span></h4>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardDetails
