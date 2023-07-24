import classNames from 'classnames/bind';

import styles from './Experience.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';
import images from 'Assets/Images';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useLanguage } from 'SwitchLanguage/Language';

const cx = classNames.bind(styles);

interface SkillData {
   imgSrc: string;
   altText: string;
   skillName: string;
   skillDesc: {
      en: string;
      vi: string;
   };
   skillPercent: number;
}

const skillsData: SkillData[] = [
   {
      imgSrc: images.html,
      altText: 'html',
      skillName: 'HTML',
      skillDesc: {
         en: 'Advanced',
         vi: 'Nâng cao',
      },
      skillPercent: 90,
   },
   {
      imgSrc: images.css,
      altText: 'css',
      skillName: 'CSS',
      skillDesc: {
         en: 'Advanced',
         vi: 'Nâng cao',
      },
      skillPercent: 85,
   },
   {
      imgSrc: images.js,
      altText: 'js',
      skillName: 'JS.TS',
      skillDesc: {
         en: 'Advanced',
         vi: 'Nâng cao',
      },
      skillPercent: 80,
   },
   {
      imgSrc: images.react,
      altText: 'react',
      skillName: 'REACT',
      skillDesc: {
         en: 'Basic',
         vi: 'Cơ bản',
      },
      skillPercent: 70,
   },
];

const graphicSkillsData: SkillData[] = [
   {
      imgSrc: images.ps,
      altText: 'ps',
      skillName: 'Ps',
      skillDesc: {
         en: 'Expert',
         vi: 'Thông thạo',
      },
      skillPercent: 80,
   },
   {
      imgSrc: images.ai,
      altText: 'ai',
      skillName: 'Ai',
      skillDesc: {
         en: 'Expert',
         vi: 'Thông thạo',
      },
      skillPercent: 90,
   },
   {
      imgSrc: images.id,
      altText: 'id',
      skillName: 'Id',
      skillDesc: {
         en: 'Expert',
         vi: 'Thông thạo',
      },
      skillPercent: 85,
   },
   {
      imgSrc: images.figma,
      altText: 'figma',
      skillName: 'Figma',
      skillDesc: {
         en: 'Expert',
         vi: 'Thông thạo',
      },
      skillPercent: 85,
   },
];

const Experience: React.FC = () => {
   const { darkMode } = useDarkMode();
   const { language } = useLanguage();

   return (
      <section id="experience" className={cx('wrapper')}>
         <Grid>
            <Row>
               {skillsData.map((skill, index) => (
                  <Col key={index} size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                     <div className={cx('skill', `${darkMode ? 'darkmode' : ''}`)}>
                        <div className={cx('skill-img', `${darkMode ? 'darkmode' : ''}`)}>
                           <img className={cx('img')} src={skill.imgSrc} alt={skill.altText} />
                        </div>
                        <h3 className={cx('skill-name')}>{skill.skillName}</h3>
                        <span className={cx('skill-desc')}>{language === 'vi' ? skill.skillDesc.vi : skill.skillDesc.en}</span>
                     </div>
                     <div className={cx('skill-percent')}>
                        <div className={cx('percent', `${darkMode ? 'darkmode' : ''}`)}>
                           <div className={cx(`percent-${skill.skillPercent}`, `${darkMode ? 'darkmode' : ''}`)}>
                              <span>{`${skill.skillPercent}%`}</span>
                           </div>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
            <Row className={cx('graphic')}>
               {graphicSkillsData.map((skill, index) => (
                  <Col key={index} size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                     <div className={cx('skill', `${darkMode ? 'darkmode' : ''}`)}>
                        <div className={cx('skill-img', `${darkMode ? 'darkmode' : ''}`)}>
                           <img className={cx('img')} src={skill.imgSrc} alt={skill.altText} />
                        </div>
                        <h3 className={cx('skill-name')}>{skill.skillName}</h3>
                        <span className={cx('skill-desc')}>{language === 'vi' ? skill.skillDesc.vi : skill.skillDesc.en}</span>
                     </div>
                     <div className={cx('skill-percent')}>
                        <div className={cx('percent', `${darkMode ? 'darkmode' : ''}`)}>
                           <div className={cx(`percent-${skill.skillPercent}`, `${darkMode ? 'darkmode' : ''}`)}>
                              <span>{`${skill.skillPercent}%`}</span>
                           </div>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
            <Row>
               <Col size={['l-3', 'm-3', 's-6']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-9', 'm-9', 's-6']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-8', 'm-8', 's-6']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-4', 'm-4', 's-4', 'm-4', 's-6']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-5', 'm-5', 's-6']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
               <Col size={['l-7', 'm-7', 's-6']}>
                  <div className={cx('box', `${darkMode ? 'darkmode' : ''}`)}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Experience;
