import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  console.log(location);
  return isLoggedIn ? (
    <Navigate to={location?.state || '/contacts'} />
  ) : (
    children
  );
  // return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default RestrictedRoute;
