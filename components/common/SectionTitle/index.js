import clsx from 'clsx';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({
  children,
  title,
  eyebrow = null,
  eyebrowClassName = null,
  isCenterAligned = null,
  whiteTitle,
}) => (
  <div className={styles['container']}>
    {eyebrow && (
      <h3
        className={clsx(
          styles['eyebrow'],
          isCenterAligned && styles['center'],
          eyebrowClassName
        )}
      >
        {eyebrow}
      </h3>
    )}
    <h2
      className={clsx(
        styles['title'],
        isCenterAligned && styles['center'],
        whiteTitle && styles['white']
      )}
    >
      {title || children}
    </h2>
  </div>
);
export default SectionTitle;
