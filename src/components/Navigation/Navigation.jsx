import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css.navlink}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={css.navlink}>
          Contact Book
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
