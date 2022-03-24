import { useState, useEffect } from 'react';
import Section from '../common/Section';
import styles from './Pictures.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Camera } from '@styled-icons/boxicons-solid';
import clsx from 'clsx';

const getImageUrls = images => {
  if (!images.length) return ['/images/default-placeholder.png'];
  return images.map(({ formats: { medium, small } }) => {
    return medium?.url || small?.url || '/images/default-placeholder.png';
  });
};

const Pictures = ({ locationName, locationImages = [] }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = getImageUrls(locationImages);
    setImages(images);
  }, []);

  // Do not diplay component if there are no images
  if (!locationImages.length) {
    return null;
  }

  const isSingle = images.length === 1;
  const firstTwo = images.slice(0, 2);
  const threeBottoms = images.slice(2, 5);

  return (
    <Section
      heading={`Pictures of ${locationName}`}
      icon={<Camera size={32} />}
    >
      <div className={styles['container']}>
        <div
          className={clsx(styles['top-row'], isSingle && styles['full-width'])}
        >
          {firstTwo.map(image => (
            <LazyLoadImage
              key={image}
              threshold={100}
              className={styles['top-row-img']}
              src={image}
            />
          ))}
        </div>

        <div className={styles['bottom-row']}>
          {threeBottoms.map(image => (
            <LazyLoadImage
              key={image}
              threshold={100}
              className={styles['bottom-row-img']}
              src={image}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Pictures;
