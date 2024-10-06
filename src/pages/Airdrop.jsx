import React from 'react';
import Navigation from '../components/Navigation';

const Airdrop = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center">
      <h1 className="text-4xl font-bold">Airdrop</h1>
      <p className="text-lg">Details about the airdrop will go here.</p>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Airdrop;
