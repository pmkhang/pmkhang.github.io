import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';
import images from 'Assets/Images';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useLanguage } from 'SwitchLanguage/Language';

const cx = classNames.bind(styles);

const Footer: React.FC = () => {
   const { darkMode } = useDarkMode();
   const { language } = useLanguage();

   return (
      <div className={cx('container')}>
         <section className={cx('wrapper')}>
            <Grid>
               <Row>
                  <Col size={['l-3', 'm-6', 's-12']}>
                     <div className={cx('logo')}>
                        <img className={cx('img')} src={darkMode ? images.logo3 : images.logo2} alt="" />
                     </div>
                  </Col>
                  <Col size={['l-6', 'm-6', 's-12']}>
                     <div className={cx('main-footer')}>
                        <h2>{language === 'vi' ? 'Cám ơn bạn đã ghé thăm' : 'Thanks for Visiting'}</h2>
                        <h2>
                           {language === 'vi'
                              ? 'Trang này đang được hoàn thiện.'
                              : 'This page is currently under construction.'}
                        </h2>
                     </div>
                  </Col>
                  <Col size={['l-3', 'm-6', 's-12']}>
                     <div className={cx('logo')}>
                        <img className={cx('img')} src={darkMode ? images.logo3 : images.logo2} alt="" />
                     </div>
                  </Col>
               </Row>
            </Grid>
         </section>
      </div>
   );
};

export default Footer;
