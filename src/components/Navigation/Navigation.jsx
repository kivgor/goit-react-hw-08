import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css.navlink}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.navlink}>
            Contact Book
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
