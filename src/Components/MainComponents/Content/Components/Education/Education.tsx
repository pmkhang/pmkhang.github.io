import classNames from 'classnames/bind';

import styles from './Education.module.scss';

const cx = classNames.bind(styles);


const Education: React.FC = () => {
   return (
      <div id="education" className={cx('wrapper')}>
         <h1>Education</h1>
      </div>
   );
};

export default Education;
