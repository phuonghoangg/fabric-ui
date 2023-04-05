import classNames from 'classnames/bind';
import styles from './OurBrand.module.scss';
const cx = classNames.bind(styles);

const OurBrand = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('title-1')}>OUR BRANDS</div>
        <div className={cx('title-2')}>Description</div>
        <div className={cx('title-3')}>
          With years of experience in Fashion & Textile Sector We have Develope Trust within many of our esteemed and
          well known brands across the world. What make us different from Apparel Manufacturers is that we source
          everything withing our company and Below Brands that are all under Zeria Textile Umbrella. This make us to
          maintain The quality and also reduce the Clothing & Fabric manufacturing Cost which allow us to offer
          competitive Price with high Quality to our Customers.
        </div>
        <div className={cx('logistics')}>
          <img
            src="https://i0.wp.com/zeriatex.com/wp-content/uploads/2020/05/88c71aa46edbe3589097c5ea631670fa.jpg?w=200&ssl=1"
            className={cx('wrap-vehicle')}
            alt=""
          />

          <img
            src="https://i0.wp.com/zeriatex.com/wp-content/uploads/2020/05/88c71aa46edbe3589097c5ea631670fa.jpg?w=200&ssl=1"
            className={cx('wrap-vehicle')}
            alt=""
          />
          <img
            src="https://i0.wp.com/zeriatex.com/wp-content/uploads/2020/05/88c71aa46edbe3589097c5ea631670fa.jpg?w=200&ssl=1"
            className={cx('wrap-vehicle')}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
