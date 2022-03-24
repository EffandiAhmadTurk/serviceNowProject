import ModalTemplate from '../common/ModalTemplate';
import { useState, useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../TextInput';
import DefaultButton from '../../DefaultButton';
import { FormHelperText } from '@material-ui/core';
import Loader from '../../Loader';
import { ModalContext } from '../../../../contexts/ModalContext';
import { forgotUserPassword } from '../../../../utils/auth';
import ModalTitle from '../common/ModalTitle';
import ModalCopy from '../common/ModalCopy';

const ResetPasswordModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    setIsResetPasswordModalOpen,
    isResetPasswordModalOpen,
    isModalClosable,
  } = useContext(ModalContext);

  const handleSubmit = async values => {
    setIsLoading(true);
    try {
      await forgotUserPassword(values);
      setIsSuccess(true);
    } catch (error) {
      setRequestError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalTemplate
      isOpen={isResetPasswordModalOpen}
      handleClose={() => {
        if (isModalClosable) {
          setIsSuccess(false);
          setIsResetPasswordModalOpen(false);
        }
      }}
      color="yellow"
      image="/images/yellow-house-bg.png"
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <ModalTitle>Reset your password</ModalTitle>

          {isSuccess ? (
            <div>
              <ModalCopy>
                A link to reset your password has been sent to your email.
              </ModalCopy>
              <DefaultButton
                onClick={() => {
                  setIsSuccess(false);
                  setRequestError('');
                  setIsResetPasswordModalOpen(false);
                }}
                variant="primary"
                label="Sounds good"
              />
            </div>
          ) : (
            <ResetPasswordForm
              setRequestError={setRequestError}
              requestError={requestError}
              handleSubmit={handleSubmit}
            />
          )}
        </>
      )}
    </ModalTemplate>
  );
};

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter a valid email'),
});

const ResetPasswordForm = formProps => {
  return (
    <Formik
      validateOnBlur={false}
      validateOnMount={false}
      validateOnChange={false}
      initialValues={{ email: '' }}
      validationSchema={ResetPasswordSchema}
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
              style={{
                marginBottom: 25,
              }}
            />

            <FormHelperText error>{formProps.requestError}</FormHelperText>

            <DefaultButton type="submit" variant="primary" label="Submit" />
          </form>
        );
      }}
    </Formik>
  );
};

export default ResetPasswordModal;
