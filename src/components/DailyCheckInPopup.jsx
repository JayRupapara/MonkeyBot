// import React from "react";
import PropTypes from 'prop-types';

const DailyCheckInPopup = ({ onClose }) => {
  // Example array representing check-in status for 7 days
  // (true means checked in, false means not checked in yet)
  const checkInStatus = [true, false, false, false, false, false, false];

  return (
    <div className="fixed inset-0 bg-transparent first-line: flex items-center justify-center z-50">
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
        <div className="flex justify-end mt-4">
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
};

export default DailyCheckInPopup;
