import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-20 px-9 bg-gray-900 flex items-center justify-between shadow-2xl shadow-gray-700'>
            <h1 className='text-3xl drop-shadow-2xl shadow-gray-700 text-white font-semibold'>Task 12</h1>
            <div className='flex gap-9'>
                <Link to="/Form" className='text-2xl drop-shadow-2xl shadow-gray-700 font-medium transition duration-300 text-white hover:text-yellow-300'>Form</Link>
                <Link to="/Foreground" className='text-2xl drop-shadow-2xl shadow-gray-700 font-medium transition duration-300 text-white hover:text-yellow-300'>Docs</Link>
                <Link to="/Contact" className='text-2xl drop-shadow-2xl shadow-gray-700 font-medium transition duration-300 text-white hover:text-yellow-300'>Contact</Link>
            </div>
        </div>

    )
}

export default Navbar
