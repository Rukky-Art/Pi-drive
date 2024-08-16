import React, { useState } from 'react';
import PaymentPopup from '../components/paymentP';
import PaymentOverlay from '../components/paymentOverlay';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function PaymentPage() {
  const { state } = useLocation();
  const { date, time } = state || {}; // Retrieve date and time from the state
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleMakePaymentClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <div className="flex flex-col items-center text-white min-h-screen font-poppins bg-circle-pattern bg-cover bg-center">
      <Navbar />
      <div className="mt-8 flex items-center justify-center bg-[#B0BFC6] h-auto laptop:h-[153px] laptop:w-[1100px] tablet:h-[200px] tablet:w-[750px] w-full rounded-2xl p-4 laptop:gap-96">
        <div className="tablet:flex tablet:flex-row laptop:flex laptop:flex-row grid grid-cols-2 tablet:justify-between tablet:gap-10 font-poppins text-sm tablet:text-base laptop:text-lg font-medium leading-7 text-left text-[#15499F] laptop:mt-10 laptop:mr-5">
          <img src="/bus1.png" alt="Bus" className="w-6 h-6 mt-4 ml-20 tablet:mt-4 laptop:mt-8 tablet:ml-5 laptop:ml-20" />
          <div className="w-full tablet:w-auto tablet:ml-5 tablet:mr-5 mb-5">
            <ul>
              <li>Apata-Moniya</li>
              <li>Morning Bus</li>
              <li>Bus No: 023</li>
            </ul>
          </div>
          <div className="w-full tablet:w-auto tablet:ml-5 tablet:mr-5">
            <ul>
              <li>{time}</li>
              <li>Apata</li>
            </ul>
          </div>
          <div className="w-auto tablet:ml-5 tablet:mr-5 ml-[-120px]">
            <p className="text-center mr-24 tablet:mr-0">1 hour</p>
            <img src="/Line 1.png" alt="" className="mt-[-20px] w-24 ml-16 tablet:ml-1 tablet:mt-[-20px]" />
            <p className="text-center mr-20 tablet:mr-0">{date}</p>
          </div>
          <div className="tablet:ml-5 ml-[300px] mt-[-75px] tablet:mt-0">
            <ul>
              <li>10:00am</li>
              <li>Moniya</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full justify-center space-x-0 tablet:space-x-36 p-4 flex flex-col">
        <div className="w-full tablet:w-[1000px] laptop:w-[1220px] h-auto rounded-2xl p-4 laptop:flex laptop:flex-row tablet:flex tablet:flex-row
        tablet:gap-10">

          <div className="w-[350px] ml-[-10px] laptop:w-[600px] laptop:ml-[90px] bg-[#15499F]  rounded-lg overflow-hidden p-4">
            <h3 className="text-2xl font-bold leading-7 text-white">Passenger's Details</h3>
            <table className="min-w-full bg-[#BEDEF5] rounded-lg ">
              <thead>
                <tr>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">Name</th>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">Type</th>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">SeatNo</th>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">Price</th>
                </tr>
              </thead>
              <tbody className="text-black">
                <tr>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm font-medium text-black">Name</td>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm text-black">Adult</td>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm text-black">Line3C</td>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm text-black">#250</td>
                </tr>
              </tbody>
            </table>
          </div>


          <div className="w-[350px] ml-[-10px] laptop:w-[600px] bg-[#15499F] rounded-lg overflow-auto p-4 mt-5 laptop:ml-40 
          laptop:mt-0 tablet:mt-0">
            <h3 className="text-2xl font-bold leading-7 text-white">Price Summary</h3>
            <table className="min-w-full laptop:w-[375px]  bg-[#BEDEF5] rounded-lg">
              <thead>
                <tr>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">Passengers * 2</th>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">Total Fare</th>
                </tr>
              </thead>
              <tbody className="text-black">
                <tr>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm font-medium text-black">500</td>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm text-black">1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className='laptop:flex laptop:flex-row flex flex-col tablet:flex tablet:flex-row tablet:gap-40 tablet:mt-10'>
          <div className="w-full laptop:w-[450px] tablet:w-[350px] h-auto bg-[#15499F] rounded-lg overflow-auto p-4 mt-0  tablet:mt-5
        laptop:h-[150px] laptop:ml-[-40px] laptop:mt-5 tablet:ml-[-140px]">
            <h3 className="text-2xl font-bold leading-7 text-white">Contact Details</h3>
            <table className="min-w-full bg-[#BEDEF5] rounded-lg">
              <thead>
                <tr>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">Email</th>
                  <th className="px-1 tablet:px-3 py-1 tablet:py-2 text-left text-xs font-medium text-[#E65425] uppercase">Phone No</th>
                </tr>
              </thead>
              <tbody className="text-black">
                <tr>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm text-black">nafrof@gmail.com</td>
                  <td className="px-1 tablet:px-3 py-1 tablet:py-2 whitespace-nowrap text-sm text-black">08149875625</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="flex gap-4 mt-4 justify-end  w-full  tablet:w-[100px]  tablet:ml-24 tablet:gap-5 laptop:h-16 laptop:mr-20 tablet:h-16
          laptop:w-[400px] ">
            <button className="bg-[#2B74B9] laptop:p-[16px]  min-w-40 laptop:min-w-48 py-2 mr-10 laptop:mr-20 tablet:mr-0 rounded-lg text-white font-poppins text-xl 
            font-semi-bold " onClick={handleMakePaymentClick}>
              Make Payment
            </button>
            <NavLink to="/home" className="border-2 border-[#FDB64E] laptop:p-[16px] laptop:pl-14 w-40 mr-3 tablet:m-0 rounded-lg px-10 tablet:px-10 
            text-orange-500 font-poppins text-xl pt-1 tablet:pt-4 font-bold tablet:mr-0 laptop:min-w-40">Back</NavLink>
            
          </div>
        </div>
        <br />
        <div className='flex items-left justify-left'>
          <h3 className='text-[#15499F]'> <span><input type="checkbox" className='bg-blue-900' /></span> BY proceeding with the booking,
            I confirm that I <span className='laptop:flex laptop:flex-col tablet:flex tablet:flex-col '></span> have read and accept the <span className='text-[#E65425]'>terms and conditions
            </span> and <span className='text-[#E65425]'>Privacy Policy </span></h3>
        </div>
        </div>

      {isPopupVisible && (
        <PaymentPopup
          open={isPopupVisible} // Updated from `visible` to `open`
          onClose={handleClosePopup}
          onPaymentMethodSelect={handlePaymentMethodSelect}
        />
      )}

      {isOverlayVisible && (
        <PaymentOverlay
          open={isOverlayVisible} // Updated from `visible` to `open`
          onClose={handleCloseOverlay}
          paymentMethod={selectedPaymentMethod}
        />
      )}
    </div>
  );
}

export default PaymentPage;
