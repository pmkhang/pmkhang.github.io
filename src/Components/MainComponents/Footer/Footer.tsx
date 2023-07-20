import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';
import images from 'Assets/Images';

const cx = classNames.bind(styles);

const Footer: React.FC = () => {
   return (
      <div className={cx('container')}>
         <section className={cx('wrapper')}>
            <Grid>
               <Row>
                  <Col size={['l-3', 'm-6', 's-12']}>
                     <div className={cx('logo')}>
                        <img className={cx('img')} src={images.logo2} alt="" />
                     </div>
                  </Col>
                  <Col size={['l-6', 'm-6', 's-12']}>
                     <div className={cx('main-footer')}>
                        <h2>Thanks for Visiting</h2>
                        <h2>This page is currently under construction.</h2>
                     </div>
                  </Col>
                  <Col size={['l-3', 'm-6', 's-12']}>
                     <div className={cx('logo')}>
                        <img className={cx('img')} src={images.logo2} alt="" />
                     </div>
                  </Col>
               </Row>
            </Grid>
         </section>
      </div>
   );
};

export default Footer;
