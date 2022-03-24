import styles from './TeamInnerContent.module.scss';
import { CheckCircle, MinusCircle } from '@styled-icons/boxicons-solid';
import clsx from 'clsx';

const TeamInnerContent = () => {
  return (
    <div className={styles['container']}>
      <ul className={styles['row']}>
        <li>
          <CheckCircle
            className={clsx(styles['check'], styles['green'])}
            size={22}
          />{' '}
          Always local
        </li>
        <li>
          <CheckCircle
            className={clsx(styles['check'], styles['green'])}
            size={22}
          />{' '}
          Always experienced
        </li>
      </ul>
      <ul className={styles['row']}>
        <li>
          <CheckCircle
            className={clsx(styles['check'], styles['green'])}
            size={22}
          />{' '}
          Always available
        </li>
        <li>
          <CheckCircle
            className={clsx(styles['check'], styles['green'])}
            size={22}
          />{' '}
          Never pushy
        </li>
      </ul>
    </div>
  );
};

export default TeamInnerContent;
