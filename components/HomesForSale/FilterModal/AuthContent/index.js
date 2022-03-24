import { useState, useContext } from 'react';
import SignupForm from 'components/common/SignupForm';
import LoginForm from 'components/common/LoginForm';
import { signUpUserViaLocal, logInUserViaLocal } from '../../../../utils/auth';
import submitLeadInfo from '../../../../utils/submitLeadInfo';
import submitGoalToGoogleTagManager from '../../../../utils/submitGoalToGoogleTagManager';
import { AuthContext } from 'contexts/AuthContext';
import { ModalContext } from 'contexts/ModalContext';
import SectionTitle from '../../../common/SectionTitle';
import styles from '../FilterModal.module.scss';
import { useRouter } from 'next/router';
import Loader from 'components/common/Loader';

const AuthForms = ({ saveFilters, filters, setFilterModalState }) => {
  const [requestError, setRequestError] = useState('');
  const { setUserInfo } = useContext(AuthContext);
  const { setIsResetPasswordModalOpen } = useContext(ModalContext);
  const { push, query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpSubmit = async values => {
    const authInfo = {
      email: values.email,
      password: values.password,
      username: values.email,
    };
    setIsLoading(true);
    try {
      const userInfo = await signUpUserViaLocal(authInfo);
      setUserInfo(userInfo);
      const { user, jwt } = userInfo;
      const contactId = await submitLeadInfo({
        ...user,
        action: 'Created Account',
        category: 'Buyer',
      });
      submitGoalToGoogleTagManager({
        event: 'clientId',
        clientId: contactId,
      });

      submitGoalToGoogleTagManager({
        event: 'formSubmit',
        source: 'mainSite',
        type: 'createAccount',
        filters: {
          home_type: filters.type,
          bed_preference: filters.beds,
          bath_preference: filters.baths,
          location_preference:
            filters.locations.map(({ name }) => name).join(', ') || null,
          min_price: filters.priceFrom,
          max_price: filters.priceTo,
        },
      });
      push('/feed');
      setFilterModalState({ isOpen: false, isCloseHidden: false });
      saveFilters({ filters, user, token: jwt });
      setIsLoading(false);
    } catch (error) {
      console.log('setRequestError ==> ', error.message);
      setRequestError(error.message);
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async values => {
    const authInfo = {
      identifier: values.email,
      password: values.password,
    };
    try {
      setIsLoading(true);
      const userInfo = await logInUserViaLocal(authInfo);
      setUserInfo(userInfo);
      push('/feed');
      setFilterModalState({ isOpen: false, isCloseHidden: false });
      // const { user, jwt } = userInfo;
      // saveFilters({ filters, user, token: jwt });
    } catch (error) {
      setIsLoading(false);
      setRequestError(error.message);
    }
  };

  const handleForgotPasswordClick = () => {
    setIsResetPasswordModalOpen(true);
  };

  const SignUpContent = () => (
    <>
      <SignupForm
        requestError={requestError}
        handleSubmit={handleSignUpSubmit}
      />

      <p className={styles['alt-actions']}>
        Already have an account?{' '}
        <span
          onClick={() => {
            setRequestError('');
            push('/feed?auth=login');
          }}
        >
          Log in
        </span>
      </p>
    </>
  );

  const LoginContent = () => (
    <>
      <LoginForm
        handleSubmit={handleLoginSubmit}
        requestError={requestError}
        handleForgotPasswordClick={handleForgotPasswordClick}
      />
      <div className={styles['alt-actions']}>
        <p>
          Need an account?{' '}
          <span
            onClick={() => {
              setRequestError('');
              push('/feed?auth=signup');
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </>
  );

  return (
    <>
      {!isLoading && (
        <>
          <SectionTitle eyebrow="Listing feed">
            {query.auth === 'login'
              ? 'Log in to view your feed'
              : 'Sign up to create your feed'}
          </SectionTitle>
          {isLoading && <Loader />}

          {query.auth === 'login' ? <LoginContent /> : <SignUpContent />}
        </>
      )}
    </>
  );
};

export default AuthForms;
