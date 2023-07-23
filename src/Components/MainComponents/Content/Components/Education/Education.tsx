import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Education.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';
import logoTDC from '~/Assets/Images/logoTDC.svg';
import logoAptech from '~/Assets/Images/logoAptech.svg';
import SliderComponent from 'Components/SubComponents/SlideShow/SliderShow';
import slider from 'Assets/Slider';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useLanguage } from 'SwitchLanguage/Language';
import LanguageToggle from 'SwitchLanguage/LanguageToggle';

const cx = classNames.bind(styles);

enum SupportedLanguages {
   EN = 'en',
   VI = 'vi',
}

interface EducationData {
   schoolLogo: string;
   altText: string;
   time:
      | {
           en: string;
           vi: string;
        }
      | string;
   schoolName: {
      en: string;
      vi: string;
   };
   schoolMajor: {
      en: string;
      vi: string;
   };
   schoolSpecialize: {
      en: string;
      vi: string;
   };
}

const educationData: EducationData[] = [
   {
      schoolLogo: logoTDC,
      altText: 'logoTDC',
      time: '2019 - 2022',
      schoolName: {
         en: 'Thu Duc College of Technology',
         vi: 'Trường CĐ Công nghệ Thủ Đức',
      },
      schoolMajor: {
         en: 'Graphic Design',
         vi: 'Thiết kế đồ họa',
      },
      schoolSpecialize: {
         en: '2D - 3D - Video Editor',
         vi: '2D - 3D - Biên tập video',
      },
   },
   {
      schoolLogo: logoAptech,
      altText: 'logoAptech',
      time: {
         en: '2023 - Present',
         vi: '2023 - Hiện nay',
      },
      schoolName: {
         en: 'Aptech Computer Education',
         vi: 'Aptech Computer Education',
      },
      schoolMajor: {
         en: 'Information Technology',
         vi: 'Công nghệ thông tin',
      },
      schoolSpecialize: {
         en: 'Software Engineer',
         vi: 'Kỹ sư phần mềm',
      },
   },
];

const Education: React.FC = () => {
   const { darkMode } = useDarkMode();
   const { language } = useLanguage();

   return (
      <section id="education" className={cx('wrapper')}>
         <Grid>
            <Row>
               {educationData.map((education, index) => (
                  <Col key={index} size={['l-6', 'm-12', 's-12']}>
                     <div className={cx('school-info', `${darkMode ? 'darkmode' : ''}`, index === 0 && 'tdc')}>
                        <div className={cx('school-logo', `${darkMode ? 'darkmode' : ''}`)}>
                           <img className={cx('logo')} src={education.schoolLogo} alt={education.altText} />
                        </div>
                        <div className={cx('school-time', `${darkMode ? 'darkmode' : ''}`)}>
                           <span className={cx('time')}>
                              {typeof education.time === 'object' ? education.time[language] : education.time}
                           </span>
                        </div>
                        <div className={cx('school')}>
                           <h2 className={cx('school-name', `${darkMode ? 'darkmode' : ''}`)}>
                              {language === 'vi' ? education.schoolName.vi : education.schoolName.en}
                           </h2>
                           <span className={cx('school-major')}>
                              {language === 'vi' ? education.schoolMajor.vi : education.schoolMajor.en}
                           </span>
                           <span className={cx('school-specialize')}>
                              {language === 'vi' ? education.schoolSpecialize.vi : education.schoolSpecialize.en}
                           </span>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
         </Grid>
         <SliderComponent className={cx('slider')} images={slider} />
      </section>
   );
};

export default Education;
