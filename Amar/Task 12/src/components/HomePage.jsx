import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-r bg-gray-900 text-white bg-opacity-90 flex flex-col items-center justify-center px-6 text-center">
                <h1 className="text-5xl font-bold text-gray-300 opacity-80 drop-shadow-lg mb-4">
                    Welcome to Our Website
                </h1>

                {/* Additional Content */}
                <p className="text-lg text-gray-400 max-w-2xl">
                    This website is built using React and React Router DOM, allowing seamless 
                    navigation between different pages. React Router helps in creating a 
                    single-page application (SPA) with multiple views without needing full-page reloads.
                </p>

                <p className="text-md text-gray-400 mt-4">
                    Explore different sections of our website using the navigation bar above. 
                    Click the button below to visit our contact page and learn more.
                </p>

                {/* Navigation Button */}
                <Link
                    to="/contact"
                    className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                >
                    Go to Contact Page
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
