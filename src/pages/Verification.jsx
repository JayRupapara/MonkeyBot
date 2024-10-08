import { useState } from 'react';
import Popup from '../components/PopUp'; // Import the Popup component
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types'; // Import PropTypes for validation

const Verification = () => { // Remove 'onContinue' as it's not used

  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const navigate = useNavigate(); // For navigating to the home page

  const handleContinue = () => {
    setShowPopup(true); // Show popup when "Continue" is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide popup when closed
    navigate('/'); // Navigate to the home page after popup is closed
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
      {showPopup && <Popup onClose={handleClosePopup} rewards={4379} />}
    </div>
  );
};

// You can remove this, as 'onContinue' is no longer used
// Verification.propTypes = {
//   onContinue: PropTypes.func.isRequired,
// };

export default Verification;
