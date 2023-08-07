import classNames from 'classnames/bind';

import styles from './Portfolio.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';

const cx = classNames.bind(styles);

const Portfolio: React.FC = () => {
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);


   return (
      <section id="portfolio" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-4', 'm-12', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-2-5', 'm-5', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-2-5', 'm-7', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-2-5', 'm-8', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-2-5', 'm-4', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-2-5', 'm-12', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Portfolio;
