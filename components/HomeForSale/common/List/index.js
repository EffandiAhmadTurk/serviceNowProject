import styles from './List.module.scss';
import clsx from 'clsx';

const List = ({ children, fullWidth }) => {
  return (
    <ul className={clsx(styles['list'], fullWidth && styles['full-width'])}>
      {children} <div className={styles['line-cover']} />
    </ul>
  );
};

export default List;
