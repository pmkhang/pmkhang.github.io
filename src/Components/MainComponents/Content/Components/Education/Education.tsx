import classNames from 'classnames/bind';

import styles from './Education.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';

const cx = classNames.bind(styles);


const Education: React.FC = () => {
   return (
      <section id="education" className={cx('wrapper')}>
         <Grid>
            <Row>
               <Col size={['l-12', 'm-12', 's-12']}>
                  <div className={cx('box')}></div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Education;
