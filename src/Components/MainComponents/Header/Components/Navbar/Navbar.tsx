/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from 'classnames/bind';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const Navbar: React.FC = () => {
   const [isActive, setIsActive] = useState(false);
   const mobileNavbarRef = useRef<HTMLDivElement>(null);

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

   const handleClickOutside = (event: MouseEvent) => {
      if (mobileNavbarRef.current && !mobileNavbarRef.current.contains(event.target as Node)) {
         setIsActive(false);
         const checkbox = document.getElementById('show-hide-navbar') as HTMLInputElement;
         if (checkbox) {
            checkbox.checked = false;
         }
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <>
         <nav className={cx('navbar')}>
            <ul className={cx('navbar-list')}>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="aboutme" offset={-100} smooth={true} duration={50}>
                     About Me
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="education" offset={-100} smooth={true} duration={50}>
                     Education
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="experience" offset={-100} smooth={true} duration={50}>
                     Experience
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="portfolio" offset={-100} smooth={true} duration={50}>
                     Portfolio
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="contact" offset={-100} smooth={true} duration={50}>
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
         <label
            htmlFor="show-hide-navbar"
            className={cx('menu-toggle', { active: isActive })}
            onClick={handleMenuToggle}
         >
            <div className={cx('bar')}></div>
            <div className={cx('bar')}></div>
            <div className={cx('bar')}></div>
         </label>
         <input type="checkbox" name="" id="show-hide-navbar" className={cx('menu-toggle', 'hiden')} hidden />
         <nav className={cx('mobile-navbar')} ref={mobileNavbarRef}>
            <ul className={cx('mobile-navbar-list')}>
               <li className={cx('mobile-navbar-item')}>
                  <Link
                     className={cx('mobile-navbar-link')}
                     onClick={handleLinkClick}
                     to="aboutme"
                     offset={-70}
                     smooth={true}
                     duration={50}
                  >
                     About Me
                  </Link>
               </li>
               <li className={cx('mobile-navbar-item')}>
                  <Link
                     className={cx('mobile-navbar-link')}
                     onClick={handleLinkClick}
                     to="education"
                     offset={-70}
                     smooth={true}
                     duration={50}
                  >
                     Education
                  </Link>
               </li>
               <li className={cx('mobile-navbar-item')}>
                  <Link
                     className={cx('mobile-navbar-link')}
                     onClick={handleLinkClick}
                     to="experience"
                     offset={-70}
                     smooth={true}
                     duration={50}
                  >
                     Experience
                  </Link>
               </li>
               <li className={cx('mobile-navbar-item')}>
                  <Link
                     className={cx('mobile-navbar-link')}
                     onClick={handleLinkClick}
                     to="portfolio"
                     offset={-70}
                     smooth={true}
                     duration={50}
                  >
                     Portfolio
                  </Link>
               </li>
               <li className={cx('mobile-navbar-item')}>
                  <Link
                     className={cx('mobile-navbar-link')}
                     onClick={handleLinkClick}
                     to="contact"
                     offset={-70}
                     smooth={true}
                     duration={50}
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
