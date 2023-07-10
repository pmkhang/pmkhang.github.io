import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';


const cx = classNames.bind(styles);
const Content = () => {
   return (
      <section className={cx('wrapper')}>
         <div className={cx('container')}>
            <AboutMe />
         </div>
         <div className={cx('container')}>
            <Education />
         </div>

         <div className={cx('container')}>
            <Experience />
         </div>

         <div className={cx('container')}>
            <Portfolio />
         </div>

         <div className={cx('container')}>
            <Contact />
         </div>
      </section>
   );
};

export default Content;
