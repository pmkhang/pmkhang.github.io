import classNames from 'classnames/bind';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import styles from './AboutMe.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';
import brain from '~/Assets/Images/brain.svg';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useLanguage } from 'SwitchLanguage/Language';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';

const cx = classNames.bind(styles);

interface AboutMeData {
   greeting: {
      en: string;
      vi: string;
   };
   multiText: {
      en: string[];
      vi: string[];
   };
   description: {
      en: string;
      vi: string;
   };
   imageSrc: {
      en: string;
      vi: string;
   };
   altText: {
      en: string;
      vi: string;
   };
}

const aboutMeData: AboutMeData[] = [
   {
      greeting: {
         en: 'Hello!',
         vi: 'Xin chào!',
      },
      multiText: {
         en: ['PHAM MINH KHANG', 'a Front-End Developer', 'a Graphic, UI-UX Designer'],
         vi: ['PHẠM MINH KHANG', 'Lập trình viên Front-End', 'Graphic, UI-UX Designer'],
      },
      description: {
         en: 'As a proficient Front-End Developer with expertise in HTML, CSS, JavaScript, and React, and a talented Graphic/UI-UX Designer with a deep understanding of visual design principles and experience using tools such as Adobe Photoshop, Illustrator, InDesign, and Figma.',
         vi: 'Là một Lập trình viên Front-End thành thạo với chuyên môn trong HTML, CSS, JavaScript và React, và là một Graphic, UI-UX Designer với sự hiểu biết sâu về nguyên tắc thiết kế hình ảnh và có kinh nghiệm sử dụng các công cụ như Adobe Photoshop, Illustrator, InDesign và Figma.',
      },
      imageSrc: {
         en: brain,
         vi: brain,
      },
      altText: {
         en: 'brain',
         vi: 'não',
      },
   },
];

const AboutMe: React.FC = () => {
   const typedElementRef = useRef<HTMLSpanElement>(null);
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

   const language = useSelector((state: RootState) => state.language.language); // Lấy trạng thái language từ store


   useEffect(() => {
      if (typedElementRef.current) {
         const typingEffect = new Typed(typedElementRef.current, {
            strings: aboutMeData[0].multiText[language],
            typeSpeed: 35,
            backSpeed: 35,
            backDelay: 1000,
            loop: true,
         });

         return () => {
            typingEffect.destroy();
         };
      }
   }, [language]);

   return (
      <section id="aboutme" className={cx('wrapper')}>
         <Grid>
            <Row>
               {aboutMeData.map((aboutMe, index) => (
                  <Col key={index} size={['l-6', 'm-12', 's-12']}>
                     <div className={cx('info')}>
                        <h2 className={cx('greeting')}>
                           {language === 'vi' ? aboutMe.greeting.vi : aboutMe.greeting.en}
                        </h2>
                        <div className={cx('info-text')}>
                           <h2>{language === 'vi' ? 'Tôi là' : "I'm"}</h2>
                           <h2>
                              <strong
                                 ref={typedElementRef}
                                 className={cx('multi-text', `${darkMode ? 'darkmode' : ''}`)}
                              ></strong>
                           </h2>
                        </div>
                        <strong className={cx('info-description')}>
                           {language === 'vi' ? aboutMe.description.vi : aboutMe.description.en}
                        </strong>
                     </div>
                  </Col>
               ))}
               <Col size={['l-6', 'm-12', 's-12']}>
                  <div className={cx('img-desc')}>
                     <img
                        src={language === 'vi' ? aboutMeData[0].imageSrc.vi : aboutMeData[0].imageSrc.en} // Fixed the index here, assuming there's only one item in the array
                        alt={language === 'vi' ? aboutMeData[0].altText.vi : aboutMeData[0].altText.en} // Fixed the index here, assuming there's only one item in the array
                     />
                  </div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default AboutMe;
