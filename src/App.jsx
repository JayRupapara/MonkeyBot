import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Airdrop from './pages/Airdrop';
import Invite from './pages/Invite';
import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
// import Achievements from './pages/Achievements'; // Make sure this component exists
// import Friends from './pages/Friends'; // Make sure this component exists
// import Settings from './pages/Settings'; // Make sure this component exists
// import Navigation from './components/Navigation'; // If you have a separate Navigation component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Airdrop" element={<Airdrop />} />
          <Route path="/Invite" element={<Invite />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
