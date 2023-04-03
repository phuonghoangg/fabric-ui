import logo from '~/assets/image/logo.png';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const Header = () => {
  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(false);
  const show = () => setVisible(true);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('top')}>
          <div className={cx('inner-top')}>
            <div className={cx('contact')}>
              <FontAwesomeIcon icon={faPhone} />{' '}
              <div style={{ paddingLeft: 5, paddingTop: 3, display: 'flex' }}>
                (+84) 909 924 775 <p style={{ padding: '0px 10px' }}>|</p>{' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: 5 }} /> bao@comolimited.com
              </div>
            </div>
            <div className={cx('social')}>
              <div style={{ paddingRight: 10 }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div style={{ paddingRight: 10 }}>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div style={{ paddingRight: 10 }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div style={{ paddingRight: 10 }}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div style={{ paddingRight: 10 }}>
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('inner-bottom')}>
          <div className={cx('content')}>
            <a href="/">
              <img src={logo} href="/a" alt="" className={cx('logo')} />
            </a>

            <div className={cx('wrapper-menu')}>
              <Menu>
                <MenuItem title="Home" to="/" />
                <MenuItem title="About" to="/aboutUs" />
                <MenuItem title="Apparel" to="/apparel" />
                <MenuItem title="Service" to="/service" />

                {/* <MenuItem title="Price" to="/price" /> */}
                {/* <MenuItem title="Blog" to="/blog" /> */}
                <MenuItem title="Contact" to="/contact" />
              </Menu>
            </div>
            <div className={cx('button-login')}>Login</div>

            <Tippy
              interactive
              placement="bottom"
              onClickOutside={hide}
              visible={visible}
              render={(attrs) => (
                <div className={cx('collapse-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                    <div className={cx('collapse-menu')}>
                      <Menu>
                        <MenuItem title="Home" to="/" visible={visible} setVisible={setVisible} />
                        <MenuItem title="About" to="/aboutUs" visible={visible} setVisible={setVisible} />
                        <MenuItem title="Service" to="/service" visible={visible} setVisible={setVisible} />
                        <MenuItem title="Price" to="/price" />
                        <MenuItem title="Blog" to="/blog" />
                        <MenuItem title="Contact" to="/contact" />
                      </Menu>
                    </div>
                  </PopperWrapper>
                </div>
              )}
            >
              <div className={cx('collapse')} onClick={visible ? hide : show}>
                <FontAwesomeIcon icon={faBars} fontSize={40} />
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
