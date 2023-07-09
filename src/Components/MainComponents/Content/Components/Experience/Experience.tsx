import classNames from 'classnames/bind';

import styles from './Experience.module.scss';

const cx = classNames.bind(styles);


const Experience: React.FC = () => {
   return (
      <section id="experience" className={cx('wrapper')}>
         <h1>Experience</h1>
      </section>
   );
};

export default Experience;
