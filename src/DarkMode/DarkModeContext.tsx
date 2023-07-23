import React, { createContext, useState, useContext, useEffect } from 'react';

interface DarkModeContextType {
   darkMode: boolean;
   toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
   darkMode: false,
   toggleDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

interface DarkModeProviderProps {
   children: React.ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
   const [darkMode, setDarkMode] = useState<boolean>(() => {
      const savedDarkMode = localStorage.getItem('darkMode');
      return savedDarkMode ? savedDarkMode === 'true' : false;
   });

   const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
   };

   useEffect(() => {
      localStorage.setItem('darkMode', String(darkMode));
   }, [darkMode]);

   const contextValue: DarkModeContextType = {
      darkMode,
      toggleDarkMode,
   };

   return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
};
