import styles from './ModalTitle.module.scss';
import clsx from 'clsx';

const ModalTitle = ({ children, leftAlign, size }) => {
  return (
    <div
      className={clsx(styles['container'], leftAlign && styles['left-align'])}
    >
      <h2 className={styles[size]}>{children}</h2>
    </div>
  );
};

export default ModalTitle;
