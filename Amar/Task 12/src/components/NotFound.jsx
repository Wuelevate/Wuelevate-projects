import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='min-h-screen bg-[#101828] text-white flex flex-col items-center justify-center px-6'>
      <h1 className='text-5xl font-extrabold text-red-500 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-300 mb-2'>Oops! Page Not Found</h2>
      <p className='text-gray-400 mb-6 text-center'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" className='px-6 py-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg hover:bg-red-500 transition duration-300'>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
