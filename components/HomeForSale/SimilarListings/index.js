import { useState, useEffect } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import styles from './SimilarListings.module.scss';
import Slider from 'components/common/Slider';
import { SwiperSlide } from 'swiper/react';
import Listing from 'components/HomesForSale/Listings/Listing';
import axios from 'axios';

const Placeholder = () => {
  return <span style={{ minHeight: 320, backgroundColor: 'lightgrey' }}></span>;
};

const SimilarListings = ({ address, mlsId, geometry, isMobile, isTablet }) => {
  const { street } = address;
  const [similarListings, setSimilarListings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getSimilarListings = async (geometry, mlsId) => {
    setIsLoading(true);
    try {
      const { data: similarListings } = await axios.get(
        `/api/listings/similar-listings`,
        {
          params: {
            geometry,
            mlsId,
          },
        }
      );
      setSimilarListings(similarListings);
    } catch (error) {
      setSimilarListings([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSimilarListings(geometry, mlsId);
  }, [mlsId]);

  return (
    <section className={styles['container']}>
      <h2>For sale near {street}</h2>
      <LazyLoadComponent threshold={400} placeholder={<Placeholder />}>
        <Slider
          isMobile={isMobile}
          isTablet={isTablet}
          isLoading={isLoading}
          itemsLength={similarListings?.length}
        >
          {similarListings?.map(listing => (
            <SwiperSlide key={listing.mlsId}>
              <div className={styles['slide']}>
                <Listing
                  key={listing.mlsId}
                  listing={listing}
                  isSimilarListing
                />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </LazyLoadComponent>
    </section>
  );
};

export default SimilarListings;
