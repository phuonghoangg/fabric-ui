import classNames from 'classnames/bind';
import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

const Blog = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('title-1')}>OUR BLOG</div>
        <div className={cx('title-2')}>Latest From Blog</div>
      </div>
    </div>
  );
};

export default Blog;
