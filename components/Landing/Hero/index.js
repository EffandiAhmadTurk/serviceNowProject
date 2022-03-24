import styles from './Hero.module.scss';
import Background from 'components/common/Background';
import clsx from 'clsx';
import ContentCard from '../ContentCard';
import Spacer from 'components/common/Spacer';

const Hero = ({
  image,
  heading,
  subheading,
  primaryAction,
  secondaryAction,
  disclaimer,
  patternOne,
  patternTwo,
  reviews,
  chipLabel,
}) => {
  return (
    <section className={styles['hero']}>
      {/* Background Start */}
      <div
        className={clsx(styles['background'], image && styles['with-image'])}
      >
        <Background />
      </div>
      {/* Background End */}
      <div className={styles['container']}>
        <Spacer p="xl" />
        <ContentCard
          patternLeft={patternOne}
          patternRight={patternTwo}
          image={image}
          textAlign="left"
          innerContent={
            <div
              className={clsx(
                styles['heading-wrapper'],
                !image && styles['wo-image']
              )}
            >
              <h1>{heading}</h1>
              <h2>{subheading}</h2>
              {chipLabel && <span className={styles['chip']}>{chipLabel}</span>}
            </div>
          }
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
          disclaimer={disclaimer}
          isDisclaimerWhite
          isHero
        />
        <Spacer p="xl" />

        <Spacer m={reviews ? 'l' : ''} p={reviews ? 'xxl' : 'xl'} />

        {reviews && (
          <div className={styles['reviews-container']}>
            <div className={styles['reviews-wrapper']}>{reviews}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
