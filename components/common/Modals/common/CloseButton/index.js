import { X } from '@styled-icons/boxicons-regular';
import styles from './CloseButton.module.scss';
import clsx from 'clsx';

const CloseButton = ({ onClick, white, style }) => {
  return (
    <button className={styles['button']} onClick={onClick} style={style}>
      <X className={clsx(white && styles['white'])} />
    </button>
  );
};

export default CloseButton;
