import { CircularProgress } from '@material-ui/core';
import styles from './Loader.module.scss';

const Loader = ({ size = 40 }) => {
  return (
    <div className={styles['loader-wrapper']}>
      <CircularProgress size={size} />
    </div>
  );
};

export default Loader;
