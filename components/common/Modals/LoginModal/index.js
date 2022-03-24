import { useState, useContext } from 'react';
import Loader from '../../Loader';
import { ModalContext } from '../../../../contexts/ModalContext';
import { AuthContext } from '../../../../contexts/AuthContext';
import { logInUserViaLocal } from '../../../../utils/auth';
import ModalTemplate from '../common/ModalTemplate';
import AlternativeActions from '../common/AlternativeActions';
import LoginForm from 'components/common/LoginForm';
import ModalTitle from '../common/ModalTitle';

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState('');

  const {
    setIsLoginModalOpen,
    setIsResetPasswordModalOpen,
    isLoginModalOpen,
    isModalClosable,
  } = useContext(ModalContext);
  const { setUserInfo } = useContext(AuthContext);

  const handleSubmit = async values => {
    const authInfo = {
      identifier: values.email,
      password: values.password,
    };
    try {
      setIsLoading(true);
      const userInfo = await logInUserViaLocal(authInfo);
      setUserInfo(userInfo);
      setIsLoading(false);
      setIsLoginModalOpen(false);
    } catch (error) {
      setIsLoading(false);
      setRequestError(error.message);
    }
  };

  const handleForgotPasswordClick = () => {
    setIsResetPasswordModalOpen(true);
    setIsLoginModalOpen(false);
  };

  return (
    <ModalTemplate
      isOpen={isLoginModalOpen}
      handleClose={
        isModalClosable ? () => setIsLoginModalOpen(false) : () => {}
      }
      color="yellow"
      image="/images/yellow-house-bg.png"
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <ModalTitle>Log In</ModalTitle>

          <LoginForm
            setRequestError={setRequestError}
            requestError={requestError}
            handleSubmit={handleSubmit}
            handleForgotPasswordClick={handleForgotPasswordClick}
          />
          <AlternativeActions type="login" />
        </>
      )}
    </ModalTemplate>
  );
};

export default LoginModal;
