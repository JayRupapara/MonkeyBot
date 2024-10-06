import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTrophy, FaUsers, FaCog } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="flex justify-around py-4 bg-white">
      <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
        <FaHome className="w-6 h-6" />
      </NavLink>
      <NavLink to="/Leaderboard" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
        <FaTrophy className="w-6 h-6" />
      </NavLink>
      <NavLink to="/Invite" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
        <FaUsers className="w-6 h-6" />
      </NavLink>
      <NavLink to="/Airdrop" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
        <FaCog className="w-6 h-6" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
