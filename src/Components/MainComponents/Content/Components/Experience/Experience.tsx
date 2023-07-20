import classNames from 'classnames/bind';

import styles from './Experience.module.scss';
import { Grid, Row, Col } from 'GridSystem - typescript';
import images from 'Assets/Images';

const cx = classNames.bind(styles);

const Experience: React.FC = () => {
   return (
      <section id="experience" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.html} alt="html" />
                     </div>
                     <h3 className={cx('skill-name')}>HTML</h3>
                     <span className={cx('skill-desc')}>Avanced</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-90')}>
                           <span>90%</span>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.css} alt="css" />
                     </div>
                     <h3 className={cx('skill-name')}>CSS</h3>
                     <span className={cx('skill-desc')}>Avanced</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-85')}>
                           <span>85%</span>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.js} alt="js" />
                     </div>
                     <h3 className={cx('skill-name')}>JS.TS</h3>
                     <span className={cx('skill-desc')}>Avanced</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-80')}>
                           <span>80%</span>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.react} alt="react" />
                     </div>
                     <h3 className={cx('skill-name')}>REACT</h3>
                     <span className={cx('skill-desc')}>Basic</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-70')}>
                           <span>70%</span>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.ps} alt="ps" />
                     </div>
                     <h3 className={cx('skill-name')}>Ps</h3>
                     <span className={cx('skill-desc')}>Avanced</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-80')}>
                           <span>80%</span>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.ai} alt="ai" />
                     </div>
                     <h3 className={cx('skill-name')}>Ai</h3>
                     <span className={cx('skill-desc')}>Avanced</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-90')}>
                           <span>90%</span>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.id} alt="id" />
                     </div>
                     <h3 className={cx('skill-name')}>Id</h3>
                     <span className={cx('skill-desc')}>Avanced</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-85')}>
                           <span>85%</span>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col size={['l-3', 'm-6', 's-6']} className={cx('flex')}>
                  <div className={cx('skill')}>
                     <div className={cx('skill-img')}>
                        <img className={cx('img')} src={images.figma} alt="figma" />
                     </div>
                     <h3 className={cx('skill-name')}>Figma</h3>
                     <span className={cx('skill-desc')}>Avanced</span>
                  </div>
                  <div className={cx('skill-percent')}>
                     <div className={cx('percent')}>
                        <div className={cx('percent-85')}>
                           <span>85%</span>
                        </div>
                     </div>
                  </div>
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
               <Col size={['l-4', 'm-4', 's-4', 'm-4', 's-6']}>
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
