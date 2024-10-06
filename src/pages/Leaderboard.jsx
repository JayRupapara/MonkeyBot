import React from 'react';
import Navigation from '../components/Navigation';

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
      <p className="text-lg">Top users will be displayed here!</p>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Leaderboard;
