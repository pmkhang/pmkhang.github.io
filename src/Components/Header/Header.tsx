import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Navbar from './Components/Navbar';

const cx = classNames.bind(styles);
const Header: React.FC = () => {
   return (
      <div className={cx('header')}>
         <div className={cx('logo')}>
            <img className={cx('logo-img')} src="" alt="" />
         </div>
         <Navbar />
      </div>
   );
};

export default Header;
