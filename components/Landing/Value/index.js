import styles from './Value.module.scss';
import SectionTitle from 'components/common/SectionTitle';
import { CheckCircle } from '@styled-icons/boxicons-solid';

const Value = ({ values, eyebrow, title }) => {
  return (
    <section className={styles['container']}>
      <SectionTitle title={title} eyebrow={eyebrow} isCenterAligned />
      <div className={styles['wrapper']}>
        {values.map(value => (
          <div className={styles['item']} key={value}>
            <CheckCircle className={styles['check']} size={25} />
            {value}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;
