import React from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import DarkModeToggle from 'DarkMode/DarkModeToggle';

const cx = classNames.bind(styles);

interface BannerProps {
   darkMode: boolean;
}

const Banner: React.FC<BannerProps> = ({ darkMode }) => {
   return (
      <div>
         <DarkModeToggle />
         <div className={cx('wrapper', { darkmode: darkMode })}></div>
      </div>
   );
};

export default Banner;
