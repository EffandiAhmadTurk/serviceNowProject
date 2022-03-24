import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';
import styles from './AlternativeActions.module.scss';

const AlternativeActions = ({ type }) => {
  const { setIsLoginModalOpen, setIsSignupModalOpen } = useContext(
    ModalContext
  );

  const logInAction = (
    <p className={styles['container']}>
      Already a member?{' '}
      <button
        onClick={() => {
          setIsSignupModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      >
        Log In
      </button>
    </p>
  );
  const signUpAction = (
    <p className={styles['container']}>
      Not a member yet?{' '}
      <button
        onClick={() => {
          setIsLoginModalOpen(false);
          setIsSignupModalOpen(true);
        }}
      >
        Sign up
      </button>
    </p>
  );
  return type === 'signup' ? logInAction : signUpAction;
};

export default AlternativeActions;
