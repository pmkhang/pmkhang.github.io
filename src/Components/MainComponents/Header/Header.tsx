import classNames from 'classnames/bind';
import { Link } from 'react-scroll';

import styles from './Header.module.scss';
import Navbar from './Components/Navbar';

import logo from '~/Assets/Images/logo2.svg';

const cx = classNames.bind(styles);

const Header: React.FC = () => {
   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <div className={cx('header')}>
         <Link to="top" className={cx('logo')} smooth={true} duration={500} onClick={handleScrollToTop}>
            <img className={cx('logo-img')} src={logo} alt="" />
         </Link>
         <Navbar />
      </div>
   );
};

export default Header;
