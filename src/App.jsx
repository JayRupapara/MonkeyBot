import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MonkeyProvider } from './components/MonkeyContext';
import Invite from './pages/Invite';
import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
import Games from './pages/Games';

const App = () => {
  return (
    <MonkeyProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Invite" element={<Invite />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </MonkeyProvider>
  );
};

export default App;
