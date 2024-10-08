import PropTypes from 'prop-types';

const Popup = ({ onClose, rewards, updateCoins }) => {
  const handlePopupClose = () => {
    updateCoins(rewards);  // Add the rewards to total Monkey Coins
    onClose();  // Close the popup
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Your Rewards</h2>
        <p className="text-lg">
          You have earned <span className="font-semibold">{rewards}</span> Monkey Coins!
        </p>
        <button
          onClick={handlePopupClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  rewards: PropTypes.number.isRequired,
  updateCoins: PropTypes.func.isRequired,  // Add this to validate the prop for updating coins
};

export default Popup;
