import React from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessOverlay({ onClose }) {
    const navigate = useNavigate();

    const handleGoToHomepage = () => {
        navigate('/');
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mt-20">
            <div className="bg-white p-8 rounded-lg w-[500px] h-[300px] flex flex-col items-center pb-10 justify-center">
                <h2 className="text-2xl font-bold mb-4">Password Reset Successful</h2>
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <svg
                        className="text-[#FDB64E]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                    
                            
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                </div>
                
                <button
                    onClick={handleGoToHomepage}
                    className="bg-[#2B74B9] text-[#FDB64E] font-bold py-2 px-4 rounded w-full"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
}

export default SuccessOverlay;
