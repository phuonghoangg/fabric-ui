import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const Menu = ({ children }) => {
  return <nav className={cx('wrapper-menu')}>{children}</nav>;
};

export default Menu;
