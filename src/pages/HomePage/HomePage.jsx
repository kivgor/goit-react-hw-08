import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.center}>
      <h1 className={css.title}>HomePage</h1>
      <p className={css.text}>
        Enjoy your Contact list, which is always at hand
      </p>
      <NavLink to="/contacts" className={css.button}>
        Contact Book
      </NavLink>
    </div>
  );
};

export default HomePage;
