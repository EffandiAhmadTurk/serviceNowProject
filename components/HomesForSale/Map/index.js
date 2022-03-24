import { useState, useRef, useMemo, useEffect, useLayoutEffect } from 'react';
import ListingMarker from './ListingMarker';
import ListingPopup from './ListingPopup';
import styles from './Map.module.scss';
import axios from 'axios';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import clsx from 'clsx';

const getLocationCenterPoints = async locations => {
  const locationSlugs = locations.map(location => location.slug);
  try {
    const { data: locationCenterPoints } = await axios.get(
      `/api/locations/center`,
      {
        params: {
          locationSlugs,
        },
      }
    );
    return locationCenterPoints;
  } catch (error) {
    throw error.message;
  }
};

const Map = ({
  locations,
  hoveredListing,
  isMapShown,
  windowWidth,
  listings,
  isLocationPage,
}) => {
  const mapEl = useRef(null);
  const [viewport, setViewport] = useState({
    latitude: 36.139691,
    longitude: -86.803268,
    zoom: 11,
    height: 'calc(100vh - 170px)',
  });

  const mapSize = {
    width: '100%',
    height: 'calc(100vh - 170px)',
  };

  const [selectedListing, setSelectedListing] = useState(null);

  const handleOnViewportChange = viewport => {
    setViewport(viewport);
    setSelectedListing(null);
  };

  // Dynamiclly resize the map as the window width changes
  useLayoutEffect(() => {
    const newViewport = { ...viewport, ...mapSize };
    setViewport(newViewport);
  }, [windowWidth]);

  useEffect(() => {
    setSelectedListing(hoveredListing);
  }, [hoveredListing]);

  useEffect(() => {
    (async () => {
      if (locations) {
        try {
          const { lat, lng } = await getLocationCenterPoints(locations);
          setViewport({
            ...viewport,
            ...mapSize,
            latitude: lat,
            longitude: lng,
          });
        } catch (error) {
          console.log(error);
          throw error.message;
        }
      }
    })();
  }, [locations]);

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <div
      className={clsx(
        styles['container'],
        isMapShown && styles['full-map'],
        isLocationPage && styles['location-styles']
      )}
    >
      <div className={styles['map-sticky-container']}>
        {useMemo(
          () => (
            <ReactMapGL
              {...viewport}
              mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
              mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
              onViewportChange={viewport => handleOnViewportChange(viewport)}
              onClick={() => setSelectedListing(null)}
              ref={mapEl}
              scrollZoom={!isLocationPage}
            >
              {isLocationPage && <NavigationControl style={navControlStyle} />}

              {listings?.map(listing => (
                <ListingMarker
                  key={listing.mlsId}
                  listing={listing}
                  setSelectedListing={setSelectedListing}
                  selectedListing={selectedListing}
                />
              ))}
              {selectedListing ? (
                <ListingPopup
                  key={selectedListing.mlsId}
                  listing={selectedListing}
                />
              ) : null}
            </ReactMapGL>
          ),
          [listings, viewport, selectedListing, isMapShown]
        )}
      </div>
    </div>
  );
};

export default Map;
