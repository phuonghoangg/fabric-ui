import classNames from 'classnames/bind';
import styles from './Quotes.module.scss';
import CountUp from 'react-countup';
import { useState } from 'react';
import { MenuItem, Select, TextField } from '@mui/material';

const cx = classNames.bind(styles);

const Quotes = () => {
  const [selected, setSelected] = useState('Select A Service');
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('quotes')}>
          <div className={cx('title-1')}>GET A QUOTE</div>
          <div className={cx('title-2')}>Request A Free Cost</div>
          <div className={cx('title-3')}>Please contact us for a detailed cost and consultation</div>
          <div className={cx('number-count')}>
            <div className={cx('wrap-count')}>
              <CountUp enableScrollSpy end={250} duration={5} className={cx('number')} />
              <div className={cx('description-number')}>SKilled Experts</div>
            </div>
            <div className={cx('wrap-count')}>
              <CountUp enableScrollSpy end={550} duration={5} className={cx('number')} />
              <div className={cx('description-number')}>Happy Clients</div>
            </div>
            <div className={cx('wrap-count')}>
              <CountUp enableScrollSpy end={1200} separator={''} duration={5} className={cx('number')} />
              <div className={cx('description-number')}>Complete Cart</div>
            </div>
          </div>
        </div>
        <div className={cx('contact')}>
          <input className={cx('input-contact')} placeholder="Your Name" />
          <input className={cx('input-contact')} placeholder="Your Email" />
          <Select
            style={{ backgroundColor: '#fff', width: '80%', height: 50, fontSize: 16, marginBottom: 20 }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selected}
            onChange={handleChange}
            autoWidth
            label=""
            className={cx('select-wrap')}
          >
            <MenuItem style={{ fontSize: 16 }} value="Select A Service">
              <em>Select A Service</em>
            </MenuItem>
            <MenuItem style={{ fontSize: 16 }} value={10}>
              Textile
            </MenuItem>
            <MenuItem style={{ fontSize: 16 }} value={21}>
              Garment
            </MenuItem>
            <MenuItem style={{ fontSize: 16 }} value={22}>
              Food
            </MenuItem>
          </Select>
          <button className={cx('btn-get')}>Get A Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
