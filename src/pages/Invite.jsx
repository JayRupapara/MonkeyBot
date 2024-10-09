// import React from 'react';
import { FaUser } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Logo from '../assets/Logo.png'; // Use the correct path for your monkey logo

const Invite = () => {
  const friends = [
    { name: "FRIEND 1", monkeys: "+225 MONKEYS" },
    { name: "FRIEND 2", monkeys: "+99 MONKEYS" },
    { name: "FRIEND 3", monkeys: "+91 MONKEYS" },
    { name: "FRIEND 4", monkeys: "+9 MONKEYS" },
    { name: "FRIEND 5", monkeys: "+999 MONKEYS" },
    { name: "FRIEND 1", monkeys: "+225 MONKEYS" },
    { name: "FRIEND 2", monkeys: "+99 MONKEYS" },
    { name: "FRIEND 3", monkeys: "+91 MONKEYS" },
    { name: "FRIEND 4", monkeys: "+9 MONKEYS" },
    { name: "FRIEND 5", monkeys: "+999 MONKEYS" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center">
      {/* Invite Friends Section */}
      <div className="flex flex-col items-center mt-8 mx-auto ">
        <img src={Logo} alt="Monkey Logo" className="h-36" />
        <h2 className="text-xl font-bold mt-4 text-center mx-2">INVITE FRIENDS AND GETS MORE MONKEYS</h2>
        
        <button className="bg-white text-black px-6 py-2 mt-4 rounded-full shadow-md hover:bg-gray-300 focus:outline-none">
          INVITE FRIENDS
        </button>
      </div>

      {/* Friends List */}
      <div className="mt-8 w-11/12">
        <h2 className="text-lg font-bold">{friends.length} FRIENDS</h2>
        <div className="mt-4">
          {friends.map((friend, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-2 shadow-md">
              <div className="flex items-center">
                <FaUser className="text-white w-5 h-5 mr-2" />
                <span>{friend.name}</span>
              </div>
              <span className="text-sm">{friend.monkeys}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Design */}
      <div className="sticky bottom-0 w-full text-center">
        
        {/* Bottom Navigation */}
        <Navigation />
      </div>
    </div>
  );
};

export default Invite;
