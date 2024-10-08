import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MonkeyProvider } from './components/MonkeyContext'; // Remove useMonkey import here
import Invite from './pages/Invite';
import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
import Games from './pages/Games';
import Verification from './pages/Verification'; // Import the Verification page
import Popup from './components/PopUp'; // Import the Popup component

const App = () => {
  const [showPopup, setShowPopup] = useState(false); // To handle popup visibility
  const [verified, setVerified] = useState(false); // To track if the verification is completed

  const handleContinueVerification = () => {
    setShowPopup(true); // Show popup after verification
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup
    setVerified(true); // Mark verification as done
  };

  return (
    <MonkeyProvider>  {/* Ensure the provider wraps the entire app */}
      <Router>
        <Routes>
          {!verified ? (
            <>
              {/* Verification page */}
              <Route
                path="/"
                element={<Verification onContinue={handleContinueVerification} />}
              />
              {showPopup && (
                <Popup onClose={handleClosePopup} rewards={4379} />
              )}
            </>
          ) : (
            <>
              {/* Once verified, show the rest of the app */}
              <Route path="/" element={<Home />} />
              <Route path="/Games" element={<Games />} />
              <Route path="/Invite" element={<Invite />} />
              <Route path="/Leaderboard" element={<Leaderboard />} />
            </>
          )}
        </Routes>
      </Router>
    </MonkeyProvider>
  );
};

export default App;
