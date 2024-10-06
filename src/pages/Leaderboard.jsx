import React from "react";
import Navigation from "../components/Navigation";
import { useMonkeyContext } from '../components/MonkeyContext'; // Importing context


const Leaderboard = () => {
  // Create an array of 100 dummy users
  const { monkeyCoins } = useMonkeyContext(); // Access monkeyCoins from context

  const users = Array.from({ length: 100 }, (_, index) => ({
    name: `USER ${index + 1}`,
    monkeys: 999999,
    rank: index + 1,
  }));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="w-[90%] mx-auto">
        {/* Title */}
        <h1 className="text-xl font-bold mt-6">TELEGRAM WALL OF FRAME</h1>
        
        {/* Top User Card */}
        <div className="bg-gray-800 rounded-lg flex items-center justify-between w-full p-4 mt-4 shadow-lg border border-white">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">RONAK KAVAR</p>
              <p className="text-sm">{monkeyCoins.toLocaleString()} MONKEYS</p>
            </div>
          </div>
          <p className="text-2xl font-bold">#9</p>
        </div>

        {/* Holders List */}
        <div className="bg-gray-900 rounded-lg w-full p-4 mt-6 shadow-lg border border-white">
          <p className="font-semibold">9,99,999 HOLDERS</p>
          <p className="text-right text-sm">(TOP 100)</p>

          {/* Dynamically Render 100 Users */}
          {users.map((user) => (
            <div key={user.rank} className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm">{user.monkeys.toLocaleString()} MONKEYS</p>
                </div>
              </div>
              <p className="font-semibold">#{user.rank}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Navigation */}
      <div className="sticky bottom-0 w-full">
        <Navigation />
      </div>
    </div>
  );
};

export default Leaderboard;
