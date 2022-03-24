import { useState } from 'react';
import { Rating } from '@material-ui/lab';
import styles from './Reviews.module.scss';
import clsx from 'clsx';

const Review = ({ quote, body, user, starCount }) => {
  const [isFullText, setIsFullText] = useState(false);
  const readMoreHandler = () => setIsFullText(!isFullText);

  return (
    <div className={styles['review']}>
      <div className={styles['header']}>
        <h3 className={styles['title']}> {quote && `“${quote}”`}</h3>
        <Rating
          precision={0.5}
          className={styles['rating']}
          readOnly
          value={starCount}
        />
      </div>
      <p className={clsx(styles['text'], isFullText && styles['full-height'])}>
        {body}{' '}
      </p>
      <span className={styles['name']}>- {user.username}</span>
    </div>
  );
};
export default Review;
