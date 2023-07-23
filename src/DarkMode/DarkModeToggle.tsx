import React from 'react';
import { useDarkMode } from './DarkModeContext';
import './DarkModeToggle.scss';

interface DarkModeToggleProps {
   className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
   const { darkMode, toggleDarkMode } = useDarkMode();
   const darkModeToggleClassName = className;

   return (
      <div className={darkModeToggleClassName}>
         <div className="switch" onClick={toggleDarkMode}>
            <input type="checkbox" checked={darkMode} readOnly />
            <span className="slider round"></span>
         </div>
      </div>
   );
};

export default DarkModeToggle;
