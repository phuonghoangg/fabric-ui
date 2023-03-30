/* eslint-disable jsx-a11y/iframe-has-title */
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('column-contact')}>
          <div className={cx('title')}>Contact</div>
          <div className={cx('address')}>
            <FontAwesomeIcon icon={faLocationDot} fontSize={20} />{' '}
            <span>
              Block A, Room LA-02.02, Lexington Building, 67 Mai Chi Tho Avenue, An Phu ward, Thu Duc city, HCMC
            </span>
          </div>
          <div className={cx('info-contact')}>
            <FontAwesomeIcon icon={faPhone} fontSize={20} /> <span>(+84) 909 924 775</span>
          </div>
          <div className={cx('info-contact')}>
            <FontAwesomeIcon icon={faEnvelope} fontSize={20} /> <span>bao@comolimited.com</span>
          </div>
          <div className={cx('bottom-hover')}>
            <div className={cx('item-bottom')}>
              <div className={cx('wrap-icon')}>
                <FontAwesomeIcon className={cx('icon')} icon={faTwitter} fontSize={20} />
              </div>
              <div className={cx('wrap-icon')}>
                <FontAwesomeIcon className={cx('icon')} icon={faFacebookF} fontSize={20} />
              </div>
              <div className={cx('wrap-icon')}>
                <FontAwesomeIcon className={cx('icon')} icon={faLinkedinIn} fontSize={20} />
              </div>
              <div className={cx('wrap-icon')}>
                <FontAwesomeIcon className={cx('icon')} icon={faInstagram} fontSize={20} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('column-link')}>
          <div className={cx('title')}>Quick Link</div>
          <div className={cx('option-link')}>
            <p>&gt;</p> <p className={cx('text-link')}>Home</p>
          </div>
          <div className={cx('option-link')}>
            <p>&gt;</p> <p className={cx('text-link')}>About Us</p>
          </div>
          <div className={cx('option-link')}>
            <p>&gt;</p> <p className={cx('text-link')}>Our Service</p>
          </div>
          <div className={cx('option-link')}>
            <p>&gt;</p> <p className={cx('text-link')}>Pricing Plan</p>
          </div>
          <div className={cx('option-link')}>
            <p>&gt;</p> <p className={cx('text-link')}>Contact Us</p>
          </div>
        </div>
        <div className={cx('column-map')}>
          <div className={cx('title')}>Maps</div>
          <iframe
            className={cx('map-google')}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.341212026393!2d106.751503!3d10.798242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752755c100d017%3A0x6aa7970875adf53!2sLexington%20Residence!5e0!3m2!1svi!2sus!4v1680164771246!5m2!1svi!2sus"
            width="500"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={cx('footer-bottom')}>
        <div className={cx('inner-footer-bottom')}>
          <div className={cx('coppy-right')}>
            <div>
              &copy; <span>COMO FABRIC</span>. All Rights Reserved. Designed by <span>Meeliezz</span>
            </div>
          </div>
          <div className={cx('faq')}>
            <div className={cx('item-faq')}>Privacy</div>
            <div className={cx('item-faq')}>Terms</div>
            <div className={cx('item-faq')}>FAQs</div>
            <div className={cx('item-faq')}>Help</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
