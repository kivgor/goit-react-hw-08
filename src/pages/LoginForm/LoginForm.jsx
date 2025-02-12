import { useDispatch } from 'react-redux';

import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  return (
    <div className={css.formThumb}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h3 className={css.title}>Login</h3>
          <label htmlFor="" className={css.label}>
            <span>Email:</span>
            <Field
              name="email"
              type="email"
              className={css.field}
              placeholder="email@gmail.com"
              required
            ></Field>
          </label>

          <label htmlFor="" className={css.label}>
            <span>Password:</span>
            <Field
              name="password"
              type="password"
              className={css.field}
              required
            ></Field>
          </label>
          <button type="submit" className={css.button}>
            Login
          </button>
          <p>
            You do not have account?{' '}
            <Link to="/register" className={css.link}>
              Lets create one
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
