import Link from 'next/link';
import { TrendingFlat } from '@material-ui/icons';
import styles from './Error.module.scss';
import Background from 'components/common/Background';

const NotFound = ({ error }) => {
  const is404 = error === 404;
  const is410 = error === 410;

  return (
    <div className={styles['container']}>
      <Background />
      <div className={styles['content-wrapper']}>
        <h1>{error}</h1>
        {is404 && <h2>Something's missing...</h2>}
        {is410 && <h2>This page no longer exists...</h2>}
        <Link href="/">
          <a className={styles['link']}>
            <span>Let's go home</span>
            <TrendingFlat />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
