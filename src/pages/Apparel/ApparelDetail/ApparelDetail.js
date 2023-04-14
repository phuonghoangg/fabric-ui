import classNames from 'classnames/bind';
import styles from './ApparelDetail.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneProduct } from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ApparelDetail = () => {
  const product = useSelector((state) => state.product.aProduct?.product);
  console.log('product: ', product);
  const params = useParams();
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    getOneProduct(params.id, dispatch);
  }, [dispatch, params.id]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('left')}>
          {product && (
            <div className={cx('wrap-image')}>
              {!data ? (
                <img className={cx('image-main')} src={product.images[0]} alt="" />
              ) : (
                <img className={cx('image-main')} src={data} alt="" />
              )}
            </div>
          )}
          <div className={cx('list-img')}>
            <Slider {...settings}>
              {product &&
                product?.images.map((item, index) => (
                  <div key={index} className={cx('wrap-card')} onClick={() => setData(item)}>
                    <div className={cx('card')}>
                      <img src={item} alt="" />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('title-product')}>{product.nameProduct}</div>
          <hr />
          <div className={cx('price-product')}>{product.price}</div>
          <hr />

          <div className={cx('des-product')}>Color: {product.color}</div>
          <div className={cx('des-product')}>Italian cherry red checked 100% wool suiting</div>
          <div className={cx('des-product')}>Type: {product.type.typeName}</div>
          <div className={cx('des-product')}>Weight: {product.weight}</div>
          <div className={cx('des-product')}>
            <strong>Available in Sydney and Melbourne</strong>
          </div>
          <div className={cx('des-product')}>Ideal for suits, jackets, vests, pants and pencil skirts etc</div>
          <div className={cx('des-product')}>Dry Clean Only (P)</div>
          <div className={cx('des-product')}>
            If weight, handle or colour matching is essential please order a swatch sample to be posted out to you
          </div>
        </div>
      </div>
      <div className={cx('send-mail')}>
        <div className={cx('title-mail')}>Stay up to date. Join our mailing list</div>
        <div className={cx('input-mail')}>
          <input placeholder="Email Address" />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default ApparelDetail;
