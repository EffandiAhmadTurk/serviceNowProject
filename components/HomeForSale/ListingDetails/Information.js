import { isNullOrUndefined } from '../../../utils';
import styles from './ListingDetails.module.scss';

export const ListItem = ({ title = null, value = null, displayValue = '' }) => {
  if (isNullOrUndefined(value)) {
    return null;
  }
  return (
    <li className={styles['information-list-item']}>
      {title}: <span>{displayValue}</span>
    </li>
  );
};

export const Information = ({ title, children }) => {
  return (
    <div className={styles['information']}>
      <h4 className={styles['information-title']}>{title}</h4>
      <ul className={styles['information-list']}>{children}</ul>
    </div>
  );
};
