import Card from './Card';
import styles from './RecentlyClosed.module.scss';

const calcSavings = closePrice => {
  const traditional = closePrice * 0.03;
  const felix = closePrice >= 350000 ? closePrice * 0.01 : 3500;
  const diff = traditional - felix;
  return diff;
};

const RecentlyClosed = ({ soldListings }) => {
  return (
    <div className={styles['resently-closed']}>
      <h2 className={styles['header-title']}>Recently Closed</h2>
      <p className={styles['header-subtitle']}>
        felix agents sell an average of 6 homes per month, making us 6 times as
        experienced.
      </p>
      <div className={styles['content']}>
        {soldListings.map(({ image, street, city, closePrice, mlsId }) => (
          <Card
            key={mlsId}
            image={image}
            saved={calcSavings(closePrice)}
            address={street}
            city={city}
            mlsId={mlsId}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyClosed;
