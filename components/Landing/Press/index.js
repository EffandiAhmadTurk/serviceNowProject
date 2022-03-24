import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Press.module.scss';
import { RectangleWithHalfCircle } from 'components/common/Patterns';
import SectionTitle from 'components/common/SectionTitle';

const brands = [
  {
    src: '/images/tennessean-logo-grey.png',
    alt: 'tennessean',
  },
  {
    src: '/images/abc-logo-grey.png',
    alt: 'ABC',
  },
  {
    src: '/images/inman-logo-grey.png',
    alt: 'inman',
  },
  {
    src: '/images/apartment-therapy-logo-grey.png',
    alt: 'apartment-therapy',
  },
  {
    src: '/images/entrepreneur-logo-grey.png',
    alt: 'entrepreneur',
  },
  {
    src: '/images/channel-5-logo-grey.png',
    alt: 'channel-5',
  },
];

const Press = () => {
  return (
    <section className={styles['container']}>
      <div className={styles['wrapper']}>
        <div className={styles['pattern']}>
          <RectangleWithHalfCircle primaryColor="red" secondaryColor="blue" />
        </div>
        <SectionTitle
          eyebrow="IN THE PRESS"
          title="People are taking notice."
          isCenterAligned
        />

        <div className={styles['brands']}>
          {brands.map(brand => (
            <div className={styles['image']} key={brand?.src}>
              <LazyLoadImage
                threshold={100}
                src={brand?.src}
                alt={brand?.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
