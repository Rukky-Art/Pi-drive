import React, { useState } from 'react';
import image10 from '../assets/images/image10.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    sex: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.sex) {
      newErrors.sex = 'Sex is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one special character';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://pi-drive-1.onrender.com/SignUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Sign-up successful', data);
          // Navigate to the Sign-In page on successful sign-up
          navigate('/signin');
        } else {
          const errorData = await response.json();
          console.log('Sign-up failed', errorData);
          // Handle errors returned from the server
          setErrors({ server: errorData.message || 'Sign-up failed. Please try again.' });
        }
      } catch (error) {
        console.error('Error during sign-up', error);
        setErrors({ server: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div className='flex h-screen flex-col'>
      <div className='flex h-[1526]'>
        <div className='laptop:w-[700px] laptop:bg-cover laptop:bg-center laptop:mr-[-100px] 
                  tablet:w-[700px] tablet:bg-cover tablet:bg-center ' style={{ backgroundImage: `url(${image10})` }}></div>
        <div className='flex flex-col w-[638px] gap-[20px] justify-center items-center p-8'>
          <form className='w-screen max-w-sm' onSubmit={handleSubmit}>
            <div className='w-[626px h-[34px] text-[#2B74B9] text-2xl flex justify-center'>
              <p>CREATE YOUR ACCOUNT</p>
            </div>
            <div className='mb-4 tablet:mt-10'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='fullName'>
                Full Name
              </label>
              <input
                className='shadow appearance-none border rounded laptop:w-full tablet:w-full w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='fullName'
                type='text'
                placeholder='Enter First Name First'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && <p className='text-red-500 text-xs italic'>{errors.fullName}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded laptop:w-full tablet:w-full w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phoneNumber'>
                Phone Number
              </label>
              <input
                className='shadow appearance-none border rounded laptop:w-full tablet:w-full w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='phoneNumber'
                type='tel'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {errors.phoneNumber && <p className='text-red-500 text-xs italic'>{errors.phoneNumber}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='sex'>
                Sex
              </label>
              <select
                className='shadow appearance-none border rounded laptop:w-full tablet:w-full w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='sex'
                name='sex'
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value=''>Select Your Sex</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
              {errors.sex && <p className='text-red-500 text-xs italic'>{errors.sex}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Create Password
              </label>
              <input
                className='shadow appearance-none border rounded laptop:w-full tablet:w-full w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className='text-red-500 text-xs italic'>{errors.password}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmPassword'>
                Confirm Password
              </label>
              <input
                className='shadow appearance-none border rounded laptop:w-full tablet:w-full w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <p className='text-red-500 text-xs italic'>{errors.confirmPassword}</p>}
            </div>
            <div className='flex flex-col font-normal ml-[-80px] laptop:ml-0 tablet:ml-0'>
              <p className='flex flex-col items-center text-sm font-bold leading-6 w-[416.6px]'>
                By signing Up, I Agree to PI-DRIVE's
                <span className='text-[#478ECC]'>
                  <NavLink to='/'> Terms and Conditions </NavLink>
                  <span className='text-black'> and </span>
                  <NavLink to='/'>privacy</NavLink>
                </span>
                <NavLink to='/'>
                  <span className='text-[#478ECC]'>policy</span>
                </NavLink>
              </p>
            </div>
            <div className='flex flex-col items-center justify-between mt-5'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Sign Up
              </button>
              {errors.server && <p className='text-red-500 text-xs italic'>{errors.server}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
