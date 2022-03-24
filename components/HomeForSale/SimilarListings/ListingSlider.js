import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Listing from '../../HomesForSale/Listings/Listing';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { LeftArrowAlt, RightArrowAlt } from '@styled-icons/boxicons-regular';
import clsx from 'clsx';
import styles from './SimilarListings.module.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Spinner = dynamic(() => import('@material-ui/core/CircularProgress'));

const Loader = () => (
  <div>
    <Spinner />
  </div>
);

const ListingSlider = ({ isMobile, isTablet, similarListings, isLoading }) => {
  const isNone = similarListings?.length === 0 || !similarListings;
  const isSingle = similarListings?.length === 1;
  const isTwo = similarListings?.length === 2;

  const setSlidesToShow = () => {
    if (isMobile || isSingle) return 1;
    if (isTablet || isTwo) return 2;
    return 3;
  };

  SwiperCore.use([Navigation, Pagination]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
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
                {similarListings.map(listing => (
                  <SwiperSlide>
                    <div className={styles['slide']}>
                      <Listing
                        key={listing.mlsId}
                        listing={listing}
                        isSimilarListing
                      />
                    </div>
                  </SwiperSlide>
                ))}
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
    </>
  );
};

export default ListingSlider;
