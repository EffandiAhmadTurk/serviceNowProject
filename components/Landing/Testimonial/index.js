import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Testimonial.module.scss';
import { Rating } from '@material-ui/lab';

const Testimonial = ({ quote, copy, subText, image }) => {
  return (
    <section className={styles['container']}>
      <div className={styles['container']}>
        <div className={styles['wrapper']}>
          <div className={styles['contents']}>
            <div className={styles['contents-wrapper']}>
              <div className={styles['main-container']}>
                <div className={styles['reviews']}>
                  <Rating name="read-only" value={5} readOnly />
                  <div className={styles['google']}>
                    <img src="/images/Google.svg" alt="Google" />
                    <div>
                      <span>Reviews</span>
                      <Rating name="read-only" value={5} readOnly />
                    </div>
                  </div>
                </div>
                <div className={styles['text-contents']}>
                  <blockquote>
                    <p>{quote}</p>
                  </blockquote>
                  <h6>{copy}</h6>
                </div>
              </div>
              <div className={styles['subtext']}>{subText}</div>
            </div>
          </div>
          <div className={styles['image-wrapper']}>
            <LazyLoadImage
              className={styles['image']}
              threshold={100}
              src={image?.src}
              alt={image?.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
