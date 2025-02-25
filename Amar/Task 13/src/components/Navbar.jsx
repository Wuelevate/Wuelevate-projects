// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#5b7fd3] p-4 shadow-lg fixed z-9 w-full">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="#" className="text-white text-xl font-bold tracking-wide">
//           MyLogo
//         </a>
        
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#" className="text-white hover:text-gray-200 transition">Home</a></li>
//           <li><a href="#" className="text-white hover:text-gray-200 transition">About</a></li>
//           <li><a href="#" className="text-white hover:text-gray-200 transition">Services</a></li>
//           <li><a href="#" className="text-white hover:text-gray-200 transition">Contact</a></li>
//         </ul>
        
//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
//           ☰
//         </button>
//       </div>
      
//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-[#708fda] p-4 space-y-2 shadow-md rounded-lg">
//           <li><a href="#" className="text-white block hover:text-gray-200 transition">Home</a></li>
//           <li><a href="#" className="text-white block hover:text-gray-200 transition">About</a></li>
//           <li><a href="#" className="text-white block hover:text-gray-200 transition">Services</a></li>
//           <li><a href="#" className="text-white block hover:text-gray-200 transition">Contact</a></li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
      Professional Chat App
    </nav>
  );
};

export default Navbar;
