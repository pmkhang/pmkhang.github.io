import React from 'react';
import classNames from 'classnames/bind';

import styles from './AboutMe.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';

const cx = classNames.bind(styles);
const AboutMe: React.FC = () => {
   return (
      <section id="aboutme" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-8', 'm-8', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-4', 'm-4', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default AboutMe;
