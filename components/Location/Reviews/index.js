import { Rating } from '@material-ui/lab';
import { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';
import { AuthContext } from '../../../contexts/AuthContext';
import DefaultButton from 'components/common/DefaultButton';
import Section from '../common/Section';
import Review from './Review';
import styles from './Reviews.module.scss';
import FormatedNumber from '../common/FormatedNumber';
import { COMMON_OG_IMAGE } from 'utils/constants';
import { Star } from '@styled-icons/boxicons-solid';

const Reviews = ({
  locationName,
  locationReviews,
  locationSlug,
  locationReviewCount,
  locationReviewAverage,
  locationPath,
  locationFeaturedImage,
}) => {
  const { setLocationReviewModalInfo, setIsLoginModalOpen } = useContext(
    ModalContext
  );
  const { isAuthenticated } = useContext(AuthContext);

  const newlocationReviewModalInfo = {
    isOpen: true,
    locationName,
    locationSlug,
  };

  const handleClick = () =>
    isAuthenticated
      ? setLocationReviewModalInfo(newlocationReviewModalInfo)
      : setIsLoginModalOpen(true);

  let reviewsSchema = {};

  if (locationReviews?.length) {
    reviewsSchema = {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: locationReviewAverage,
        ratingCount: locationReviewCount,
      },
      reviews: locationReviews.map(
        ({ quote, body, user, starCount, createdAt }) => {
          return {
            '@type': 'Review',
            author: user.username,
            datePublished: createdAt,
            description: body,
            name: quote,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: starCount,
            },
          };
        }
      ),
    };
  }

  const image =
    locationFeaturedImage?.formats.small.url ||
    locationFeaturedImage?.formats.thumbnail.url ||
    COMMON_OG_IMAGE;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    image: [image],
    '@id': `https://www.felixhomes.com${locationPath}/reviews`,
    description: `See the latest ${locationName} homes for sale and real estate listings. View listing photos, property details, and prices for houses in ${locationName}, TN.`,
    name: locationName,
    ...reviewsSchema,
  };

  return (
    <Section icon={<Star size={32} />} heading={`Reviews of ${locationName}`}>
      <div className={styles['container']}>
        <div className={styles['rating-wrapper']}>
          <Rating
            className={styles['rating']}
            readOnly
            precision={0.5}
            value={locationReviewAverage}
          />
          <FormatedNumber
            className={styles['score']}
            value={locationReviewAverage}
            fixedDecimalScale
          />
          <span className={styles['text']}>
            ({locationReviewCount} Review{locationReviewCount > 1 ? 's' : null})
          </span>
        </div>
        <div className={styles['cta-wrapper']}>
          <p className={styles['text']}>
            Share your opinion about {locationName} with former, current and
            prospective residents.
          </p>
          <div className={styles['button-wrapper']}>
            <DefaultButton
              onClick={handleClick}
              label="Submit Your Review"
              variant="primary"
            />
          </div>
        </div>
        <div className={styles['reviews-block']}>
          {locationReviewCount > 0 &&
            locationReviews.map((review, index) => {
              if (review.status === 'published') {
                return <Review key={index} {...review} />;
              }
            })}
        </div>
      </div>{' '}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Section>
  );
};

export default Reviews;
