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
import { Box, Modal } from '@mui/material';
import { loginUser, logoutUser } from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Header = () => {
  const currentUser = useSelector((state) => state.user.login?.currentUser);
  // console.log('currentUser: ', currentUser);
  const [visible, setVisible] = useState(false);
  const [openLoginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const hide = () => setVisible(false);
  const show = () => setVisible(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setLoginModal(false);
  };
  const handleLogin = () => {
    let user = {
      email: email,
      password: password,
    };
    // console.log('user: ', user);
    loginUser(user, dispatch, navigate);
    handleClose();
  };

  const handleLogout = () => {
    const accessToken = currentUser.accessToken;
    logoutUser(currentUser, dispatch, navigate, accessToken);
  };
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
                {/* <MenuItem title="Service" to="/service" /> */}

                {/* <MenuItem title="Price" to="/price" /> */}
                <MenuItem title="Blog" to="/blog" />
                <MenuItem title="Contact" to="/contact" />
                {currentUser && <MenuItem title="Admin" to="/admin" />}
              </Menu>
            </div>
            {!currentUser ? (
              <div onClick={() => setLoginModal(true)} className={cx('button-login')}>
                Login
              </div>
            ) : (
              <div>
                <div> Hi! {currentUser.username}</div>
                <div onClick={handleLogout} className={cx('button-login')}>
                  Logout
                </div>
              </div>
            )}
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
                        {currentUser && <MenuItem title="Admin" to="/admin" />}
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
      <Modal
        open={openLoginModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img className={cx('logo-login')} alt="" src={logo} />

          <div className={cx('form-input-login')}>
            <input onChange={(e) => setEmail(e.target.value)} className={cx('input-modal')} placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)} className={cx('input-modal')} placeholder="password" />
            <button onClick={handleLogin} className={cx('btn-login')}>
              Login
            </button>
          </div>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
