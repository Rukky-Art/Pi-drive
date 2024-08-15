import React from 'react'
import Navbar from './Navbar'


function TryAgain() {
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


                    <div className="w-[590px] h-[280px] gap-[] flex flex-col items-center justify-center mt-[100px]">
                        <div><img src="/caution.png" alt="" className='w-[48px] h-[48px] mr -[50px] mb-[10px]' />
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            
                                <h3 className='text-black flex flex-col font-medium rounded items-center justify-center w-[600px] text-2xl leading-7'>Token not generated, customer
                                    <span>not registered on token platform</span> </h3>
                            
                            <div className='flex flex-col gap-[20px] mr-[20px]'>
                                <h3 className='text-[#443E3E]  h-[76px] p-[10px] flex flex-col font-normal border border-[#999999] items-center justify-center rounded w-[600px] h-[40px] text-2xl leading-7'>Try another card</h3>
                                <h3 className='text-[#443E3E] h-[76px] p-[10px] flex flex-col font-normal border border-[#999999] items-center justify-center 
                            rounded w-[600px] h-[40px] text-2xl leading-7'>Try paying with Transfer</h3>
                                <h3 className='text-[#443E3E] h-[76px] p-[10px] flex flex-col font-normal border border-[#999999] items-center justify-center 
                            rounded w-[600px] h-[40px] text-2xl leading-7'>Try paying with Opay</h3>
                                <h3 className='text-[#443E3E] h-[76px] p-[10px] flex flex-col font-normal border border-[#999999] items-center justify-center 
                            rounded w-[600px] h-[40px] text-2xl leading-7'>Try another Palmpay</h3>
                             <div className='w-[600px] h-[40px] p-[16px_8px] gap-[12px]  flex items-center justify-center'>
                                    <img src="/return.png" alt="" className='w-[20px] h-[20px]' />
                                    <h3 className='font-normal text-lg leading-5 text-[#443E3E]'>start over with the same card</h3>
                                </div>

                            </div>

                        </div>


                        <div className='w-[584px] h-[56px] gap-[12px] flex items-center justify-center p-[5px]'>
                            <img src="/Group.png" alt="" className='w-[18px] h-[20px] ' />
                            <h4 className='font-bold text-sm leading-5 text-[#443E3E]'>Secured by <span className='font-semi-bold text-[#000000] leading-5'> Paystack </span></h4>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TryAgain
