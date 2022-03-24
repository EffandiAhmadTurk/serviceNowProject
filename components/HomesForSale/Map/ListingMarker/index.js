import { Marker } from 'react-map-gl';
import priceAbreviation from '../../../../utils/priceAbreviation';
import styles from './ListingMarker.module.scss';

const ListingMarker = ({ listing, setSelectedListing, selectedListing }) => {
  return (
    <Marker
      key={listing.mlsId}
      latitude={listing.lat}
      longitude={listing.lng}
      className={`${
        selectedListing && listing.mlsId === selectedListing.mlsId
          ? styles['high-z-index']
          : styles['low-z-index']
      }`}
    >
      <div
        onClick={() => setSelectedListing(listing)}
        className={`${
          selectedListing && listing.mlsId === selectedListing.mlsId
            ? styles['selected-marker']
            : ''
        } ${styles['marker']}`}
      >
        {priceAbreviation(listing.listPrice)}
      </div>
    </Marker>
  );
};

export default ListingMarker;
