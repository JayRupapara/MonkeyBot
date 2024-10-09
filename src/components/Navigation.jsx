// import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTrophy, FaUsers, FaGamepad } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="w-full flex justify-around py-4 bg-white">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
      >
        <FaHome className="w-6 h-6" />
      </NavLink>
      <NavLink 
        to="/Leaderboard" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
      >
        <FaTrophy className="w-6 h-6" />
      </NavLink>
      <NavLink 
        to="/Invite" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
      >
        <FaUsers className="w-6 h-6" />
      </NavLink>
      <NavLink 
        to="/Games"  // Updated route to reflect the game page
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
      >
        <FaGamepad className="w-6 h-6" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
