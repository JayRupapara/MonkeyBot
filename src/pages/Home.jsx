import { useState } from "react";
import { FaEye, FaUsers, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from "../assets/Logo.png";
import Toncoin from "../assets/Toncoin.png";
import { useMonkey } from '../components/MonkeyContext';
import Popup from "../components/PopUp"; 

const Home = () => {
  const navigate = useNavigate();
  const { monkeyCoins, setMonkeyCoins } = useMonkey(); 
  const [showPopup, setShowPopup] = useState(false); 
  const rewards = 1000; // Example reward value
  console.log('you have '+ {monkeyCoins});

  // Handle navigation to the Invite page
  const handleInviteClick = () => {
    navigate("/Invite");
  };

  // Handle showing the popup when clicking "Continue"
  const handleContinueClick = () => {
    setShowPopup(true); 
  };

  // Handle closing the popup and updating Monkey Coins
  const handleClosePopup = () => {
    console.log("Popup closed"); // Debugging statement
    updateCoins(rewards);  // Add rewards to monkeyCoins
    setShowPopup(false);   // Close popup
    navigate('/');         // Redirect to home page after closing the popup
  };
  
  // Update Monkey Coins in context
  const updateCoins = (newCoins) => {
    console.log("updateCoins in Home before passing to Popup:", updateCoins); // Should log the function
    setMonkeyCoins(prevCoins => prevCoins + newCoins); // Ensure this logic exists
  };
  
  

  return (
    <div className="bg-black text-white flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white text-black">
        <h1 className="text-xl font-bold">Monkey Coin</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex flex-col items-center p-4">
        {/* Monkey Coins Display */}
        <h1 className="text-3xl font-bold">{monkeyCoins.toLocaleString()} MONKEYS</h1>
        <img src={Logo} alt="Monkey Logo" className="h-36" />
        
        {/* Buttons for Actions */}
        <div className="flex space-x-4 w-full justify-between mt-6">
          <button className="border bg-gray-800 text-white w-1/3 py-2 rounded-lg shadow-md text-center" onClick={handleContinueClick}>
            <FaEye className="inline-block mr-2" />
            Total
            <br />
            {monkeyCoins.toLocaleString()}
          </button>
          <button className="border bg-gray-800 text-white w-1/3 py-2 rounded-lg shadow-md text-center">
            <FaUsers className="inline-block mr-2" />
            Tasks
            <br />
            29.9K
          </button>
          <button className="border bg-gray-800 text-white w-1/3 py-2 rounded-lg shadow-md text-center">
            <FaBell className="inline-block mr-2" />
            Invites
            <br />
            59.9K
          </button>
        </div>

        {/* Daily Tasks Section */}
        <section className="my-4 w-full">
          <h2 className="text-lg font-bold">Your Daily Tasks</h2>

          {/* Sample Task Card */}
          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
            <div>
              <p className="text-sm">MAKE TON TRANSACTION</p>
              <p className="text-xs text-gray-400">+10,000 MONKEYS | 1 COMPLETE</p>
            </div>
            <img src={Toncoin} alt="TON" className="h-10" />
          </div>

          {/* Invite Task */}
          <h2 className="text-lg font-bold my-4">Tasks</h2>
          <div className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
            <div>
              <p className="text-sm">INVITE FRIENDS</p>
              <p className="text-xs text-gray-400">+20,000 MONKEYS | 1/5 COMPLETE</p>
            </div>
            <button onClick={handleInviteClick} className="flex flex-col items-center">
              <FaUsers className="w-6 h-6" />
            </button>
          </div>

          {/* Additional Tasks (Loop for Multiple Tasks) */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className="bg-gray-800 p-4 mt-4 rounded-lg flex justify-between items-center shadow-md border border-white">
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

      {/* Popup for Rewards */}
      {
      showPopup && (
        
  <Popup
    onClose={handleClosePopup}
    rewards={rewards}
    updateCoins={updateCoins} // This function should be passed properly
  />
)}

      </div>
  );
};

export default Home;
