import { useState } from 'react';
import Popup from '../components/PopUp'; 
import PropTypes from 'prop-types';
import { useMonkey } from '../components/MonkeyContext';  // Import the context hook

const Verification = ({ onContinue }) => {  
  const [showPopup, setShowPopup] = useState(false); 
  const { updateCoins } = useMonkey();  // Retrieve updateCoins from context

  const handleContinue = () => {
    setShowPopup(true); // Show popup when "Continue" is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); 
    onContinue(); // Pass control back to parent (App) to mark verification as completed
  };

  return (
    <div className="bg-black text-white flex flex-col h-screen items-center justify-center">
      <h2 className="text-3xl font-semibold mb-6">Checking your account</h2>
      <ul className="space-y-4 w-full max-w-md">
        <li className="flex items-center justify-between">
          <span>Account Age Verified</span>
          <span className="text-green-500">✔</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Activity Level Analyzed</span>
          <span className="text-green-500">✔</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Telegram Premium Checked</span>
          <span className="text-green-500">✔</span>
        </li>
        <li className="flex items-center justify-between">
          <span>OG Status Confirmed</span>
          <span className="text-green-500">✔</span>
        </li>
      </ul>
      <button onClick={handleContinue} className="continue-button">
        Continue
      </button>
      {showPopup && <Popup onClose={handleClosePopup} rewards={4379} updateCoins={updateCoins} />} {/* Pass updateCoins here */}
    </div>
  );
};

// PropTypes validation
Verification.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default Verification;
