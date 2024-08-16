import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import image10 from '../assets/images/image10.jpg';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { setToken } = useContext(TokenContext); // Access setToken from TokenContext
    const navigate = useNavigate();

    useEffect(() => {
        const signIn = async () => {
            if (isSubmitting) {
                try {
                    const response = await fetch('https://pi-drive-1.onrender.com/SignIn', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json'
                        },
                        body: JSON.stringify({ email, password })
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setToken(data.token);  // Store the token in context
                        console.log('Sign-in successful:', data);
                        navigate('/book');
                    } else {
                        const errorData = await response.json();
                        setError(errorData.message || 'Sign-in failed');
                    }
                } catch (err) {
                    console.error('Error during sign-in:', err);
                    setError('An error occurred. Please try again.');
                } finally {
                    setIsSubmitting(false);
                }
            }
        };

        signIn();
    }, [isSubmitting, email, password, navigate, setToken]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setIsSubmitting(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="laptop:w-1/2 laptop:bg-cover tablet:w-1/2 tablet:bg-cover" style={{ backgroundImage: `url(${image10})` }}></div>
                <div className="laptop:w-1/2 tablet:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Sign In to your PI-Drive account</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email/Phone Number</label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-700"
                                        >
                                            <path
                                                d="M13.875 13.875A3 3 0 1012 12m.986-8.707C15.227 4.005 18.503 6.103 20 10m1 2c0 1.053-.168 2.086-.476 3.076M19 19l-4.338-4.338M4 4l16 16M10 10a4 4 0 114-4m-1.45-1.45L4.936 4.936C5.88 3.61 8.62 2 12 2c4.97 0 9 3.582 9 8 0 1.26-.23 2.451-.65 3.54M7.338 7.338l-4.88 4.88C2.763 12.36 4.503 10 7.338 7.338z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-700"
                                        >
                                            <path
                                                d="M3.98 8.235C5.86 6.44 8.54 5 12 5c4.97 0 9 3.582 9 8 0 1.26-.23 2.451-.65 3.54M14.121 14.12A3.974 3.974 0 0012 15c-2.21 0-4-1.79-4-4 0-.73.195-1.413.528-2.001M9.878 9.878A3.973 3.973 0 0112 9c2.21 0 4 1.79 4 4 0 .73-.195 1.413-.528 2.001M12 19c-4.97 0-9-3.582-9-8 0-1.26.23-2.451.65-3.54M16 2l-4 4m0 0l-4-4m4 4V14"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <Link to="/forget" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
                        </div>

                        <div className="mb-6">
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mb-6">
                        <p className="text-sm">Don't have an account?
                            <Link to="/signup" className="text-blue-500 hover:underline ml-2">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
