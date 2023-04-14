import BannerChild from '../components/BannerChild/BannerChild';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import CreateTypeProduct from './CreateTypeProduct/CreateTypeProduct';
import CreateProduct from './CreateProduct/CreateProduct';
import { useEffect, useState } from 'react';
import CreateBlog from './CreateBlog/CreateBlog';
const cx = classNames.bind(styles);

const Admin = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className={cx('wrapper')}>
      <BannerChild title="Admin" />
      <div className={cx('wrap-2-button')}>
        <div onClick={() => setTab(1)} className={tab === 1 ? cx('btn-tab-active') : cx('btn-tab')}>
          Type
        </div>
        <div onClick={() => setTab(2)} className={tab === 2 ? cx('btn-tab-active') : cx('btn-tab')}>
          Apparel
        </div>
        <div onClick={() => setTab(3)} className={tab === 3 ? cx('btn-tab-active') : cx('btn-tab')}>
          Blog
        </div>
      </div>
      {tab === 1 ? <CreateTypeProduct /> : tab === 2 ? <CreateProduct /> : <CreateBlog />}
    </div>
  );
};

export default Admin;
