import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import TextInput from '../../common/TextInput';
import { FormHelperText } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DefaultButton from '../../common/DefaultButton';
import { AuthContext } from '../../../contexts/AuthContext';
import { resetUserPassword } from '../../../utils/auth';
import Loader from '../../common/Loader';
import styles from './Form.module.scss';
import Background from 'components/common/Background';
import Spacer from 'components/common/Spacer';

const ForgotPasswordSchema = Yup.object().shape({
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

const Success = () => (
  <div className={styles['success-wrapper']}>
    <h3>
      Your Password has been reset successfully, you will now get redirected to
      the homepage...
    </h3>
  </div>
);

const ResetPasswordForm = ({ code }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { setUserInfo } = useContext(AuthContext);

  const handleSubmit = async values => {
    setIsLoading(true);
    try {
      const userInfo = await resetUserPassword({ ...values, code });
      setUserInfo(userInfo);
      setIsSuccess(true);
    } catch (error) {
      // TODO!!
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Redirect user to the homepage if password was changed successfully
    if (isSuccess) {
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  }, [isSuccess]);

  return (
    <div className={styles['container']}>
      <Background />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isSuccess ? (
            <Success />
          ) : (
            <Formik
              validateOnBlur={false}
              validateOnMount={false}
              validateOnChange={false}
              initialValues={{ password: '', passwordConfirmation: '' }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={values => {
                handleSubmit(values);
              }}
            >
              {props => {
                return (
                  <form
                    id={styles['reset-password-form']}
                    noValidate
                    autoComplete="off"
                    onSubmit={props.handleSubmit}
                  >
                    <h1>Reset Your Password </h1>
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

                    <Spacer m="m" />

                    <FormHelperText error>{props.requestError}</FormHelperText>
                    <DefaultButton
                      type="submit"
                      label="Submit"
                      variant="primary"
                    />
                  </form>
                );
              }}
            </Formik>
          )}
        </>
      )}
    </div>
  );
};

export default ResetPasswordForm;
