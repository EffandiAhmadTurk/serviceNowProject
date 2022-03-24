import Link from 'next/link';
import styles from './PopularListings.module.scss';

const PopularListings = ({ nearbyListings }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['column']}>
        <h3 className={styles['column-title']}>Popular Listings nearby</h3>
        {nearbyListings?.map(({ slug, street, mlsId, city }) => (
          <Link
            key={mlsId}
            href="/home-for-sale/[address]/[mlsId]"
            as={`/home-for-sale/${slug}/${mlsId}`}
          >
            <a className={styles['column-link']}>
              {street} {city}, TN
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularListings;
