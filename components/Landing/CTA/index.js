import SectionTitle from '../../common/SectionTitle';
import styles from './CTA.module.scss';
import useDevices from '../../../utils/useDevices';

const CTA = ({ style, eyebrow, title, action }) => {
  const { isTablet } = useDevices();
  return (
    <section className={styles['container']} style={style}>
      <div className={styles['wrapper']}>
        <SectionTitle
          isCenterAligned={isTablet}
          title={title}
          eyebrow={eyebrow}
          eyebrowClassName={styles['eyebrow-black']}
        />
        <div className={styles['actions']}>{action}</div>
      </div>
    </section>
  );
};

export default CTA;
