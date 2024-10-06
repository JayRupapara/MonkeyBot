import React, { useState } from "react";
import { FaEye, FaUsers, FaBell, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from "../assets/Logo.png";
import Toncoin from "../assets/Toncoin.png";
import { useMonkeyContext } from '../components/MonkeyContext'; // Importing context


const Home = () => {
  const navigate = useNavigate();
  const { monkeyCoins } = useMonkeyContext(); // Access monkeyCoins from context
  const [showNotifications, setShowNotifications] = useState(false);

  const handleInviteClick = () => {
    navigate("/Invite");
  };

  const notifications = [
    "You have a new message from Alice.",
    "Your task 'Invite Friends' is due soon.",
    "Don't forget to check your rewards!",
    "You have a new message from Alice.",
    "Your task 'Invite Friends' is due soon.",
    "Don't forget to check your rewards!",
    "You have a new message from Alice.",
    "Your task 'Invite Friends' is due soon.",
    "Don't forget to check your rewards!",
    // Add more notifications as needed
  ];

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="bg-black text-white flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white text-black">
        <h1 className="text-xl font-bold">Monkey Coin</h1>
        <button onClick={toggleNotifications} className="text-black">
          <FaBell className="w-6 h-6" />
        </button>
      </header>

      {/* Notification Popup */}
      {showNotifications && (
        <div className="fixed inset-0 flex h-fit justify-center z-50 shadow-lg">
          <div className="bg-white text-black rounded-lg shadow-lg w-11/12 md:w-2/5 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Notifications</h2>
              <button onClick={toggleNotifications}>
                <FaTimes className="w-5 h-5 text-black" />
              </button>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {notifications.length === 0 ? (
                <p>No notifications</p>
              ) : (
                notifications.map((notification, index) => (
                  <div key={index} className="p-2 border-b border-gray-300">
                    {notification}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex flex-col items-center p-4 ">
        {/* Monkey Icon and Score */}
        <div className="flex space-x-4 w-full justify-between">
          <button className="bg-gradient-to-r from-blue-900 to-blue-500 hover:from-blue-500 hover:to-blue-300 text-white w-1/3 py-2 rounded-lg shadow-md text-center">
            <FaEye className="inline-block mr-2" />
            Your Reward
            <br />
            {monkeyCoins.toLocaleString()}
          </button>
          <button className="bg-gradient-to-r from-green-900 to-green-500 hover:from-green-500 hover:to-green-300 text-white w-1/3 py-2 rounded-lg shadow-md text-center">
            <FaUsers className="inline-block mr-2" />
            Tasks
            <br />
            29.9K
          </button>
          <button className="bg-gradient-to-r from-yellow-900 to-orange-500 hover:from-orange-500 hover:to-orange-300 text-white w-1/3 py-2 rounded-lg shadow-md text-center">
            <FaBell className="inline-block mr-2" />
            Invites
            <br />
            59.9K
          </button>
        </div>
        <h1 className="text-4xl font-bold mt-6">{monkeyCoins.toLocaleString()} MONKEYS</h1>
        <img src={Logo} alt="Monkey Logo" className="h-44" />

        {/* Buttons for Rewards, Tasks, Invites */}

        {/* Daily Tasks */}
        <section className="my-4 w-full">
          <h2 className="text-lg font-bold">Your Daily Tasks</h2>

          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
            <div>
              <p className="text-sm">MAKE TON TRANSACTION</p>
              <p className="text-xs text-gray-400">
                +10,000 MONKEYS | 1 COMPLETE
              </p>
            </div>
            <img src={Toncoin} alt="TON" className="h-10" />
          </div>

          {/* Additional Tasks */}
          <h2 className="text-lg font-bold my-4">Tasks</h2>

          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
            <div>
              <p className="text-sm">INVITE FRIENDS</p>
              <p className="text-xs text-gray-400">
                +20,000 MONKEYS | 1/5 COMPLETE
              </p>
            </div>
            <button
              onClick={handleInviteClick}
              className="flex flex-col items-center"
            >
              <FaUsers className="w-6 h-6" />
            </button>
          </div>

          {/* Add more task cards here as needed... */}
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white"
            >
              <div>
                <p className="text-sm">JOIN OUR TELEGRAM COMMUNITY</p>
                <p className="text-xs text-gray-400">+1,000 MONKEYS</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-400 px-4 py-1 text-xs rounded-lg shadow-md">
                JOIN
              </button>
            </div>
          ))}
        </section>
      </main>
      {/* Bottom Navigation */}
      <div className="sticky bottom-0">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
