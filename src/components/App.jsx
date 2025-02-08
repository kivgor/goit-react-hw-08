import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import { refreshUserThunk } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import LoginForm from '../pages/LoginForm/LoginForm';
import RegistrationForm from '../pages/RegistrationForm/RegistrationForm';
import NotFound from '../pages/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PublicRoute from './PublicRote/PublicRoute';
import css from './App.module.css/';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationForm />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginForm />
              </RestrictedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
