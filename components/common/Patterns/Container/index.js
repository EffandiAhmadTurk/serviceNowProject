import styles from './Container.module.scss';
import clsx from 'clsx';

const Container = ({ children, scrollClass }) => {
  return (
    <div className={clsx(styles['container'], scrollClass)}>{children}</div>
  );
};

export default Container;
