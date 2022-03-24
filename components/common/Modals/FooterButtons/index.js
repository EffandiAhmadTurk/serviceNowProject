import { useRouter } from 'next/router';
import styles from './FooterButtons.module.scss';

//////////////////////////////////////////////////////////////////////////////////
/////////// Leaving as is in case we bring back Facebook and Google logins ///////
//////////////////////////////////////////////////////////////////////////////////

const FooterButtons = ({ type }) => {
  const router = useRouter();

  const handleGoogleLogInClick = () => {
    // Set last path user was one before sending user to google
    router.push(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/connect/google`);
  };

  const handleFacebookLogInClick = () => {
    // Set last path user was one before sending user to facebook
    router.push(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/connect/facebook`);
  };

  let buttonText = '';
  if (type === 'signup') {
    buttonText = 'Sign Up with';
  }
  if (type === 'login') {
    buttonText = 'Log in with';
  }

  return (
    <div className={styles['modal-footer-container']}>
      <div className={styles['footer-buttons']}>
        <button
          onClick={handleFacebookLogInClick}
          className={styles['footer-button']}
        >
          <img src={'/icons/fb-blue-icon.svg'} alt={'FB-icon'} />
          <span className={styles['desktop-link']}>{buttonText} Facebook</span>
          <span className={styles['mobile-link']}>Facebook</span>
        </button>
        <span className={styles['button-gap']}></span>
        <button
          onClick={handleGoogleLogInClick}
          className={styles['footer-button']}
          style={{ borderColor: '#FF5050' }}
        >
          <img src={'/icons/google-red-icon.svg'} alt={'Goggle-icon'} />
          <span style={{ color: '#FF5050' }} className={styles['desktop-link']}>
            {buttonText} Google
          </span>
          <span style={{ color: '#FF5050' }} className={styles['mobile-link']}>
            Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default FooterButtons;
