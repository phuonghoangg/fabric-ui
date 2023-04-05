import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import BannerChild from '../components/BannerChild';
import Business from '../components/Business';
import DeliveryTeam from '../components/DeliveryTeam';
import styles from './About.module.scss';
import OurBrand from '../components/OurBrand/OurBrand';
import Experience from '../components/Experience/Experience';
import FormContact from '../Contact/FormContact';
const cx = classNames.bind(styles);

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  });
  return (
    <div className={cx('wrapper')}>
      <BannerChild title="About" />
      <AboutUs />
      <OurBrand />
      <Experience />
      <Business />
      <FormContact />
    </div>
  );
};

export default About;
