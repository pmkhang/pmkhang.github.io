/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const Navbar: React.FC = () => {
   const [isActive, setIsActive] = useState(false);

   const handleMenuToggle = () => {
      setIsActive(!isActive);
   };

   return (
      <>
         <nav className={cx('navbar')}>
            <ul className={cx('navbar-list')}>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="aboutme" offset={-80} smooth={true} duration={50}>
                     About Me
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="education" offset={-80} smooth={true} duration={50}>
                     Education
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="experience" offset={-80} smooth={true} duration={50}>
                     Experience
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="portfolio" offset={-80} smooth={true} duration={50}>
                     Portfolio
                  </Link>
               </li>
               <li className={cx('navbar-item')}>
                  <Link className={cx('navbar-link')} to="contact" offset={-80} smooth={true} duration={50}>
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
         <label
            htmlFor="responsive-nav__on-off"
            className={cx('menu-toggle', { active: isActive })}
            onClick={handleMenuToggle}
         >
            <div className={cx('bar')}></div>
            <div className={cx('bar')}></div>
            <div className={cx('bar')}></div>
         </label>
      </>
   );
};

export default Navbar;
