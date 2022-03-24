import styles from './Park.module.scss';
import { Tree } from '@styled-icons/boxicons-solid';

const Park = ({ name, adress, description }) => (
  <div className={styles['park']}>
    <div className={styles['col']}>
      <div className={styles['icon']}>
        <Tree size={22} />
      </div>

      <div className={styles['description']}>
        <h4 className={styles['name']}>{name}</h4>
        <p className={styles['adress']}>{adress}</p>
      </div>
    </div>
    <p className={styles['text']}> {description}</p>
  </div>
);

export default Park;
