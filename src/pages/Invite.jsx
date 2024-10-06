import React from 'react';
import { FaUsers } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Invite = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center">
      <h1 className="text-4xl font-bold mb-4">Invite Friends</h1>
      <p className="text-lg">Invite your friends to earn rewards!</p>
      <div className="flex items-center mt-4">
        <FaUsers className="w-6 h-6 mr-2" />
        <span className="text-lg">Share your referral link!</span>
      </div>

      {/* Bottom Navigation */}
      <Navigation className="sticky bottom-0" />
    </div>
  );
};

export default Invite;
