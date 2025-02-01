import { Field, Form, Formik } from 'formik';
import css from './LoginPage.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div className={css.formThumb}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          {/* <label htmlFor="">
            <span>Name:</span>
            <Field name="name"></Field>
          </label> */}
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
