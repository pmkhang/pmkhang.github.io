import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Navbar from './Components/Navbar';

import logo from '../../../Assets/Images/logo.png';

const cx = classNames.bind(styles);
const Header: React.FC = () => {
   return (
      <div className={cx('header')}>
         <a href='#' className={cx('logo')}>
            <img className={cx('logo-img')} src={logo} alt="" />
         </a>
         <Navbar />
      </div>
   );
};

export default Header;
