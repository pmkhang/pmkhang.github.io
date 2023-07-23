import classNames from 'classnames/bind';

import styles from './Education.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';
import logoTDC from '~/Assets/Images/logoTDC.svg';
import logoAptech from '~/Assets/Images/logoAptech.svg';
import SliderComponent from 'Components/SubComponents/SlideShow/SliderShow';
import slider from 'Assets/Slider';
import { useDarkMode } from 'DarkMode/DarkModeContext';


const cx = classNames.bind(styles);

interface EducationData {
   schoolLogo: string;
   altText: string;
   time: string;
   schoolName: string;
   schoolMajor: string;
   schoolSpecialize: string;
}

const educationData: EducationData[] = [
   {
      schoolLogo: logoTDC,
      altText: 'logoTDC',
      time: '2019 - 2022',
      schoolName: 'Thu Duc College of Technology',
      schoolMajor: 'Graphic Design',
      schoolSpecialize: '2D - 3D - Video Editor',
   },
   {
      schoolLogo: logoAptech,
      altText: 'logoAptech',
      time: '2023 - Present',
      schoolName: 'Aptech Computer Education',
      schoolMajor: 'Information Technology',
      schoolSpecialize: 'Software Engineer',
   },
];

const Education: React.FC = () => {
   const { darkMode } = useDarkMode();

   return (
      <section id="education" className={cx('wrapper')}>
         <Grid>
            <Row>
               {educationData.map((education, index) => (
                  <Col key={index} size={['l-6', 'm-12', 's-12']}>
                     <div className={cx('school-info',`${darkMode ? 'darkmode' : ''}`, index === 0 && 'tdc')}>
                        <div className={cx('school-logo', `${darkMode ? 'darkmode' : ''}`)}>
                           <img className={cx('logo' )} src={education.schoolLogo} alt={education.altText} />
                        </div>
                        <div className={cx('school-time',`${darkMode ? 'darkmode' : ''}`)}>
                           <span className={cx('time')}>{education.time}</span>
                        </div>
                        <div className={cx('school')}>
                           <h2 className={cx('school-name',`${darkMode ? 'darkmode' : ''}`)}>{education.schoolName}</h2>
                           <span className={cx('school-major')}>{education.schoolMajor}</span>
                           <span className={cx('school-specialize')}>{education.schoolSpecialize}</span>
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
