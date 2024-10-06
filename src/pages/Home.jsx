import React from 'react';
import { FaEye, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
  const navigate = useNavigate();

  const handleInviteClick = () => {
    navigate('/Invite');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2">
        <span className="text-sm">YOUR SCORE</span>
        <img src="/path/to/eye-icon.png" alt="eye-icon" className="w-6 h-6" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center">
        {/* Monkey Icon and Score */}
        <img src="/path/to/monkey-icon.png" alt="Monkey Logo" className="w-24 h-24" />
        <h1 className="text-4xl font-bold mt-2">99,999 MONKEYS</h1>

        {/* Buttons for Rewards, Tasks, Invites */}
        <div className="flex space-x-4 mt-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md">Your Reward<br />9.9K</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md">Tasks<br />29.9K</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md">Invites<br />59.9K</button>
        </div>

        {/* Daily Tasks */}
        <section className="mt-8 w-full px-4">
          <h2 className="text-lg font-bold">Your Daily Tasks</h2>

          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md">
            <div>
              <p className="text-sm">MAKE TON TRANSACTION</p>
              <p className="text-xs text-gray-400">+10,000 MONKEYS | 1 COMPLETE</p>
            </div>
            <img src="/path/to/ton-icon.png" alt="TON" className="w-6 h-6" />
          </div>

          {/* Additional Tasks */}
          <h2 className="text-lg font-bold mt-8">Tasks</h2>

          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md">
            <div>
              <p className="text-sm">INVITE FRIENDS</p>
              <p className="text-xs text-gray-400">+20,000 MONKEYS | 1/5 COMPLETE</p>
            </div>
            <button onClick={handleInviteClick} className="flex flex-col items-center">
              <FaUsers className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md">
            <div>
              <p className="text-sm">JOIN OUR TELEGRAM COMMUNITY</p>
              <p className="text-xs text-gray-400">+1,000 MONKEYS</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 px-4 py-1 text-xs rounded-lg shadow-md">JOIN</button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Home;
