import classNames from 'classnames/bind';

import styles from './Portfolio.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';


const cx = classNames.bind(styles);

const Portfolio: React.FC = () => {
   return (
      <section id="portfolio" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-4', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Portfolio;
