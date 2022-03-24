import styles from './MidCopy.module.scss';

const MidCopy = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['wrapper']}>
        <h3>
          <span>70</span>
          <span className={styles['plus']}>+ </span>Five Star Reviews
        </h3>
        <p>
          felix is where five-start service meets low commission fees. Our
          tech-friendly approach allows our agents to close more deals and
          charge a lower commission as a result. Will you be our next five-star
          review?
        </p>
      </div>
    </div>
  );
};

export default MidCopy;
