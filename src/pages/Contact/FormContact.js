/* eslint-disable jsx-a11y/iframe-has-title */
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles);

const FormContact = () => {
  return (
    <div className={cx('inner')}>
      <div className={cx('maps')}>
        <div className={cx('title')}>
          <div className={cx('wrap-des-title')}>
            <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
            <p className={cx('address')}> 123 Street, New York, USA</p>
          </div>
        </div>
        <iframe
          className={cx('map-google')}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000584.0718284445!2d-75.770041!3d42.74663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1680172551506!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={cx('form-contact')}>
        <div className={cx('title-form-1')}>Contact Us</div>
        <div className={cx('title-form-2')}>Contact For Any Queries</div>
        <div className={cx('form-input')}>
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />

          <input placeholder="Subject" />
          <input placeholder="Message" />
          <div className={cx('btn-send')}>Send Message</div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
