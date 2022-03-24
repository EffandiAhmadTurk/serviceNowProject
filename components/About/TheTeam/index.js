import SectionTitle from 'components/common/SectionTitle';
import styles from './TheTeam.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TheTeam = () => {
  return (
    <section className={styles['container']}>
      <SectionTitle
        title="Meet the Team"
        eyebrow="OUR LEADERSHIP"
        isCenterAligned
      />
      <div className={styles['wrapper']}>
        <div className={styles['items-wrapper']}>
          <div className={styles['leadership-item']}>
            <LazyLoadImage src={'/images/tyler_about.png'} alt={'Tyler'} />
            <h3>Tyler Forte</h3>
            <span>Co-founder + CEO</span>
          </div>
          <div className={styles['leadership-item']}>
            <LazyLoadImage src={'/images/niv_about.png'} alt={'Niv'} />
            <h3>Niv Ginat</h3>
            <span>Co-founder + Head of Product</span>
          </div>
          <div className={styles['leadership-item']}>
            <LazyLoadImage src={'/images/phil_about.png'} alt={'Phil'} />
            <h3>Philip Albrecht</h3>
            <span>Co-founder + CTO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheTeam;
