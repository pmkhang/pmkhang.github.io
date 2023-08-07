import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/store';
import { toggleDarkMode } from 'redux/slice/darkModeSlice';
import './DarkModeToggle.scss';

interface DarkModeToggleProps {
   className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
   const dispatch = useDispatch();

   const darkModeToggleClassName = className;

   return (
      <div className={darkModeToggleClassName}>
         <div className="switch" onClick={() => dispatch(toggleDarkMode())}>
            <input type="checkbox" checked={darkMode} readOnly />
            <span className="slider round"></span>
         </div>
      </div>
   );
};

export default DarkModeToggle;
