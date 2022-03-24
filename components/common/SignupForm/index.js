import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from 'components/common/TextInput';
import DefaultButton from 'components/common/DefaultButton';
import { FormHelperText } from '@material-ui/core';
import Spacer from 'components/common/Spacer';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter a valid email'),
  password: Yup.string()
    .required('Please enter a password')
    .min(8, 'Must be at least 8 characters long')
    .matches(/[a-z]/, 'Must have at least one lowercase letter')
    .matches(/[A-Z]/, 'Must have at least one uppercase letter')
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      'Must have at least one number or special character'
    ),
  passwordConfirmation: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignupForm = formProps => {
  return (
    <Formik
      validateOnBlur={false}
      validateOnMount={false}
      validateOnChange={false}
      initialValues={{ email: '', password: '', passwordConfirmation: '' }}
      validationSchema={SignupSchema}
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
            <Spacer m="m" />
            <TextInput
              onChange={props.handleChange}
              name="passwordConfirmation"
              placeholder="Confirm Password"
              type="password"
              error={props.errors.passwordConfirmation}
            />
            <Spacer m="s" />

            <FormHelperText error>{formProps.requestError}</FormHelperText>

            <DefaultButton type="submit" label="Submit" variant="primary" />
          </form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
