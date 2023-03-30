import classNames from 'classnames/bind';
import { useEffect } from 'react';
import BannerChild from '../components/BannerChild';
import OurService from '../components/OurService';
import Quotes from '../components/Quotes';
import Testimonial from '../components/Testimonial';
import styles from './Service.module.scss';
const cx = classNames.bind(styles);

const Service = () => {
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
      <BannerChild title="Service" />
      <OurService />
      <Quotes />
      <Testimonial />
    </div>
  );
};

export default Service;
