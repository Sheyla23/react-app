import React, { useState, useContext } from 'react';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const openModal = () => {
    setIsClicked(true);
  };
  const closeModal = () => {
    setIsClicked(false);
  };
  return (
    <AppContext.Provider
      value={{
        isClicked,
        openModal,
        closeModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };