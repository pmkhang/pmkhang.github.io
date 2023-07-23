import classNames from 'classnames/bind';

import styles from './Portfolio.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';
import { useDarkMode } from 'DarkMode/DarkModeContext';

const cx = classNames.bind(styles);

const Portfolio: React.FC = () => {
   const { darkMode } = useDarkMode();

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
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Portfolio;
