import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

const MonkeyContext = createContext();

export const useMonkey = () => {
  return useContext(MonkeyContext);
};

export const MonkeyProvider = ({ children }) => {
  const [monkeyCoins, setMonkeyCoins] = useState(0); // Initialize MonkeyCoins state

  return (
    <MonkeyContext.Provider value={{ monkeyCoins, setMonkeyCoins }}>
      {children}  {/* Render children here */}
    </MonkeyContext.Provider>
  );
};

// Add propTypes validation
MonkeyProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that children is provided and it's a node (JSX)
};

export default MonkeyProvider;
