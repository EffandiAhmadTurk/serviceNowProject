import InfiniteScroll from 'react-infinite-scroll-component';
import Listing from './Listing';
import styles from './Listings.module.scss';
import LoadingGrid from './LoadingGrid';
import clsx from 'clsx';
import Fin from './Fin';

const Listings = ({
  listings,
  isMapShown,
  handleListItemHover,
  handleGetMoreListings,
  areListingsLoading,
  total,
  isLocationPage,
}) => {
  const isFin = total <= listings?.length;

  return (
    <div
      className={clsx(
        styles['container'],
        isMapShown && styles['map-container'],
        isLocationPage && styles['location-styles']
      )}
    >
      {listings && (
        <InfiniteScroll
          dataLength={listings?.length || 0}
          hasMore
          className={clsx(styles['listings'], isMapShown && styles['map-grid'])}
          next={() => handleGetMoreListings(listings?.length)}
        >
          {(listings => {
            // const listingsWithAd = addAdTilePlaceholder(listings);

            return listings.map(listing => {
              return (
                <Listing
                  isMapShown={isMapShown}
                  key={listing.mlsId}
                  listing={listing}
                  handleListItemHover={handleListItemHover}
                />
              );
            });
          })(listings)}
        </InfiniteScroll>
      )}
      {areListingsLoading && <LoadingGrid isMapShown={isMapShown} />}

      {isFin && <Fin />}
    </div>
  );
};

export default Listings;
