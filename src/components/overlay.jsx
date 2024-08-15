import React, { useState } from 'react';

function Overlay({ onSuccess }) {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSuccess();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-[849px] h-[527px] flex flex-col items-center justify-center">
                <h2 className="text-lg font-bold mb-4">Enter Verification Code</h2>
                <p className="text-xs mb-4 text-center text-gray-400">Please enter the 8-digit code sent to your email or phone number</p>
                <form onSubmit={handleSubmit}>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Enter Verification Code</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="00000000"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-[#2B74B9] text-[#FFFFFF] font-bold py-2 px-4 rounded w-full"
                    >
                        Verify Pi-Drive Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Overlay;
