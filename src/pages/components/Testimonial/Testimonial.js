import classNames from 'classnames/bind';
import styles from './Testimonial.module.scss';
import imgTes1 from '~/assets/image/testimonial1.png';
import imgTes2 from '~/assets/image/testimonial2.jpg';
import imgTes3 from '~/assets/image/testimonial3.jpg';
import imgTes4 from '~/assets/image/testimonial4.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const data = [
  {
    id: 1,
    name: 'Viet Tien',
    image: imgTes1,
    busines: 'partner',
    review:
      "COMO is our company's reliable supplier during the past 10 years of cooperation, we are very satisfied with t meet our needs in quality , variety of products in terms of designs and colors.",
  },
  {
    id: 2,
    name: 'Viet Tien',
    image: imgTes2,
    busines: 'partner',
    review: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita',
  },
  {
    id: 3,
    name: 'Viet Tien',
    image: imgTes3,
    busines: 'partner',
    review: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita',
  },
  {
    id: 4,
    name: 'Viet Tien',
    image: imgTes4,
    busines: 'partner',
    review: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita',
  },
];
const Testimonial = () => {
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
        <div className={cx('title-1')}>Testimonial </div>
        <div className={cx('title-2')}>Our Clients Say</div>
        <div className={cx('wrap-team')}>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className={cx('wrap-card')}>
                <div className={cx('card')}>
                  <div className={cx('card-top')}>
                    <img className={cx('avatar')} src={item.image} alt="" />
                    <div className={cx('wrap-name')}>
                      <div className={cx('name')}>{item.name}</div>
                      <div className={cx('business-name')}>-{item.busines}</div>
                    </div>
                  </div>
                  <div className={cx('card-bottom')}>{item.review}</div>
                  <FontAwesomeIcon className={cx('icon')} icon={faQuoteRight} fontSize={50} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
