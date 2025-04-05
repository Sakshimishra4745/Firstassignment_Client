import React, { useState } from 'react';

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
      <div className='w-[280px] bg-gray-200  h-[720px] p-6 border border-gray-400 shadow-md'>

        <h1 className="text-2xl font-semibold">
          SignIn to your<br />
          <span className="flex items-center">PropX account</span>
        </h1>

        <p className='text-gray-500 mt-2'>
          Lorem ipsum dolor sit amet<br />
          consectetur adipisicing elit.
        </p>

        <br />

        {/* Full Name Input */}
        <div className="relative w-full mb-6">
          <label className="absolute -top-2 left-3 bg-gray-200 px-1 text-sm font-medium text-purple-600">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
             placeholder='Enter Email Address'
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email Input */}
        <div className="relative w-full mb-6">
          <label className="absolute -top-2 left-3 bg-gray-200 px-1 text-sm font-medium text-purple-600">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder='Enter Password'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            required
            className="w-full border border-gray-200 rounded-md px-3 py-2 mt-2 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Login Button */}
        <button
          className={`w-full h-[40px] font-bold text-white text-center rounded-md transition-colors duration-300 ${
            isHovered ? 'bg-blue-500' : 'bg-gray-500'
          }`}
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;
