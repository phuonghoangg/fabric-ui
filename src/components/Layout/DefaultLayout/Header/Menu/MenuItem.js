import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const MenuItem = ({ title, to, visible, setVisible }) => {
  const handleClick = () => {
    console.log(visible);
    setVisible(false);
  };
  return (
    <>
      {visible ? (
        <NavLink onClick={handleClick} className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
          <span className={cx('title')}>{title}</span>
        </NavLink>
      ) : (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
          <span className={cx('title')}>{title}</span>
        </NavLink>
      )}
    </>
  );
};

export default MenuItem;
