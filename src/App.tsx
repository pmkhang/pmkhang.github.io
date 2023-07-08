import React from 'react';
import classNames from 'classnames/bind';

import Content from './Components/MainComponents/Content';
import Footer from './Components/MainComponents/Footer';
import Header from './Components/MainComponents/Header';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

const App: React.FC = () => {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <Header />
         </div>
         <div className={cx('banner')}></div>
         <div className={cx('content')}>
            <Content />
         </div>
         <div className={cx('footer')}>
            <Footer />
         </div>
      </div>
   );
};

export default App;
