import Link from 'next/link';
import clsx from 'clsx';
import styles from './RelatedPost.module.scss';

const RelatedPost = ({
  path,
  post: { title = '', slug, id, image },
  className = null,
}) => (
  <Link href={`${path}/${slug}`} key={id}>
    <a className={clsx(styles['container'], className)}>
      <img
        alt={`${title} Photo`}
        src={image.formats?.thumbnail?.url || image.url}
      />
      <h4>{title}</h4>
    </a>
  </Link>
);

export default RelatedPost;
