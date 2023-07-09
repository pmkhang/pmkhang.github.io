import classNames from 'classnames/bind';

import styles from './Education.module.scss';

const cx = classNames.bind(styles);


const Education: React.FC = () => {
   return (
      <section id="education" className={cx('wrapper')}>
         <h1>Education</h1>
      </section>
   );
};

export default Education;
