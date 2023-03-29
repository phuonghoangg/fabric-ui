import classNames from 'classnames/bind';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import Business from '../components/Business';
import DeliveryTeam from '../components/DeliveryTeam';
import Quotes from '../components/Quotes';
import Testimonial from '../components/Testimonial';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const Home = () => {
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
