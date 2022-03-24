import { useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CurrencyFormat from 'utils/CurrencyFormat';
import { SquareFootage } from 'utils/SquareFootage';
import getSatelliteImage from 'utils/getSatelliteImage';
import calcBuyerSavings from 'utils/calcBuyerSavings';
import convertListItemToDataLayer from 'utils/convertListItemToDataLayer';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import { AuthContext } from 'contexts/AuthContext';
import { ModalContext } from 'contexts/ModalContext';
import SearchContext from 'contexts/SearchContext';
import styles from './Listing.module.scss';
import { Bed, Bath, ShapeSquare } from '@styled-icons/boxicons-regular';

const DescriptionToogle = ({
  isDescriptionOpen,
  setDescriptionOpen,
  isHidden,
}) => (
  <ExpandLessIcon
    fontSize="large"
    className={`${styles['description-toggle']} ${
      isDescriptionOpen ? styles['open'] : ''
    } ${isHidden ? styles['hide-toggle'] : ''}`}
    onClick={() => setDescriptionOpen(!isDescriptionOpen)}
  />
);

const Listing = ({ handleListItemHover, listing, isSimilarListing }) => {
  const {
    image,
    address: { street, city, state, zipCode, slug },
    listPrice,
    beds,
    baths,
    livingAreaSF,
    lat,
    lng,
    mlsId,
    description,
    status,
  } = listing;
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const { setIsLoginModalOpen } = useContext(ModalContext);
  const { searchString } = useContext(SearchContext);
  const savings = calcBuyerSavings(listPrice);

  const handleClick = listing => {
    if (!isAuthenticated && isSimilarListing) {
      setIsLoginModalOpen(true);
    } else {
      const convertedListing = convertListItemToDataLayer({
        el: listing,
        index: 1,
        search: searchString,
      });

      // Clear the previous ecommerce object.
      submitGoalToGoogleTagManager({
        event: 'clearEcommerce',
        ecommerce: null,
      });

      submitGoalToGoogleTagManager({
        event: 'selectItem',
        ecommerce: {
          items: [convertedListing],
        },
      });

      window.open(`/home-for-sale/${slug}/${mlsId}`, '_blank');
    }
  };

  return (
    <div
      className={styles['container']}
      onMouseEnter={
        handleListItemHover ? () => handleListItemHover(listing) : null
      }
    >
      <DescriptionToogle
        setDescriptionOpen={setDescriptionOpen}
        isDescriptionOpen={isDescriptionOpen}
        isHidden={!description}
      />

      <div className={styles['wrapper']} onClick={() => handleClick(listing)}>
        {status === 'Coming Soon' && (
          <div className={styles['status-chip-coming-soon']}>{status}</div>
        )}
        <LazyLoadImage
          className={`${styles['image']} ${
            isDescriptionOpen ? styles['low-image-opacity'] : ''
          }`}
          threshold={100}
          height={200}
          src={
            image
              ? `${image}?width=300&height=200`
              : getSatelliteImage(lat, lng, '300x200')
          }
          alt={`Image of the home at ${street}`}
          onError={e => {
            e.target.onerror = null;
            e.target.src = getSatelliteImage(lat, lng, '300x200');
          }}
        />

        <div className={styles['details']}>
          {description && (
            <div
              className={`${styles['description']} ${
                isDescriptionOpen ? styles['open'] : styles['closed']
              }`}
            >
              <p className={styles['scrollable-text']}>{description}</p>
            </div>
          )}

          <div className={styles['details-primary']}>
            <div className={styles['address']}>
              <p className={styles['street']}>{`${street}`}</p>
              <p className={styles['city']}>{`${city}, ${state} ${zipCode}`}</p>
            </div>
            <div>
              <div className={styles['financials']}>
                <CurrencyFormat className={styles['price']} value={listPrice} />
                <span className={styles['savings']}>
                  Save <CurrencyFormat value={savings} />
                </span>
              </div>
            </div>
          </div>

          <div className={styles['details-secondary']}>
            <span>
              <Bed />
              <p>{beds} Beds</p>
            </span>
            <span>
              <Bath />
              <p>{baths} Baths</p>
            </span>
            <span>
              <ShapeSquare />
              <p>
                <SquareFootage value={livingAreaSF} />
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
