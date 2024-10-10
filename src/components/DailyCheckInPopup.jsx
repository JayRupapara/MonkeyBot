import PropTypes from 'prop-types';

const DailyCheckInPopup = ({ onClose, currentDay, checkInStatus, rewards, onCheckIn }) => {
  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Daily Check-In</h2>
        <div className="grid grid-cols-7 gap-2">
          {checkInStatus.map((checkedIn, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                checkedIn ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              {checkedIn ? '✔️' : index + 1}
            </div>
          ))}
        </div>

        {/* Display today's reward before the Close button */}
        <div className="mt-4 text-left">
          <p className="font-bold">Today&#39;s Reward: {rewards[currentDay - 1]} Monkey Coins</p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onCheckIn}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            Check In
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
DailyCheckInPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentDay: PropTypes.number.isRequired,
  checkInStatus: PropTypes.arrayOf(PropTypes.bool).isRequired,
  rewards: PropTypes.arrayOf(PropTypes.number).isRequired,
  onCheckIn: PropTypes.func.isRequired, // New prop for handling check-ins
};

export default DailyCheckInPopup;
