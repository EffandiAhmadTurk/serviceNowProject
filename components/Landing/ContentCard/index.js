import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ContentCard.module.scss';
import clsx from 'clsx';

const ContentCard = ({
  image,
  textAlign = 'right',
  eyebrow,
  heading,
  innerContent,
  primaryAction,
  secondaryAction,
  disclaimer,
  isDisclaimerWhite,
  patternLeft,
  patternRight,
  isHero,
}) => {
  return (
    <div className={styles['content-card']}>
      <div
        className={clsx(
          styles['container'],
          styles[`text-${textAlign}`],
          !image && styles['no-image-adjustments']
        )}
      >
        {image && (
          <LazyLoadImage
            className={clsx(
              styles['image'],
              isHero && styles['hero-mobile-adjustments'],
              image?.contain && styles['object-fit-contain']
            )}
            src={image?.src}
            alt={image?.alt}
          />
        )}

        <div
          className={clsx(
            styles['content-wrapper'],
            styles[`text-${textAlign}`],
            !image && styles['no-image-adjustments']
          )}
        >
          {patternLeft && (
            <div
              className={clsx(
                styles['pattern-left'],
                styles['pattern'],
                isHero && styles['hero-adjustments']
              )}
            >
              {patternLeft}
            </div>
          )}
          {patternRight && (
            <div
              className={clsx(
                styles['pattern-right'],
                styles['pattern'],
                isHero && styles['hero-adjustments']
              )}
            >
              {patternRight}
            </div>
          )}
          <div
            className={clsx(
              styles['contents'],
              isHero && styles['hero-adjustments'],
              image && styles['padding-right']
            )}
          >
            {eyebrow && <h3 className={styles['eyebrow']}>{eyebrow}</h3>}
            {heading && <h2 className={styles['heading']}>{heading}</h2>}
            <div className={styles['inner-content']}>{innerContent}</div>
            <div className={styles['actions']}>
              {primaryAction}
              {secondaryAction}
            </div>
            {disclaimer && (
              <p
                className={clsx(
                  styles['disclaimer'],
                  isDisclaimerWhite && styles['white']
                )}
              >
                * {disclaimer}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
