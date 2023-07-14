import classNames from 'classnames/bind';
import React, { useEffect, useRef } from 'react';

import styles from './AboutMe.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';
import Typed from 'typed.js';

const cx = classNames.bind(styles);
const AboutMe: React.FC = () => {
   const typedElementRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      if (typedElementRef.current) {
         const typingEffect = new Typed(typedElementRef.current, {
            strings: ['Pham Minh Khang', 'a Front-End Developer', 'a Graphic, UI-UX Designer'],
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
               <Col size={['l-7', 'm-7', 's-12']}>
                  <div className={cx('info')}>
                     <h2>Hello!</h2>
                     <div className={cx('info-text')}>
                        <h2>I'm</h2>
                        <h2>
                           <strong ref={typedElementRef} className={cx('multi-text')}>
                              {' '}
                           </strong>
                        </h2>
                     </div>
                  </div>
                  <div>
                     <strong>
                        As a proficient Front-End Developer with expertise in HTML, CSS , JavaScript and React, and a
                        talented Graphic, UI-UX Designer with a deep understanding of visual design principles and have
                        experience using tools such as Adobe Photoshop, Illustrator, InDesign and Figma.
                     </strong>
                  </div>
               </Col>
               <Col size={['l-5', 'm-5', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default AboutMe;
