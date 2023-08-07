import React from 'react';
import classNames from 'classnames/bind';

import Content from './Components/MainComponents/Content';
import Footer from './Components/MainComponents/Footer';
import Header from './Components/MainComponents/Header';
import styles from './App.module.scss';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';

const cx = classNames.bind(styles);

const App: React.FC = () => {
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

   return (
      <div className={cx('wrapper', `${darkMode ? 'darkmode' : ''}`)}>
         <header className={cx('header', `${darkMode ? 'darkmode' : ''}`)}>
            <Header />
         </header>
         {/* <div className={cx('banner')}></div> */}
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
