import ModalTemplate from '../common/ModalTemplate';
import { useState, useContext } from 'react';
import Loader from '../../Loader';
import { ModalContext } from '../../../../contexts/ModalContext';
import { AuthContext } from '../../../../contexts/AuthContext';
import { signUpUserViaLocal } from '../../../../utils/auth';
import submitLeadInfo from '../../../../utils/submitLeadInfo';
import submitGoalToGoogleTagManager from '../../../../utils/submitGoalToGoogleTagManager';
import AlternativeActions from '../common/AlternativeActions';
import SignupForm from 'components/common/SignupForm';
import ModalTitle from '../common/ModalTitle';
import { useRouter } from 'next/router';

const SignupModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState('');
  const { push } = useRouter();

  const {
    setIsSignupModalOpen,
    isSignupModalOpen,
    isModalClosable,
    setFilterModalState,
  } = useContext(ModalContext);
  const { setUserInfo } = useContext(AuthContext);

  const handleSubmit = async values => {
    const authInfo = {
      email: values.email,
      password: values.password,
      username: values.email,
    };
    try {
      setIsLoading(true);
      const userInfo = await signUpUserViaLocal(authInfo);
      setUserInfo(userInfo);
      const { user } = userInfo;

      const contactId = await submitLeadInfo({
        ...user,
        action: 'Created Account',
        category: 'Buyer',
      });
      submitGoalToGoogleTagManager({
        event: 'formSubmit',
        source: 'mainSite',
        type: 'createAccount',
      });

      submitGoalToGoogleTagManager({
        event: 'clientId',
        clientId: contactId,
      });

      setIsLoading(false);
      setIsSignupModalOpen(false);

      setFilterModalState({ isOpen: true });
      push('/feed');
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setRequestError(error.message);
    }
  };

  return (
    <ModalTemplate
      isOpen={isSignupModalOpen}
      handleClose={
        isModalClosable ? () => setIsSignupModalOpen(false) : () => {}
      }
      color="yellow"
      image="/images/yellow-house-bg.png"
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <ModalTitle>Sign Up</ModalTitle>
          <SignupForm
            setRequestError={setRequestError}
            requestError={requestError}
            handleSubmit={handleSubmit}
          />
          <AlternativeActions type="signup" />
        </>
      )}
    </ModalTemplate>
  );
};

export default SignupModal;
