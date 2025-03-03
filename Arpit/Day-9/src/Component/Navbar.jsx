import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <div className="w-full px-6 py-4 bg-blue-900 flex items-center justify-between text-white shadow-md">
      {/* Left Side - Logo */}
      <h1 className="text-2xl font-bold">🛍️ ShopEase</h1>

      {/* Middle - Navigation Links */}
      <div className="flex space-x-8">
        <a href="#" className="hover:text-gray-300 transition">Home</a>
        <a href="#" className="hover:text-gray-300 transition">Favourite</a>
      </div>

      {/* Right Side - Cart Icon */}
      <div className="relative">
        <button className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <span className="text-lg">🛒</span>
          <span>Cart</span>
          {/* Dynamic Cart Item Count */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
