import styles from './ListingDetails.module.scss';

const DetailSection = props => {
  const { title, children, style } = props;
  return (
    <div className={styles['section']}>
      <h3 className={styles['section-title']}>{title}</h3>
      <div className={styles['section-content']} style={style}>
        {children}
      </div>
    </div>
  );
};

export default DetailSection;
