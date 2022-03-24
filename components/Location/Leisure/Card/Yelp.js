import styles from './Card.module.scss';

export const YelpRating = ({ value }) => {
  let image = '/icons/yelp_stars/0.png';

  if (value === 5) {
    image = '/icons/yelp_stars/5.png';
  } else if (value < 5 && value >= 4.5) {
    image = '/icons/yelp_stars/4_half.png';
  } else if (value < 4.5 && value >= 4) {
    image = '/icons/yelp_stars/4.png';
  } else if (value < 4 && value >= 3.5) {
    image = '/icons/yelp_stars/3_half.png';
  } else if (value < 3.5 && value >= 3) {
    image = '/icons/yelp_stars/3.png';
  } else if (value < 3 && value >= 2.5) {
    image = '/icons/yelp_stars/2_half.png';
  } else if (value < 2.5 && value >= 2) {
    image = '/icons/yelp_stars/2.png';
  } else if (value < 2 && value >= 1.5) {
    image = '/icons/yelp_stars/1_half.png';
  } else if (value < 1.5 && value >= 1) {
    image = '/icons/yelp_stars/1.png';
  } else if (value < 1) {
    image = '/icons/yelp_stars/0.png';
  }

  return <img className={styles['yelp-rating']} src={image} alt="rating" />;
};
