import { useState, useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Listings from './Listings';
import NilListings from './NilListings';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './HomesForSale.module.scss';
import FiltersBar from './FiltersBar';
import useWindowWidth from 'utils/useWindowWidth';
import Map from './Map';
import { AuthContext } from 'contexts/AuthContext';
import axios from 'axios';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import convertListItemToDataLayer from 'utils/convertListItemToDataLayer';
import clsx from 'clsx';
import {
  LISTINGS_PAGE_SIZE,
  TEASER_LISTINGS,
  TABLET_BREAKPOINT,
} from 'utils/constants';

const FilterModal = dynamic(() => import('./FilterModal'), {
  ssr: false,
});

export const getQueryFromFilters = filters => {
  if (filters) {
    const query = { ...filters };
    query.locations = filters?.locations.map(({ slug }) => slug);
    return query;
  } else {
    return {};
  }
};

const ForSale = ({ location, ssrListingsData, isLocationPage }) => {
  const [isMapShown, setIsMapShown] = useState(true);
  const [listingsData, setListingsData] = useState({
    listings: null,
    total: null,
  });
  const [areListingsLoading, setAreListingsLoading] = useState(false);
  const windowWidth = useWindowWidth();
  const { setFilterModalState } = useContext(ModalContext);
  const [hoveredListing, setHoveredListing] = useState(null);
  const { user } = useContext(AuthContext);

  const handleListItemHover = listing => {
    let selectedListing = null;
    if (listing) {
      selectedListing = { ...listing, street: listing.address.street };
    }
    setHoveredListing(selectedListing);
  };

  const handleGetListings = async (filters, isFilterModal) => {
    // Resetting listings to null for loading grid to show
    if (isFilterModal) {
      setListingsData({ listings: null, total: null });
    }
    setAreListingsLoading(true);
    const filterQuery = getQueryFromFilters(filters);
    try {
      const { data } = await axios.get(`/api/listings`, {
        params: {
          ...filterQuery,
        },
      });
      setAreListingsLoading(false);
      setListingsData(data);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };

  useEffect(() => {
    if (location) {
      setFilterModalState({ isOpen: false });
    }

    if (windowWidth && windowWidth <= TABLET_BREAKPOINT) {
      setIsMapShown(false);
    }
  }, [location, windowWidth]);

  useEffect(() => {
    (async () => {
      if (ssrListingsData?.listings) {
        setListingsData(ssrListingsData);
      } else {
        if (user?.filters) {
          handleGetListings({
            ...user?.filters,
            // Set initial limit
            limit: LISTINGS_PAGE_SIZE,
          });
          // Fire google tag if user has a query
          // const dataLayerList = listings
          //   .filter(listing => listing.mlsId)
          //   .map((listing, index) =>
          //     convertListItemToDataLayer({
          //       el: listing,
          //       index,
          //       search: searchString,
          //     })
          //   );
          // submitGoalToGoogleTagManager({
          //   event: 'viewItemList',
          //   ecommerce: {
          //     items: dataLayerList,
          //   },
          // });
        } else {
          setListingsData({ listings: TEASER_LISTINGS, total: 52 });
        }
      }
    })();
  }, [user]);

  return (
    <div
      className={styles['container']}
      onMouseLeave={() => handleListItemHover(null)}
      onMouseEnter={() => handleListItemHover(null)}
    >
      {!isLocationPage && (
        <FiltersBar
          setIsMapShown={setIsMapShown}
          isMapShown={isMapShown}
          location={location}
        />
      )}

      <div className={clsx(styles['search-body'], !isLocationPage)}>
        {ssrListingsData?.total === 0 ? (
          <NilListings />
        ) : (
          <Listings
            isLocationPage={isLocationPage}
            areListingsLoading={areListingsLoading}
            listings={listingsData.listings}
            total={listingsData.total}
            isMapShown={isMapShown}
            locationName={location?.name}
            locationSlug={location?.slug}
            handleListItemHover={handleListItemHover}
            handleGetMoreListings={currentLimit => {
              // Fetch more listings if user exits and we're not server side rendering listings
              if (user && !ssrListingsData?.listings) {
                handleGetListings({
                  ...user.filters,
                  limit: currentLimit + LISTINGS_PAGE_SIZE,
                });
              }
            }}
          />
        )}
        {windowWidth > TABLET_BREAKPOINT && (
          <Map
            listings={listingsData.listings}
            windowWidth={windowWidth}
            isMapShown={isMapShown}
            locations={
              location
                ? [location]
                : user?.filters?.locations
                ? user?.filters?.locations
                : null
            }
            hoveredListing={isMapShown && hoveredListing}
            isLocationPage={isLocationPage}
          />
        )}
      </div>

      <FilterModal handleGetListings={handleGetListings} />
    </div>
  );
};

export default ForSale;
