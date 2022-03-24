import Link from 'next/link';
import clsx from 'clsx';
import styles from './SimilarLocations.module.scss';
import Slider from 'components/common/Slider';
import { SwiperSlide } from 'swiper/react';

const NearbyLocations = ({
  nearbyLocations,
  locationType,
  isMobile,
  isTablet,
}) => {
  let nearbyType = '';
  switch (locationType) {
    case 'Neighborhood':
      nearbyType = 'Neighborhoods';
      break;
    case 'City':
      nearbyType = 'Cities';
      break;
    case 'Zip Code':
      nearbyType = 'Zip Codes';
      break;
    case 'County':
      nearbyType = 'Counties';
      break;
    default:
      nearbyType = 'Cities';
  }

  return (
    <div className={styles['container']}>
      <h2>Nearby {nearbyType}</h2>

      <Slider
        isMobile={isMobile}
        isTablet={isTablet}
        itemsLength={nearbyLocations.length}
      >
        {nearbyLocations.map(location => (
          <SwiperSlide key={location.path}>
            <Link href={location.path}>
              <a className={styles['slide']}>
                {location.name}{' '}
                <img
                  src="/images/patterns/blue-circle-red-square.svg"
                  alt="pattern"
                  className={clsx(styles['pattern'], styles['pattern-one'])}
                />
                <img
                  src="/images/patterns/yellow-halfcircle-blue-cirlce.svg"
                  alt="pattern"
                  className={clsx(styles['pattern'], styles['pattern-two'])}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};
export default NearbyLocations;
