import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import styles from './Navbar.module.scss';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import DarkModeToggle from 'DarkMode/DarkModeToggle';

const cx = classNames.bind(styles);

interface MenuItem {
   id: string;
   label: string;
   to: string;
}

const menuItems: MenuItem[] = [
   {
      id: 'aboutme',
      label: 'About Me',
      to: 'aboutme',
   },
   {
      id: 'education',
      label: 'Education',
      to: 'education',
   },
   {
      id: 'experience',
      label: 'Experience',
      to: 'experience',
   },
   {
      id: 'portfolio',
      label: 'Portfolio',
      to: 'portfolio',
   },
   {
      id: 'contact',
      label: 'Contact',
      to: 'contact',
   },
];

const Navbar: React.FC = () => {
   const [isActive, setIsActive] = useState(false);
   const { darkMode } = useDarkMode();

   const handleMenuToggle = () => {
      setIsActive(!isActive);
   };
   const handleLinkClick = () => {
      setIsActive(false);
      const checkbox = document.getElementById('show-hide-navbar') as HTMLInputElement;
      if (checkbox) {
         checkbox.checked = false;
      }
   };

   return (
      <>
         <nav className={cx('navbar')}>
            <ul className={cx('navbar-list')}>
               {menuItems.map((menuItem) => (
                  <li key={menuItem.id} className={cx('navbar-item')}>
                     <Link
                        className={cx('navbar-link', `${darkMode ? 'darkmode' : ''}`)}
                        to={menuItem.to}
                        offset={-100}
                        smooth={true}
                        duration={50}
                     >
                        {menuItem.label}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
         <label
            htmlFor="show-hide-navbar"
            className={cx('menu-toggle', { active: isActive })}
            onClick={handleMenuToggle}
         >
            <div className={cx('bar', `${darkMode ? 'darkmode' : ''}`)}></div>
            <div className={cx('bar', `${darkMode ? 'darkmode' : ''}`)}></div>
            <div className={cx('bar', `${darkMode ? 'darkmode' : ''}`)}></div>
         </label>
         <input type="checkbox" name="" id="show-hide-navbar" className={cx('menu-toggle', 'hiden')} hidden />
         <label
            htmlFor="show-hide-navbar"
            className={cx('overlay', { active: isActive })}
            onClick={handleMenuToggle}
         ></label>
         <nav className={cx('mobile-navbar')}>
            <ul className={cx('mobile-navbar-list', `${darkMode ? 'darkmode' : ''}`)}>
               {menuItems.map((menuItem) => (
                  <li key={menuItem.id} className={cx('mobile-navbar-item', `${darkMode ? 'darkmode' : ''}`)}>
                     <Link
                        className={cx('mobile-navbar-link', `${darkMode ? 'darkmode' : ''}`)}
                        onClick={handleLinkClick}
                        to={menuItem.to}
                        offset={-70}
                        smooth={true}
                        duration={50}
                     >
                        {menuItem.label}
                     </Link>
                  </li>
               ))}
               <li className={cx('mobile-navbar-item', 'toggle')}>
                  <DarkModeToggle className={cx('darkmode-toggle')} />
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
