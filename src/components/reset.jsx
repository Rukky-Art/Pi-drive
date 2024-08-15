import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image10 from '../assets/images/image10.jpg';
import { Modal } from 'antd';

function ResetPassword() {
    const [Token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('https://pi-drive-1.onrender.com/reset_password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYW1zZWxyYXR0dXNzQGdtYWlsLmNvbSIsImV4cCI6MTcyMzY5MzU4NH0.xa0jToVXgwIn1_q4YOCPi3QKyg1PgiyqIJyOBIJhj1s`,
                },
                body: JSON.stringify({ newPassword, token: Token }),
            });

            if (response.ok) {
                setIsModalOpen(true);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error('Error during password reset:', error);
        }
    };

    const handleOk = () => {
        setIsModalOpen(false);
        // Redirect to sign-in page or handle success
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <div
                    className="laptop:w-1/2 laptop:bg-cover tablet:w-1/2 tablet:bg-cover h-[600px]"
                    style={{ backgroundImage: `url(${image10})` }}
                ></div>
                <div className="laptop:w-1/2 flex flex-col justify-center p-8 laptop:h-[600px]">
                    <h2 className="text-lg font-bold text-blue-500 mb-4 text-center">RESET PASSWORD</h2>
                    <h4 className="text-center text-gray-400 font-medium text-xs mb-4">Enter your new password below</h4>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 mb-2 font-semibold leading-7 text-medium" htmlFor="Token">Input Token</label>
                            <input
                                type="text"
                                id="Token"
                                value={Token}
                                placeholder="Enter Token"
                                onChange={(e) => setToken(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 mb-2 font-semibold leading-7 text-medium" htmlFor="newPassword">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                placeholder="Enter New Password"
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded w-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            <span className="text-[#FFFFFF]">Reset Password</span>
                        </button>
                        {error && <p className="text-red-600 mt-4">{error}</p>}
                        <div className="mt-2 text-center w-full">
                            <p className="font-normal leading-7 text-base">Remember Password?
                                <Link to="/signin" className="text-blue-500 hover:underline">Back to Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <Modal
                title="Password Reset Successful"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <button
                        key="submit"
                        className="bg-[#2B74B9] text-[#FFFFFF] font-bold py-2 px-4 rounded w-full"
                        onClick={handleOk}
                    >
                        Go to Sign In
                    </button>
                ]}
            >
                <img src="/pass.png" alt="" className='w-32 h-32 items-center justify-center flex justify-items-center laptop:ml-40 tablet:ml-40 ml-20' />
            </Modal>
        </div>
    );
}

export default ResetPassword;
