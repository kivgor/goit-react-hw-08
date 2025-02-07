import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.thumb}>
      {isLoggedIn && <p className={css.bold}>Welcome, {user.name}</p>}
      <nav className={css.nav}>
        <button className={css.button} onClick={() => dispatch(logoutThunk())}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default UserMenu;
