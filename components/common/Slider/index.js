import { useRef } from 'react';
import clsx from 'clsx';
import styles from './Slider.module.scss';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { LeftArrowAlt, RightArrowAlt } from '@styled-icons/boxicons-regular';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import dynamic from 'next/dynamic';
const Spinner = dynamic(() => import('@material-ui/core/CircularProgress'));

const Loader = () => (
  <div>
    <Spinner />
  </div>
);

const Slider = ({ isMobile, isTablet, children, itemsLength, isLoading }) => {
  SwiperCore.use([Navigation, Pagination]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isNone = itemsLength === 0 || !itemsLength;
  const isSingle = itemsLength === 1;
  const isTwo = itemsLength === 2;

  const setSlidesToShow = () => {
    if (isMobile || isSingle) return 1;
    if (isTablet || isTwo) return 2;
    return 3;
  };

  return (
    <div className={styles['container']}>
      {isLoading && (
        <div className={styles['loading-container']}>
          <Loader />
        </div>
      )}

      {!isLoading && (
        <>
          {isNone && (
            <p className={styles['nil-text']}>
              There aren't any similar homes for sale in this neighborhood...
            </p>
          )}
          {!isNone && (
            <div className={styles['swiper-container']}>
              <Swiper
                spaceBetween={4}
                slidesPerView={setSlidesToShow()}
                onInit={swiper => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {children}
                <div className={styles['navigation-container']}>
                  <div
                    ref={prevRef}
                    className={clsx(styles['prev'], styles['arrow'])}
                  >
                    <LeftArrowAlt size={32} />
                  </div>
                  <div
                    ref={nextRef}
                    className={clsx(styles['next'], styles['arrow'])}
                  >
                    <RightArrowAlt size={32} />
                  </div>
                </div>
              </Swiper>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Slider;
