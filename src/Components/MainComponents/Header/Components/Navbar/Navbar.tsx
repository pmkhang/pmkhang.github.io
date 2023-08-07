import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import styles from './Navbar.module.scss';
import DarkModeToggle from 'DarkMode/DarkModeToggle';
import LanguageToggle from 'SwitchLanguage/LanguageToggle';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useLanguage } from 'SwitchLanguage/Language';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';

const cx = classNames.bind(styles);

interface MenuItem {
   id: string;
   label: {
      en: string;
      vi: string;
   };
   to: string;
}

const menuItems: MenuItem[] = [
   {
      id: 'aboutme',
      label: {
         en: 'About Me',
         vi: 'Về tôi',
      },
      to: 'aboutme',
   },
   {
      id: 'education',
      label: {
         en: 'Education',
         vi: 'Học vấn',
      },
      to: 'education',
   },
   {
      id: 'experience',
      label: {
         en: 'Experience',
         vi: 'Kinh nghiệm',
      },
      to: 'experience',
   },
   {
      id: 'portfolio',
      label: {
         en: 'Portfolio',
         vi: 'Sản phẩm',
      },
      to: 'portfolio',
   },
   {
      id: 'contact',
      label: {
         en: 'Contact',
         vi: 'Liên hệ',
      },
      to: 'contact',
   },
];

const Navbar: React.FC = () => {
   const [isActive, setIsActive] = useState<boolean>(false);
   // const { darkMode } = useDarkMode();
   // const { language } = useLanguage();
   const language = useSelector((state: RootState) => state.language.language);
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

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
                        onClick={handleLinkClick}
                     >
                        {language === 'vi' ? menuItem.label.vi : menuItem.label.en}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
         <div className={cx('toggle-btn')}>
            <LanguageToggle className={cx('language-toggle')} />
            <label
               htmlFor="show-hide-navbar"
               className={cx('menu-toggle', { active: isActive })}
               onClick={handleMenuToggle}
            >
               <div className={cx('bar', `${darkMode ? 'darkmode' : ''}`)}></div>
               <div className={cx('bar', `${darkMode ? 'darkmode' : ''}`)}></div>
               <div className={cx('bar', `${darkMode ? 'darkmode' : ''}`)}></div>
            </label>
         </div>
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
                        {language === 'vi' ? menuItem.label.vi : menuItem.label.en}
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

