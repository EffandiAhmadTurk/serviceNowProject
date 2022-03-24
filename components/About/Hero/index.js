import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <div className={styles['about-hero-wrapper']}>
        <div className={styles['left']}>
          <h1>Buying&nbsp;and selling a&nbsp;home&nbsp;was&nbsp;broken.</h1>
          <p>
            We're on a mission to end the 6% commission by leveraging the power
            of technology.
          </p>
        </div>
        <div className={styles['right']}>
          <img src={'/images/about-hero-desktop.png'} alt={'hero-img'} />
        </div>
      </div>
    </>
  );
};

export default Hero;
