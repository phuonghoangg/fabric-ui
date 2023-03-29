import classNames from 'classnames/bind';
import styles from './DeliveryTeam.module.scss';

import imgTeam1 from '~/assets/image/team-1.jpg';
import imgTeam2 from '~/assets/image/team-2.jpg';
import imgTeam3 from '~/assets/image/team-3.jpg';
import imgTeam4 from '~/assets/image/team-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

const data = [
  {
    name: 'benz nguyen',
    role: 'C.E.O',
    image: imgTeam1,
  },
  {
    name: 'lucky nguyen',
    role: 'Charman',
    image: imgTeam2,
  },
  {
    name: 'thanh thao',
    role: 'C.F.O - Deputy Director',
    image: imgTeam3,
  },
  {
    name: 'triet le',
    role: 'Marketing Manager',
    image: imgTeam4,
  },
];
const DeliveryTeam = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('title-1')}>DELIVERY TEAM</div>
        <div className={cx('title-2')}>Meet Our Delivery Team</div>
        <div className={cx('wrap-team')}>
          {data.map((item, index) => (
            <div key={index} className={cx('background')}>
              <img src={item.image} alt="" />
              <div>
                <div className={cx('color-bottom')}>
                  <div className={cx('name')}>{item.name}</div>
                  <div className={cx('role')}>{item.role}</div>
                </div>
                <div className={cx('bottom-hover')}>
                  <div className={cx('item-bottom')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faTwitter} fontSize={20} />
                    <FontAwesomeIcon className={cx('icon')} icon={faFacebook} fontSize={20} />
                    <FontAwesomeIcon className={cx('icon')} icon={faLinkedinIn} fontSize={20} />
                    <FontAwesomeIcon className={cx('icon')} icon={faInstagram} fontSize={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryTeam;
