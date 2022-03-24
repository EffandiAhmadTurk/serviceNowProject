import Link from 'next/link';
import SectionTitle from '../../common/SectionTitle';
import styles from './Categories.module.scss';

import {
  Music,
  Home,
  PurchaseTag,
  DollarCircle,
  Graduation,
  News,
} from '@styled-icons/boxicons-solid';

const Card = ({ icon, title, link }) => (
  <Link href={link}>
    <a className={styles['card']}>
      <div
        className={styles['row']}
        style={{ display: 'flex', alignItems: 'flex-end' }}
      >
        {icon}
      </div>
      <div className={styles['row']}>
        <h3 className={styles['card-title']}>{title}</h3>
      </div>
    </a>
  </Link>
);

const Categories = ({ title }) => {
  return (
    <section className={styles['container']}>
      {title && <SectionTitle>Categories</SectionTitle>}

      <div className={styles['wrapper']}>
        <Card
          title="Tennessee Living"
          link="/blog/tennessee-living"
          icon={<Music className={styles['card-icon']} />}
        />
        <Card
          title="Tips for Buying a Home"
          link="/blog/tips-for-buying-a-home"
          icon={<Home className={styles['card-icon']} />}
        />
        <Card
          title="Tips for Selling a Home"
          link="/blog/tips-for-selling-a-home"
          icon={<PurchaseTag className={styles['card-icon']} />}
        />
        <Card
          title="Financially Savvy"
          link="/blog/financially-savvy"
          icon={<DollarCircle className={styles['card-icon']} />}
        />

        <Card
          title="Real Estate University"
          link="/blog/real-estate-university"
          icon={<Graduation className={styles['card-icon']} />}
        />
        <Card
          title="Market News"
          link="/blog/market-news"
          icon={<News className={styles['card-icon']} />}
        />
      </div>
    </section>
  );
};

export default Categories;
