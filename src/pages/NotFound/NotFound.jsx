import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
const NotFound = () => {
  return (
    <div className={css.center}>
      <p className={css.text}>Page Not Found</p>
      <Link to="/" className={css.button}>
        Home Page
      </Link>
    </div>
  );
};

export default NotFound;
