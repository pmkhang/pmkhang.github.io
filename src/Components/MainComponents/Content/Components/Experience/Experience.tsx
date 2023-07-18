import classNames from 'classnames/bind';

import styles from './Experience.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';

const cx = classNames.bind(styles);

const Experience: React.FC = () => {
   return (
      <section id="experience" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-12', 'm-12', 's-12']}>
                  <h2 className={cx('title')}>My Skill</h2>
               </Col>
            </Row>
            <Row>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-12', 'm-12', 's-12']}>
                  <h2 className={cx('title')}>My Experience</h2>
               </Col>
            </Row>
            <Row>
               <Col size={['l-3', 'm-3', 's-6']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-9', 'm-9', 's-6']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-8', 'm-8', 's-6']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-4', 'm-4', 's-6']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-5', 'm-5', 's-6']}>
                  <div className={cx('box')}></div>
               </Col>
               <Col size={['l-7', 'm-7', 's-6']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Experience;
