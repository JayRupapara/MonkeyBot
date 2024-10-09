import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create a MonkeyContext
const MonkeyContext = createContext();

// Custom hook to use the MonkeyContext in any component
export const useMonkey = () => {
  const context = useContext(MonkeyContext);
  if (!context) {
    throw new Error('useMonkey must be used within a MonkeyProvider');
  }
  return context;
};

// MonkeyProvider Component that wraps around children
export const MonkeyProvider = ({ children }) => {
  const [monkeyCoins, setMonkeyCoins] = useState(0); // Initialize monkeyCoins state

  // On component mount, retrieve coins from localStorage
  useEffect(() => {
    const storedCoins = localStorage.getItem('monkeyCoins');
    if (storedCoins) {
      setMonkeyCoins(Number(storedCoins)); // Initialize state with the stored value
    }
  }, []);

  // Function to update coins and store the updated value in localStorage
  const updateCoins = (newCoins) => {
    setMonkeyCoins((prevCoins) => {
      const updatedCoins = prevCoins + newCoins;
      localStorage.setItem('monkeyCoins', updatedCoins); // Store the updated value
      return updatedCoins;
    });
  };

  // Utility function to format large numbers
  const formatCoins = (coins) => {
    if (coins >= 1_000_000) {
      return (coins / 1_000_000).toFixed(1) + 'm';
    } else if (coins >= 1_000) {
      return (coins / 1_000).toFixed(1) + 'k';
    }
    return coins.toString();
  };

  return (
    <MonkeyContext.Provider value={{ monkeyCoins: formatCoins(monkeyCoins), updateCoins }}>
      {children} {/* Render children passed into the provider */}
    </MonkeyContext.Provider>
  );
};

// PropTypes validation for the MonkeyProvider
MonkeyProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children are provided and it's a node (JSX)
};

export default MonkeyProvider;
