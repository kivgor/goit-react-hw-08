import { Field, Form, Formik } from 'formik';
import css from './LoginPage.module.css';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    // .unwrap()
    // .then(() => navigate('/'));
    options.resetForm();
  };
  return (
    <div className={css.formThumb}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h3 className={css.title}>Login</h3>
          <label htmlFor="" className={css.label}>
            <span>Email:</span>
            <Field name="email" className={css.field}></Field>
            {/* <Field name="email" type="email"></Field> */}
          </label>

          <label htmlFor="" className={css.label}>
            <span>Password:</span>
            <Field
              name="password"
              type="password"
              className={css.field}
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

export default LoginPage;
