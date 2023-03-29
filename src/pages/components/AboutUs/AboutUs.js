import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';

import logoAboutUs from '~/assets/image/aboutUs.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faHandshakeAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';

const cx = classNames.bind(styles);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'inherit',
  height: 'inherit',
  margin: 0,
  padding: 0,
};

const AboutUs = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('image-logo')}>
          <img src={logoAboutUs} alt="" className={cx('logo')} />
          <div className={cx('logo-description')}>20+ Years Experience In Textiles Production</div>
        </div>
        <div className={cx('info')}>
          <div className={cx('title-1')}>about us</div>
          <div className={cx('title-2')}>FOUNDATION & DEVELOPMENT</div>
          <div className={cx('description')}>
            COMO is a Vietnamese textile and garment manufacturer and exporter that was established in 2004. We have an
            integrated vertical supply chain in Vietnam, which enables them to maintain control from yarn to garment
            production, resulting in cost savings and streamlined communication. We have formed strategic joint ventures
            and invested in textile mills and garment factories to secure significant production capacity. Our
            commitment is to provide their buyers with the best pricing, quality, and delivery in Vietnam. COMO offers a
            range of high-quality, fashionable, and sustainable ready fabrics made in Vietnam, as well as representing
            many well-known material manufacturers. We have expanded into the food industry with their coconut chips
            snack, COCOMOLAT®.
          </div>
          <div className={cx('play-button')} onClick={handleOpen}>
            <FontAwesomeIcon icon={faCirclePlay} color="#FF4800" fontSize={70} beatFade style={{ color: '#FB692F' }} />
            <p className={cx('title-play')}>Play video</p>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            className={cx('iframe-utube')}
            src="https://www.youtube.com/embed/KceIOqbAF7I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
};

export default AboutUs;
