import { Popup } from 'react-map-gl';
import Link from 'next/link';
import NumberFormat from 'react-number-format';
import getSatelliteImage from '../../../../utils/getSatelliteImage';
import { SquareFootage } from '../../../../utils/SquareFootage';
import styles from './ListingPopup.module.scss';

const ListingPopup = ({ listing }) => {
  const {
    lat,
    lng,
    image,
    listPrice,
    beds,
    baths,
    livingAreaSF,
    mlsId,
    address,
  } = listing;

  return (
    <Link
      href="/home-for-sale/[address]/[mlsId]"
      as={`/home-for-sale/${address.slug}/${mlsId}`}
    >
      <a
        id="map-popup"
        target="_blank"
        rel="noreferrer"
        className={styles['container']}
      >
        <Popup
          latitude={lat}
          longitude={lng}
          offsetLeft={24}
          offsetTop={26}
          closeButton={false}
          tipSize={14}
        >
          <img
            className={styles['image']}
            src={
              `${image}?width=200&height=200` ||
              getSatelliteImage(lat, lng, '200x200')
            }
            onError={e => {
              e.target.onerror = null;
              e.target.src = getSatelliteImage(lat, lng, '200x100');
            }}
          />
          <div className={styles['description']}>
            <NumberFormat
              className={styles['price']}
              value={listPrice}
              thousandSeparator
              displayType="text"
              prefix="$"
            />
            <div className={styles['details']}>
              <span>{beds} Bd</span>
              <span>{baths} Ba</span>
              <span>{<SquareFootage value={livingAreaSF} />}</span>
            </div>
          </div>
        </Popup>
      </a>
    </Link>
  );
};

export default ListingPopup;
