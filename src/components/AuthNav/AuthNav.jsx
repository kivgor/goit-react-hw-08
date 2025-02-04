import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/register" className={css.navlink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.navlink}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
