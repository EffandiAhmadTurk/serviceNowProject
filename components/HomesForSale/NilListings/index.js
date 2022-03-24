import styles from './NilListings.module.scss';

const NilListings = () => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>
        We couldn't find any listings for this criteria...
      </span>
    </div>
  );
};

export default NilListings;
