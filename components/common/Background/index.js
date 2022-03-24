import styles from './Background.module.scss';
import clsx from 'clsx';

const Background = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['wrapper']}>
        <div className={clsx(styles['rectangle'], styles['rectangle_1'])} />
        <div className={clsx(styles['rectangle'], styles['rectangle_2'])} />
        <div className={clsx(styles['rectangle'], styles['rectangle_3'])} />
        <div className={clsx(styles['rectangle'], styles['rectangle_4'])} />
      </div>
    </div>
  );
};

export default Background;
