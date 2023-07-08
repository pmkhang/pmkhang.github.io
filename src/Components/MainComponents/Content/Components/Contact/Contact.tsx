import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const Contact: React.FC = () => {
   return (
      <div id="contact" className={cx('wrapper')}>
         <h1>Contact</h1>
      </div>
   );
};

export default Contact;
