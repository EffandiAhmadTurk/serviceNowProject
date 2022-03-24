import { useState, useEffect } from 'react';
import { YelpRating } from './Yelp';
import axios from 'axios';
import styles from './Card.module.scss';
import LoadingBox from 'components/common/LoadingBox';
import clsx from 'clsx';

const Card = ({ yelpId, name }) => {
  const [yelpReview, setYelpReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getYelpReview = async yelpId => {
    try {
      const { data: yelpReview } = await axios.get(
        `/api/locations/yelp-review`,
        {
          params: {
            yelpId,
          },
          headers: {
            'Cache-Control': 's-maxage=86400',
          },
        }
      );
      return yelpReview;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const yelpReview = await getYelpReview(yelpId);
        setYelpReview(yelpReview);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className={clsx(styles['card'], isLoading && styles['full-width'])}>
      {isLoading && (
        <div style={{ height: 90 }}>
          <LoadingBox />
        </div>
      )}

      {!isLoading && (
        <>
          <img
            className={styles['image']}
            src={yelpReview?.imageUrl || '/images/default-placeholder.png'}
            alt=""
          />

          <div className={styles['card-content']}>
            <h4 className={styles['name']}>{name}</h4>

            {isError && (
              <p className={styles['error']}>
                Unable to get rating at this time
              </p>
            )}

            {!isError && (
              <>
                <div className={styles['rating-block']}>
                  <YelpRating value={yelpReview?.rating} />
                  <img
                    className={styles['yelp-logo']}
                    src="/icons/yelp_stars/logo.svg"
                  />
                </div>
                <p className={styles['counter']}>
                  {yelpReview?.reviewCount} Reviews
                </p>
                {/* <p className={styles['review']}>{yelpReview?.review.text}</p> */}
                <a
                  className={styles['link']}
                  target="_blank"
                  href={yelpReview?.review.url}
                >
                  See all&nbsp;Reviews
                </a>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
