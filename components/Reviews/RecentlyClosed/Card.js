import CurrencyFormat from '../../../utils/CurrencyFormat';
import styles from './RecentlyClosed.module.scss';

const Card = ({
  image = '/images/default-placeholder.png',
  saved,
  address,
  city,
  mlsId,
}) => {
  return (
    <div className={styles['reviews-card']}>
      <picture>
        <img
          src={image}
          alt={`Image for ${address}`}
          className={styles['reviews-card-image']}
        />
      </picture>
      <h3 className={styles['reviews-card-title']}>
        Saved <CurrencyFormat value={saved} />
      </h3>
      <p className={styles['reviews-card-address']}>
        {address}, {city}
      </p>
    </div>
  );
};

export default Card;
