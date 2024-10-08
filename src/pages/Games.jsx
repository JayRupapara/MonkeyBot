import { useState } from 'react';
import Navigation from '../components/Navigation';
import { useMonkey } from '../components/MonkeyContext'; // Adjusted import

const Games = () => {
  const [pointsEarned, setPointsEarned] = useState(0);
  const { setMonkeyCoins } = useMonkey(); // Use the context

  const handleGameWin = () => {
    const earnedPoints = Math.floor(Math.random() * 100); // Random points
    setPointsEarned(earnedPoints);
    setMonkeyCoins(prev => prev + earnedPoints); // Update monkey coins
    alert(`You earned ${earnedPoints} MONKEYS!`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center">
      <h1 className="text-4xl font-bold">Game Zone</h1>
      <p className="text-lg">Click the button to earn monkey coins!</p>
      <button 
        onClick={handleGameWin} 
        className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg mt-4"
      >
        Earn Points!
      </button>
      <p className="mt-4">Points Earned: {pointsEarned}</p>

      {/* Bottom Navigation */}
      <Navigation className="sticky bottom-0" />
    </div>
  );
};

export default Games;
