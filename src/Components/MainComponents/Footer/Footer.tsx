import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';

const cx = classNames.bind(styles);

const Footer: React.FC = () => {
   return (
      <div className={cx('container')}>
         <section className={cx('wrapper')}>
            <Grid>
               <Row>
                  <Col size={['l-3', 'm-6', 's-12']}>
                     <div className={cx('box')}></div>
                  </Col>
                  <Col size={['l-6', 'm-6', 's-12']}>
                     <div className={cx('box')}></div>
                  </Col>
                  <Col size={['l-3', 'm-6', 's-12']}>
                     <div className={cx('box')}></div>
                  </Col>
               </Row>
            </Grid>
         </section>
      </div>
   );
};

export default Footer;
