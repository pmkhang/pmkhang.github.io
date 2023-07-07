import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const Navbar: React.FC = () => {
   return (
      <nav className={cx('navbar')}>
         <ul className={cx('navbar-list')}>
            <li className={cx('navbar-item')}>
               <a className={cx('navbar-link')} href="#">
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
   );
};

export default Navbar;
