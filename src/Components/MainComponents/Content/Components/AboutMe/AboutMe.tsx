import React from 'react';
import classNames from 'classnames/bind';

import styles from './AboutMe.module.scss';

const cx = classNames.bind(styles);
const AboutMe: React.FC = () => {
   return (
      <div id="aboutme" className={cx('wrapper')}>
         <h1>About me</h1>
      </div>
   );
};

export default AboutMe;
