import React, { createContext, useState } from "react";
export const ColorblindContext = createContext();

const ColorblindProvider = ({ children }) => {
  const [isColorblind, setIsColorblind] = useState(false);
  const toggleColorblind = () => {
    setIsColorblind(!isColorblind);
  };
  return (
    <ColorblindContext.Provider value={{ isColorblind, toggleColorblind }}>
      {children}
    </ColorblindContext.Provider>
  );
};

export default ColorblindProvider;
