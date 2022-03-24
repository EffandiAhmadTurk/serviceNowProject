import SectionTitle from 'components/common/SectionTitle';
import Location from './Location';
import styles from './Locations.module.scss';
import DefaultButton from '../../common/DefaultButton';
import Link from 'next/link';
import { HalfCircleWithCircle } from 'components/common/Patterns';

const items = [
  {
    img: '/images/find-home-1-Nashville.jpg',
    text: 'Nashville',
    link: '/homes-for-sale/city/tn/nashville',
  },
  {
    img: '/images/find-home-2-Murfreesboro.jpg',
    text: 'Murfreesboro',
    link: '/homes-for-sale/city/tn/murfreesboro',
  },
  {
    img: '/images/find-home-3-Franklin.jpg',
    text: 'Franklin',
    link: '/homes-for-sale/city/tn/franklin',
  },
  {
    img: '/images/find-home-4-Lebanon.jpg',
    text: 'Lebanon',
    link: '/homes-for-sale/city/tn/lebanon',
  },
  {
    img: '/images/find-home-5-Spring-Hill.jpg',
    text: 'Spring Hill',
    link: '/homes-for-sale/city/tn/spring-hill',
  },
  {
    img: '/images/find-home-6-Mount-Juliet.jpg',
    text: 'Mount Juliet',
    link: '/homes-for-sale/city/tn/mount-juliet',
  },
  {
    img: '/images/find-home-7-Hendersonville.jpg',
    text: 'Hendersonville',
    link: '/homes-for-sale/city/tn/hendersonville',
  },
  {
    img: '/images/find-home-8-Gallatin.jpg',
    text: 'Gallatin',
    link: '/homes-for-sale/city/tn/gallatin',
  },
];

const Locations = ({ eyebrow = null }) => {
  return (
    <section className={styles['container']}>
      <div className={styles['pattern']}>
        <HalfCircleWithCircle
          primaryColor="blue"
          secondaryColor="yellow"
          rotateDirection="right"
        />
      </div>

      <SectionTitle eyebrow={eyebrow}>
        Let’s find your home <nobr>sweet home.</nobr>
      </SectionTitle>
      <div className={styles['cards-wrapper']}>
        <div className={styles['cards-container']}>
          {items && items.map(item => <Location key={item.img} {...item} />)}
        </div>
        <div className={styles['action']}>
          <DefaultButton
            link="/feed"
            label="Search for Homes"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
