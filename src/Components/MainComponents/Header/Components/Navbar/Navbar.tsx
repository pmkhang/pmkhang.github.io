import classNames from 'classnames/bind';
import React, { useState } from 'react';

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
                  <a className={cx('navbar-link')} href="#footer">
                     About Me
                  </a>
               </li>
               <li className={cx('navbar-item')}>
                  <a className={cx('navbar-link')} href="#">
                     Education
                  </a>
               </li>
               <li className={cx('navbar-item')}>
                  <a className={cx('navbar-link')} href="#">
                     Experience
                  </a>
               </li>
               <li className={cx('navbar-item')}>
                  <a className={cx('navbar-link')} href="#">
                     Portfolio
                  </a>
               </li>
               <li className={cx('navbar-item')}>
                  <a className={cx('navbar-link')} href="#">
                     Contact
                  </a>
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
