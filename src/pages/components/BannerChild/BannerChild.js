import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './BannerChild.module.scss';
const cx = classNames.bind(styles);

const BannerChild = ({ title }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('banner')}>
        <div className={cx('opacity-banner')}></div>
        <div className={cx('title')}>
          <div className={cx('name-company')}>{title}</div>
          <div className={cx('description')}>
            <div>Home</div> <FontAwesomeIcon icon={faArrowRight} fontSize={16} className={cx('icon')} />{' '}
            <div>{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerChild;
