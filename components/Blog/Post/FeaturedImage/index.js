import styles from './FeaturedImage.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FeaturedImage = ({ src, alt }) => {
  return (
    <LazyLoadImage
      threshold={100}
      className={styles['image']}
      src={src}
      alt={alt}
    />
  );
};

export default FeaturedImage;
