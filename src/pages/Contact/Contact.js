import classNames from 'classnames/bind';
import { useEffect } from 'react';
import BannerChild from '../components/BannerChild';
import styles from './Contact.module.scss';
import FormContact from './FormContact';
const cx = classNames.bind(styles);

const Contact = () => {
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
      <BannerChild title="Contact" />

      <FormContact />
    </div>
  );
};

export default Contact;
