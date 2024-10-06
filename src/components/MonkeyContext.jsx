import React, { createContext, useContext, useEffect, useState } from 'react';

const MonkeyContext = createContext();

export const MonkeyProvider = ({ children }) => {
  const [monkeyCoins, setMonkeyCoins] = useState(() => {
    const savedCoins = localStorage.getItem('monkeyCoins');
    return savedCoins ? JSON.parse(savedCoins) : 0; // Initial value
  });

  useEffect(() => {
    localStorage.setItem('monkeyCoins', JSON.stringify(monkeyCoins));
  }, [monkeyCoins]);

  return (
    <MonkeyContext.Provider value={{ monkeyCoins, setMonkeyCoins }}>
      {children}
    </MonkeyContext.Provider>
  );
};

export const useMonkeyContext = () => useContext(MonkeyContext);
