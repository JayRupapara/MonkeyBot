import { useState, useEffect } from "react";
import { FaEye, FaUsers, FaGamepad } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from "../assets/Logo.png";
import Toncoin from "../assets/Toncoin.png";
import { useMonkey } from "../components/MonkeyContext";
import Popup from "../components/PopUp";
import DailyCheckInPopup from "../components/DailyCheckInPopup"; 

const Home = () => {
  const navigate = useNavigate(); // Use this for navigation
  const { monkeyCoins, updateCoins } = useMonkey();
  const [showPopup, setShowPopup] = useState(false);
  const [showCheckInPopup, setShowCheckInPopup] = useState(false);
  const [showElitePopup, setShowElitePopup] = useState(false); // New state for Elite Pass popup

  // Track current day and daily check-in status for 7 days
  const [currentDay, setCurrentDay] = useState(1);
  const [checkInStatus, setCheckInStatus] = useState([false, false, false, false, false, false, false]);
  const [rewards, setRewards] = useState([]);

  // Function to generate rewards based on the specified range
  const generateRewards = () => {
    const rewards = [];
    for (let day = 1; day <= 7; day++) {
      const min = (day - 1) * 1000 + 100;
      const max = day * 1000;
      const randomReward = Math.floor(Math.random() * (max - min + 1)) + min;
      rewards.push(randomReward);
    }
    return rewards;
  };

  // On mount, calculate rewards for each day
  useEffect(() => {
    const calculatedRewards = generateRewards();
    setRewards(calculatedRewards);
  }, []);

  // Handle opening the Daily Check-In popup
  const handleDailyCheckInClick = () => {
    setShowCheckInPopup(true); // Open the Daily Check-In popup
  };

  // Simulate checking in and move to the next day
  const handleCheckInForToday = () => {
    if (!checkInStatus[currentDay - 1]) {
      const newCheckInStatus = [...checkInStatus];
      newCheckInStatus[currentDay - 1] = true;
      setCheckInStatus(newCheckInStatus);
      updateCoins(rewards[currentDay - 1]);
      if (currentDay < 7) setCurrentDay(currentDay + 1);
      setShowCheckInPopup(false);
    }
  };

  // Define the invite handling function
  const handleInviteClick = () => {
    navigate("/Invite"); // Navigate to the invite page
  };

  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white text-black">
        <h1 className="text-xl font-bold">Monkey Coin</h1>
        <button
          onClick={() => setShowElitePopup(true)} // Open Elite Pass popup
          className="bg-yellow-500 hover:bg-opacity-50 text-black font-bold px-4 py-2 rounded-md animate-bounce"
          style={{ position: "sticky", top: "0", right: "10px" }}
        >
          Join Elite
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold">{monkeyCoins.toLocaleString()} MONKEYS</h1>
        <img src={Logo} alt="Monkey Logo" className="h-36" />

        <div className="flex space-x-4 w-full justify-between mt-6">
          <button
            className="border bg-gray-800 text-white w-1/3 py-2 rounded-lg shadow-md text-center"
            onClick={() => setShowPopup(true)}
          >
            <FaEye className="inline-block mr-2" />
            Total
            <br />
            {monkeyCoins.toLocaleString()}
          </button>
          <button
            className="border bg-gray-800 text-white w-1/3 py-2 rounded-lg shadow-md text-center"
            onClick={handleInviteClick}
          >
            <FaUsers className="inline-block mr-2" />
            Friends
            <br />
            0
          </button>
          <button className="border bg-gray-800 text-white w-1/3 py-2 rounded-lg shadow-md text-center">
            <FaGamepad className="inline-block mr-2"/>
            Games
            <br />
            0
          </button>
        </div>

        {/* Daily Tasks Section */}
        <section className="my-4 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Your Daily Tasks</h2>
            <button
              className="bg-white hover:bg-opacity-50 text-black px-4 py-2 rounded-lg ml-4 shadow-lg font-bold"
              onClick={handleDailyCheckInClick}
            >
              Daily Check-In
            </button>
          </div>

          {/* Task Card */}
          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
            <div>
              <p className="text-sm">MAKE TON TRANSACTION</p>
              <p className="text-xs text-gray-400">+10,000 MONKEYS | 1 COMPLETE</p>
            </div>
            <img src={Toncoin} alt="TON" className="h-10" />
          </div>

          {/* Invite Task */}
          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
            <div>
              <p className="text-sm">INVITE FRIENDS</p>
              <p className="text-xs text-gray-400">+20,000 MONKEYS | 1/5 COMPLETE</p>
            </div>
            <button onClick={handleInviteClick} className="flex flex-col items-center">
              <FaUsers className="w-6 h-6" />
            </button>
          </div>

          {/* Telegram Task */}
          <h2 className="text-lg font-bold my-4">Tasks</h2>
          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
            <div>
              <p className="text-sm">JOIN OUR TELEGRAM COMMUNITY</p>
              <p className="text-xs text-gray-400">+1,000 MONKEYS</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 px-4 py-1 text-xs rounded-lg shadow-md">
              JOIN
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 z-50">
        <Navigation />
      </div>

      {/* Popup for Rewards */}
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          rewards={0} // Update logic as needed
          updateCoins={updateCoins}
        />
      )}

      {/* Daily Check-In Popup */}
      {showCheckInPopup && (
        <DailyCheckInPopup
          onClose={() => setShowCheckInPopup(false)}
          currentDay={currentDay}
          checkInStatus={checkInStatus}
          rewards={rewards}
          onCheckIn={handleCheckInForToday}
        />
      )}

      {/* Elite Pass Popup */}
      {showElitePopup && (
        <div
          className="fixed inset-0 flex items-center justify-center mx-4"
          onClick={() => setShowElitePopup(false)}
        >
          <div className="bg-white text-black p-8 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowElitePopup(false)}
              className="absolute top-2 right-2 text-black text-4xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Join Elite Pass</h2>
            <p className="text-center">Join the Elite Pass and make 2x your earnings!</p>
            <p className="text-center text-lg font-semibold mt-2">$4.99 only</p>
            <button className="bg-yellow-500 hover:bg-opacity-50 text-black font-bold px-4 py-2 mt-4 rounded-md mx-auto block">
              Join Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
