import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import NotFound from '../pages/NotFound/NotFound';
import css from './App.module.css/';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserThunk } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

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
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
