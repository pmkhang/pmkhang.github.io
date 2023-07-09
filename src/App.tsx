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
         <header className={cx('header')}>
            <Header />
         </header>
         <div className={cx('banner')}></div>
         <main className={cx('content')}>
            <Content />
         </main>
         <footer className={cx('footer')}>
            <Footer />
         </footer>
      </div>
   );
};

export default App;
