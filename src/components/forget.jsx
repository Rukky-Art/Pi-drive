import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image10 from '../assets/images/image10.jpg';
import { Modal } from 'antd';

function Forget() {
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Reset error state

        try {
            const response = await fetch('https://pi-drive-1.onrender.com/forget_password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // No authorization header needed for this request
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setIsModalOpen(true); // Show modal if request is successful
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred. Please try again.');
                console.error('Error during password reset request:', errorData);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error('Error during password reset request:', error);
        }
    };

    const handleOk = () => {
        setIsModalOpen(false);
        navigate('/reset'); // Redirect to the reset password page
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
                    <h2 className="text-lg font-bold text-blue-500 mb-4 text-center">FORGOT PASSWORD</h2>
                    <h4 className="text-center text-gray-400 font-medium text-xs mb-4">Kindly fill in your email below</h4>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                style={{ color: 'blue' }}
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded w-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            <span className="text-[#FFFFFF]">Get Token</span>
                        </button>
                        {error && <p className="text-red-600 mt-4">{error}</p>}
                        <div className="mt-2 text-center w-full">
                            <p className="text-sm">Remember password?
                                <Link to="/signin" className="text-blue-500 hover:underline"> Back to Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <Modal
                title="Enter Verification Code"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <button
                        key="submit"
                        className="bg-[#2B74B9] text-[#FFFFFF] font-bold py-2 px-4 rounded w-full"
                        onClick={handleOk}
                    >
                        Verify Email
                    </button>
                ]}
            >
                <p className="text-xs mb-4 text-center text-gray-400">Please enter the Token sent to your email</p>
                <input
                    type="text"
                    placeholder="00000000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                />
            </Modal>
        </div>
    );
}

export default Forget;
