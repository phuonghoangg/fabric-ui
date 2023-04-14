import classNames from 'classnames/bind';
import styles from './Business.module.scss';
import logoShip from '~/assets/image/feature.jpg';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

const Business = ({ readMore }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/aboutUs');
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('image-logo')}>
          <img className={cx('logo')} src={logoShip} alt="" />
        </div>
        <div className={cx('description')}>
          <div className={cx('title-1')}>BUSINESS CULTURE</div>
          <div className={cx('title-2')}>EXTERNAL PERSPETIVE</div>
          <div className={cx('des')}>- Customer-first! Customer satisfaction is the ultimate aim.</div>
          <div className={cx('des')}>
            - No customer is less important. Helping smaller customer to grow is the growth path itself
          </div>
          <div className={cx('des')}>- New customers - New challenges – New chance.</div>

          <div className={cx('title-2')}>INTERNAL PERSPECTIVE</div>
          <div className={cx('des')}>- People are the most valuable assets.</div>
          <div className={cx('des')}>- No excuse before doing, “just – do – it” spirit.</div>
          <div className={cx('des')}>
            - Equality and opportunity to everybody to develop his/her dream in harmony with the common wealth of
            organization. Nobody is left behind.
          </div>
          <div className={cx('des')}>
            -Internal training and job rotation are to build up dynamic and adaptive organizations.
          </div>
          {readMore ? (
            <button onClick={handleClick} className={cx('button-learn')}>
              Learn More
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Business;
