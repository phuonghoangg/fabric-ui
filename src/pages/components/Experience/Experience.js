import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import logoAboutUs from '~/assets/image/aboutUs.jpg';
import history from '~/assets/image/history.jpg';

const cx = classNames.bind(styles);

const Experience = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('title-1')}>Experience</div>
        <div className={cx('title-2')}>Experience In Manufacturing Garments.</div>
        <div className={cx('title-3')}>
          It has been forty-nine years of experience as Hass Ozgen Textile Company Limited, with enough experience on
          Manufacturing garments as Zeria Textile over 7 years. Since we have started our textile manufacturing firm,
          and supply garment products to some reputed fashion brands across Europe.
        </div>
        <div className={cx('logistics')}>
          <img className={cx('history')} src={history} alt="" />
        </div>
        <div className={cx('inner-descript-1')}>
          <div className={cx('image-logo')}>
            <img
              src={
                'https://i0.wp.com/zeriatex.com/wp-content/uploads/2019/09/IMG-20190917-WA0001.jpg?resize=1024%2C768&ssl=1'
              }
              alt=""
              className={cx('logo')}
            />
          </div>
          <div className={cx('info')}>
            <div className={cx('description')}>
              COMO is a Vietnamese textile and garment manufacturer and exporter that was established in 2004. We have
              an integrated vertical supply chain in Vietnam, which enables them to maintain control from yarn to
              garment production, resulting in cost savings and streamlined communication. We have formed strategic
              joint ventures and invested in textile mills and garment factories to secure significant production
              capacity. Our commitment is to provide their buyers with the best pricing, quality, and delivery in
              Vietnam. COMO offers a range of high-quality, fashionable, and sustainable ready fabrics made in Vietnam,
              as well as representing many well-known material manufacturers. We have expanded into the food industry
              with their coconut chips snack, COCOMOLAT®.
              {/* <div style={{ textAlign: 'end' }}>
              <p onClick={() => navigate('/aboutUs')} className={cx('read-more')}>
                Read More
              </p>
            </div> */}
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 8 }} className={cx('description')}>
          we’re specialized in manufacturing ladies clothes and design-lead sourcing and planning of apparel and goods,
          that reflect the latest trends and consumer needs.
        </div>
        {/* ---------------inner description 2 ----------- */}

        <div className={cx('title-2')}>What We Offer As A Garment Manufacturer</div>

        <div className={cx('inner-descript-2')}>
          <div className={cx('image-logo')}>
            <video src={'https://zeriatex.com/wp-content/uploads/2019/08/0B1A9028.mp4'} alt="" className={cx('logo')} />
          </div>
          <div className={cx('info-2')}>
            <div className={cx('description')}>
              We guarantee the highest quality standards and timely delivery for all customer’s needs. With our
              strengths, as listed below, we provide many advantages over competitors in the . Planning ability with
              high sell-through rates. The Well-established workflow of design lead product planning that matches
              customer’s need with high sell-through rates, backed by cutting-edge information aggregated to the design
              office in Istanbul – Turkey. Garment Manufacturing line enabling a short delivery period. Business
              relationship with some 100 textile manufacturers and some 80 sewing factories in Turkey boasting a textile
              industry.
              {/* <div style={{ textAlign: 'end' }}>
              <p onClick={() => navigate('/aboutUs')} className={cx('read-more')}>
                Read More
              </p>
            </div> */}
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 8, marginBottom: 8 }} className={cx('description')}>
          For our Garment Manufacturing groups, we mainly use our fabrics during the manufacturing process. Besides, we
          are also able to offer our customers fabric alternatives for their existing collections thus, create important
          added values in terms of pricing, quality and delivery terms.
        </div>
        <div style={{ paddingTop: 8, marginBottom: 8 }} className={cx('description')}>
          Strategic alliance with representative Clothing manufacturers and Life Style products in Turkey and nearby
          countries which enables a short-time delivery accommodating to sales conditions and dispersion of risk.
        </div>
        <div style={{ paddingTop: 8, marginBottom: 8 }} className={cx('description')}>
          A Strong relationship with European Customers. With its proven performance to create many hot-selling products
          every season and keeps stable deals with them
        </div>
      </div>
    </div>
  );
};

export default Experience;
