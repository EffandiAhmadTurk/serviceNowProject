import Link from 'next/link';
import clsx from 'clsx';
import styles from './PostItem.module.scss';
import { RightArrowCircle } from '@styled-icons/boxicons-solid';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PostItem = ({ post, path }) => {
  const { image, slug, title, description } = post;

  const imageSrc =
    image.formats?.small.url ||
    image.formats?.thumbnail.url ||
    image.url ||
    null;
  return (
    <Link href={`${path}/${slug}`}>
      <a>
        <li className={clsx(styles['container'])}>
          <LazyLoadImage src={imageSrc} alt={image?.alternativeText} />
          <div className={styles['content-wrapper']}>
            <h4>{title}</h4>
            <p className={styles['description']}>{description}</p>
            <RightArrowCircle className={styles['icon']} size={32} />
          </div>
        </li>
      </a>
    </Link>
  );
};

export default PostItem;
