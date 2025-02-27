import React from "react";
import { Link, NavLink } from "react-router-dom";


const nav = () => {
  return (
    <nav className="flex items-center gap-20 p-4  bg-gray-200">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>

      
      <NavLink
        className={(e)=>{
            return[
                e.isActive ? "text-red-500" : "",
                e.isActive ? "font-bold" : "",
            ].join(" ");
        }}
        to="/portfolio"
      >
        Portfolio
      </NavLink>
    </nav>
  );
};

export default nav;
