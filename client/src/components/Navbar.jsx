import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons8-c-ios-17-filled-32.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="z-50 top-0 sticky w-screen bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="text-white text-[20px] font-mono flex gap-2 justify-center items-center"
            >
              <img src={logo} alt="" className="h-[32px] w-[32px]" />
              CodeWorks
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition duration-300 text-xl font-mono  px-3 py-1 rounded-md ${
                  isActive ? "bg-gray-700 text-white " : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/codespace"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition duration-300 text-xl font-mono  px-3 py-1 rounded-md ${
                  isActive ? "bg-gray-700 text-white " : ""
                }`
              }
            >
              CodeSpace
            </NavLink>
            <NavLink
              to="/devspace"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition duration-300 text-xl font-mono  px-3 py-1 rounded-md ${
                  isActive ? "bg-gray-700 text-white " : ""
                }`
              }
            >
              DevSpace
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-col space-y-2 items-end">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition duration-300 text-xl font-mono ${
                  isActive ? "bg-gray-700 text-white font-bold px-4 py-2 rounded-md" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/codespace"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition duration-300 text-xl font-mono ${
                  isActive ? "bg-gray-700 text-white font-bold px-4 py-2 rounded-md" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              CodeSpace
            </NavLink>
            <NavLink
              to="/devspace"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition duration-300 text-xl font-mono ${
                  isActive ? "bg-gray-700 text-white font-bold px-4 py-2 rounded-md" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              DevSpace
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
