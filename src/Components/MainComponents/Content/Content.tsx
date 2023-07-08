import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const cx = classNames.bind(styles);
const Content = () => {
   return (
      <div className={cx('wrapper')}>
         <AboutMe />
         <Education />
         <Experience />
         <Portfolio />
         <Contact />
      </div>
   );
};

export default Content;
