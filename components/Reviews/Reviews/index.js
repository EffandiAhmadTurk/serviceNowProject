import styles from './Reviews.module.scss';
import Testimonial from 'components/Home/Testimonials/Testimonial';
import SectionTitle from 'components/common/SectionTitle';

const Reviews = ({ reviews }) => {
  return (
    <section className={styles['container']}>
      <SectionTitle>Hear it from our happy customers.</SectionTitle>
      <div className={styles['items-wrapper']}>
        {reviews.map(review => (
          <Testimonial
            key={review.mlsId}
            hasBorder
            {...review}
            isGridMode
            img={{
              src:
                review.listingImage.formats.medium?.url ||
                review.listingImage.formats.thumbnail?.url,
              alt: review.listingImage.alt,
            }}
            address={review.address}
            author={review.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
