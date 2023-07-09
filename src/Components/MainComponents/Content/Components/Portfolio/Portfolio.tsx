import classNames from 'classnames/bind';

import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

const Portfolio: React.FC = () => {
   return (
      <section id="portfolio" className={cx('wrapper')}>
         <h1>Portfolio</h1>
      </section>
   );
};

export default Portfolio;
