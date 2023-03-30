import classNames from 'classnames/bind';
import { useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import Business from '../components/Business';
import DeliveryTeam from '../components/DeliveryTeam';
import OurService from '../components/OurService';
import Quotes from '../components/Quotes';
import Testimonial from '../components/Testimonial';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const Home = () => {
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
      <div className={cx('banner')}>
        <div className={cx('opacity-banner')}></div>
        <div className={cx('title')}>
          <div className={cx('name-company')}>como</div>
          <div className={cx('description')}>THE TEXLITE - FASHION GARMENT AND FOOD</div>
        </div>
      </div>

      <AboutUs />
      <Quotes />
      <Business />
      <DeliveryTeam />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Home;
