import styles from './ModalCopy.module.scss';

const ModalCopy = ({ children }) => {
  return <p className={styles['copy']}>{children}</p>;
};

export default ModalCopy;
