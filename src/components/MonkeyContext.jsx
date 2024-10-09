import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for validation

// Create a MonkeyContext
const MonkeyContext = createContext();

// Hook to use MonkeyContext in any component
export const useMonkey = () => {
  return useContext(MonkeyContext);
};

// MonkeyProvider Component that wraps around children
export const MonkeyProvider = ({ children }) => {
  const [monkeyCoins, setMonkeyCoins] = useState(0);  // Initialize monkeyCoins state

  // Function to update coins
  const updateCoins = (newCoins) => {
    setMonkeyCoins((prevCoins) => prevCoins + newCoins);
  };

  return (
    <MonkeyContext.Provider value={{ monkeyCoins, updateCoins }}>
      {children}  {/* Render children passed into the provider */}
    </MonkeyContext.Provider>
  );
};

// PropTypes validation for the MonkeyProvider
MonkeyProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that children are provided and it's a node (JSX)
};

export default MonkeyProvider;
