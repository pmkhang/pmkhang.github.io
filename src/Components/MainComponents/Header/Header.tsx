import classNames from 'classnames/bind';
import { Link } from 'react-scroll';
import styles from './Header.module.scss';
import Navbar from './Components/Navbar';
import logo from '~/Assets/Images/logo2.svg';
import DarkModeToggle from 'DarkMode/DarkModeToggle';
import LanguageToggle from 'SwitchLanguage/LanguageToggle';

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
         <div className={cx('toggle-btn')}>
            <LanguageToggle className={cx('language-toggle')} />
            <DarkModeToggle className={cx('darkmode-toggle')} />
         </div>
      </div>
   );
};

export default Header;
