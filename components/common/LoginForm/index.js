import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from 'components/common/TextInput';
import DefaultButton from 'components/common/DefaultButton';
import { FormHelperText } from '@material-ui/core';
import styles from './LoginForm.module.scss';
import Spacer from 'components/common/Spacer';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter a valid email'),
  password: Yup.string().required('Please enter your password'),
});

const LoginForm = formProps => {
  return (
    <Formik
      validateOnBlur={false}
      validateOnMount={false}
      validateOnChange={false}
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={async values => {
        formProps.handleSubmit(values);
      }}
    >
      {props => {
        return (
          <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
            <TextInput
              onChange={props.handleChange}
              name="email"
              placeholder="Email"
              error={props.errors.email}
            />
            <Spacer m="m" />
            <TextInput
              onChange={props.handleChange}
              name="password"
              placeholder="Password"
              type="password"
              error={props.errors.password}
            />

            <FormHelperText error>{formProps.requestError}</FormHelperText>

            <p
              className={styles['forgot-password']}
              onClick={formProps.handleForgotPasswordClick}
            >
              Forgot Password?
            </p>

            <DefaultButton type="submit" variant="primary" label="Submit" />
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
