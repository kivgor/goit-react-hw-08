import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const initialValues = {
    email: '',
    password: '',
    name: '',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate('/'));
  };
  return (
    <div className={css.formThumb}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h3 className={css.title}>Register</h3>
          <label htmlFor="" className={css.label}>
            <span>Name:</span>
            <Field name="name" className={css.field} required></Field>
          </label>
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
            Register
          </button>
          <p>
            You already have account?{' '}
            <Link to="/login" className={css.link}>
              Log in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
