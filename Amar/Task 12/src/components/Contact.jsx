import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-yellow-300 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your name" required />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Message</label>
            <textarea className="w-full p-3 bg-gray-700 text-white rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Write your message..." required></textarea>
          </div>
          <button type="submit" className="w-full p-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
