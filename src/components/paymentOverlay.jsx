import React, { useState } from 'react';
import { Modal } from 'antd';

function PaymentOverlay({ open, paymentMethod, onClose }) {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');  // Reset error state

        const paymentDetails = {
            email,
            amount,
        };

        try {
            const response = await fetch('https://pi-drive-1.onrender.com/paystack/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYW1zZWxyYXR0dXNzQGdtYWlsLmNvbSIsImV4cCI6MTcyMzY5
          MzU4NH0.xa0jToVXgwIn1_q4YOCPi3QKyg1PgiyqIJyOBIJhj1s`,
                },
                body: JSON.stringify(paymentDetails),
            });

            if (response.ok) {
                const result = await response.json();
                // Handle successful payment
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Payment failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <Modal
            title="Make Payment"
            open={open}
            onCancel={onClose}
            footer={null}
        >
            <div className="flex flex-col items-center justify-center gap-4">
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-full'>
                        <label htmlFor="Email" className='font-semibold text-lg '>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-500 mt-2"
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="Amount" className='font-semibold text-lg '>Amount</label>
                        <input
                            type="number"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-3 py-2 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-500 mt-2"
                        />
                    </div>
                </div>
                <img src={paymentMethod} alt="Payment Method" className="w-[200px] mt-4" />

                {error && (
                    <p className="text-red-600 text-center mt-4">{error}</p>
                )}

                <button
                    className="mt-4 w-[400px] h-[50px] bg-blue-700 text-[#ffffff] text-xl leading-7 font-bold rounded-lg"
                    onClick={handleSubmit}
                >
                    Make Payment
                </button>
            </div>
        </Modal>
    );
}

export default PaymentOverlay;
