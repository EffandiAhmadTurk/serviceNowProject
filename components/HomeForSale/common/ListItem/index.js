import styles from './ListItem.module.scss';

const ListItem = ({ label, value, icon }) => {
  if (!value) {
    return null;
  }

  return (
    <li className={styles['item']}>
      <span className={styles['label']}>
        {icon} <p>{label}</p>
      </span>
      <span className={styles['value']}>{value}</span>
    </li>
  );
};

export default ListItem;
