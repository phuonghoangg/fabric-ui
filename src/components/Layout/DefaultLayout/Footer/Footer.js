import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}></div>
    </div>
  );
};

export default Footer;
