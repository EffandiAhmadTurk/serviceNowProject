import { useContext } from 'react';
import styles from './Testimonial.module.scss';
import { Rating } from '@material-ui/lab';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
import { ModalContext } from 'contexts/ModalContext';
import currencyFormater from 'utils/currencyFormater';

const getReviewSourceLogo = source => {
  switch (source?.toLowerCase()) {
    case 'zillow':
      return '/images/Zillow.svg';
    case 'trustpilot':
      return '/images/Trustpilot.svg';
    case 'google':
      return '/images/Google.svg';
    default:
      return '/images/Google.svg';
  }
};

const Testimonial = ({
  author,
  address,
  body,
  savings,
  source,
  img = {},
  isGridMode,
  hasBorder,
  daysOnMarket,
}) => {
  const { setReviewModalState } = useContext(ModalContext);

  return (
    <div
      className={clsx(
        styles['container'],
        isGridMode && styles['grid'],
        hasBorder && styles['border']
      )}
      onClick={() => setReviewModalState({ isOpen: true, review: body })}
    >
      <div className={styles['image-wrapper']}>
        <img src={img.src} alt={img.alt} />
      </div>
      <div className={styles['content']}>
        <div>
          <div className={styles['rating-wrapper']}>
            <div className={styles['rating']}>
              <img
                src={getReviewSourceLogo(source)}
                alt="review-platform"
                className={styles['reviews-img']}
              />
              <Rating className={styles['rating-stars']} readOnly value={5} />
            </div>
            <div className={styles['saved-wrapper']}>
              <div className={styles['saved']}>
                <span>Saved ${currencyFormater.format(savings)}</span>
              </div>
            </div>
          </div>
          <ReactMarkdown className={styles['text']}>{body}</ReactMarkdown>
          <p className={styles['see-more']}>See More</p>
        </div>
        <div className={styles['about-author']}>
          <div>
            {author}, {address}
          </div>
          <div className={styles['footer']}>
            {daysOnMarket ? `${daysOnMarket} Days On Market` : ''}{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
