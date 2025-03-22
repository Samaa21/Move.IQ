
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleDarkMode }) => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      {/* Move.IQ Logo on the Left */}
      <NavLink to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
        Move.IQ
      </NavLink>

      {/* Navbar Links on the Right */}
      <ul className="flex space-x-8 font-bold ml-auto">
        <li>
          <NavLink
            to="/"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            activeClassName="text-gray-800"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ai"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            activeClassName="text-gray-800"
          >
            YogZone
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ex"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            activeClassName="text-gray-800"
          >
            Exercises
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diet"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            activeClassName="text-gray-800"
          >
            Diet Chart
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/exerciseplanner"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            activeClassName="text-gray-800"
          >
          Exercise Planner
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            activeClassName="text-gray-800"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            activeClassName="text-gray-800"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded-md ml-4 hover:bg-gray-700 transition-colors"
      >
        Toggle Dark Mode
      </button>

      {/* Login Icon */}
      <NavLink
        to="/login"
        className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 hover:text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </NavLink>
    </div>
  </nav>
);

export default Navbar;