import { faPlane, faShip, faStore, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './OurService.module.scss';
const cx = classNames.bind(styles);

const OurService = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('title-1')}>OUR SERVICES</div>
        <div className={cx('title-2')}>Best Logistic Services</div>
        <div className={cx('logistics')}>
          <div className={cx('wrap-vehicle')}>
            <div className={cx('banner-icon')}>
              <FontAwesomeIcon icon={faPlane} fontSize={35} />
              <span> Air Freight</span>
            </div>
            <div className={cx('description')}>
              <div className={cx('des')}>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam
              </div>
              <div className={cx('read-more')}>
                <p>Read More</p>
              </div>
            </div>
          </div>

          <div className={cx('wrap-vehicle')}>
            <div className={cx('banner-icon')}>
              <FontAwesomeIcon icon={faShip} fontSize={35} />
              <span> Air Freight</span>
            </div>
            <div className={cx('description')}>
              <div className={cx('des')}>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam
              </div>
              <div className={cx('read-more')}>
                <p>Read More</p>
              </div>
            </div>
          </div>

          <div className={cx('wrap-vehicle')}>
            <div className={cx('banner-icon')}>
              <FontAwesomeIcon icon={faTruckMoving} fontSize={35} />
              <span> Air Freight</span>
            </div>
            <div className={cx('description')}>
              <div className={cx('des')}>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam
              </div>
              <div className={cx('read-more')}>
                <p>Read More</p>
              </div>
            </div>
          </div>

          <div className={cx('wrap-vehicle')}>
            <div className={cx('banner-icon')}>
              <FontAwesomeIcon icon={faStore} fontSize={35} />
              <span> Air Freight</span>
            </div>
            <div className={cx('description')}>
              <div className={cx('des')}>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam
              </div>
              <div className={cx('read-more')}>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
