import clsx from 'clsx';
import styles from './SchoolInfo.module.scss';

const SchoolRating = ({ rating }) => (
  <span
    className={clsx(
      styles['school-rating'],
      rating ? styles[`rating-color-${rating}`] : styles['no-rating-color']
    )}
  >
    {rating ? rating : 'N/A'}
  </span>
);

const SchoolItem = ({ school }) => {
  return (
    <>
      <div className={styles['school-item']}>
        <div className={styles['cell-1']}>{school.name}</div>
        <div className={styles['cell-2']}>
          <SchoolRating rating={school.rating} />
        </div>
        <div className={styles['cell-4']}>Grades {school.levelRange}</div>
        <div className={styles['cell-5']}>{school.type}</div>
      </div>

      <div className={styles['mobile-school-item']}>
        <SchoolRating rating={school.rating} />
        <div className={styles['description']}>
          <div className={styles['name']}>{school.name}</div>
          <div className={styles['wrapper']}>
            <span className={styles['grades']}>Grades {school.levelRange}</span>
            <div className={styles['type']}>{school.type}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SchoolItem;
