import classNames from 'classnames/bind';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import styles from './AboutMe.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';
import brian from '~/Assets/Images/brain.svg';

const cx = classNames.bind(styles);
const AboutMe: React.FC = () => {
   const typedElementRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      if (typedElementRef.current) {
         const typingEffect = new Typed(typedElementRef.current, {
            strings: ['PHAM MINH KHANG', 'a Front-End Developer', 'a Graphic, UI-UX Designer'],
            typeSpeed: 35,
            backSpeed: 35,
            backDelay: 1000,
            loop: true,
         });

         return () => {
            typingEffect.destroy();
         };
      }
   }, []);

   return (
      <section id="aboutme" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-6', 'm-12', 's-12']}>
                  <div className={cx('info')}>
                     <h2 className={cx('greeting')}>Hello!</h2>
                     <div className={cx('info-text')}>
                        <h2>I'm</h2>
                        <h2>
                           <strong ref={typedElementRef} className={cx('multi-text')}></strong>
                        </h2>
                     </div>
                     <strong className={cx('info-description')}>
                        As a proficient Front-End Developer with expertise in HTML, CSS , JavaScript and React, and a
                        talented Graphic, UI-UX Designer with a deep understanding of visual design principles and have
                        experience using tools such as Adobe Photoshop, Illustrator, InDesign and Figma.
                     </strong>
                  </div>
               </Col>
               <Col size={['l-6', 'm-12', 's-12']}>
                  <div className={cx('img-desc')}>
                     <img src={brian} alt="" />
                  </div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default AboutMe;
