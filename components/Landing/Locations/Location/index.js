import { RightArrowAlt } from '@styled-icons/boxicons-regular';
import Link from 'next/link';
import styles from './Location.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Location = props => {
  const { img, text, link } = props;
  return (
    <Link key={link} href={link}>
      <a>
        <div className={styles['container']}>
          <LazyLoadImage src={img} alt={text} />
          <div className={styles['card-description']}>
            <p className={styles['card-description__text']}>{text}</p>
            <RightArrowAlt />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Location;
