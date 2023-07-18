import classNames from 'classnames/bind';

import styles from './Education.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';
import logoTDC from '~/Assets/Images/logoTDC.svg';
import logoAptech from '~/Assets/Images/logoAptech.svg';

const cx = classNames.bind(styles);

const Education: React.FC = () => {
   return (
      <section id="education" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-6', 'm-12', 's-12']}>
                  <div className={cx('school-info')}>
                     <div className={cx('school-logo')}>
                        <img className={cx('logo')} src={logoTDC} alt="" />
                     </div>
                     <div className={cx('school-time')}>
                        <span className={cx('time')}>2019 - 2022</span>
                     </div>
                     <div className={cx('school')}>
                        <h2 className={cx('school-name')}>Thu Duc College of Technology</h2>
                        <span className={cx('school-major')}>Graphic Design</span>
                        <span className={cx('school-specialize')}>2D - 3D - Video Editor</span>
                     </div>
                  </div>
               </Col>
               <Col size={['l-6', 'm-12', 's-12']}>
                  <div className={cx('school-info')}>
                     <div className={cx('school-logo')}>
                        <img className={cx('logo')} src={logoAptech} alt="" />
                     </div>
                     <div className={cx('school-time')}>
                        <span className={cx('time')}>2023 - Present</span>
                     </div>
                     <div className={cx('school')}>
                        <h2 className={cx('school-name')}>Aptech Computer Education</h2>
                        <span className={cx('school-major')}>Infomation Technology</span>
                        <span className={cx('school-specialize')}>Software Engineer</span>
                     </div>
                  </div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Education;
