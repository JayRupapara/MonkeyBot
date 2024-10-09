import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MonkeyProvider } from './components/MonkeyContext';  // Import context provider
import Invite from './pages/Invite';
import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
import Games from './pages/Games';
import Verification from './pages/Verification'; 
import './index.css';

const App = () => {
  const [verified, setVerified] = useState(false); // Track if verification is completed

  useEffect(() => {
    // Check if the user is already verified in localStorage
    const isVerified = localStorage.getItem('verified');
    if (isVerified === 'true') {
      setVerified(true);
    }
  }, []);

  const handleContinueVerification = () => {
    setVerified(true);
    localStorage.setItem('verified', 'true'); // Store verification status in localStorage
  };

  return (
    <MonkeyProvider>  {/* Make sure all components are wrapped in the context */}
      <Router>
        <Routes>
          {!verified ? (
            <>
              {/* Verification page */}
              <Route
                path="/"
                element={<Verification onContinue={handleContinueVerification} />}
              />
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
