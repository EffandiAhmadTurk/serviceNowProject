import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <section className={styles['container']}>
      <div className={styles['wrapper']}>
        <div>
          <h4>6 Days</h4>
          <span>
            Average
            <br />
            <span className={styles['stat-name']}>Days on Market</span>
          </span>
        </div>

        <div>
          <h4>$8,192</h4>
          <span>
            Average
            <br />
            <span className={styles['stat-name']}>Savings</span>
          </span>
        </div>
        <div>
          <h4>100.3%</h4>
          <span>
            Average Percent
            <br />
            <span className={styles['stat-name']}>Sales Price/List Price</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
