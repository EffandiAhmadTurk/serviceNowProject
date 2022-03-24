import { useState, useEffect, useLayoutEffect } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import useWindowWidth from 'utils/useWindowWidth';
import { Home } from '@styled-icons/boxicons-solid';
import styles from './Map.module.scss';
import { TABLET_BREAKPOINT } from 'utils/constants';

const mapSize = {
  width: '100%',
  height: '50vh',
};

const navControlStyle = {
  right: 10,
  top: 10,
};

const Map = ({ lat, lng }) => {
  const windowWidth = useWindowWidth();
  const [viewport, setViewport] = useState({
    latitude: 36.1627,
    longitude: -86.7816,
    zoom: 14,
  });

  const handleOnViewportChange = viewport => {
    setViewport(viewport);
  };

  useLayoutEffect(() => {
    const newViewport = { ...viewport, ...mapSize };
    setViewport(newViewport);
  }, [windowWidth]);

  useEffect(() => {
    if (lat && lng) {
      setViewport({ ...viewport, latitude: lat, longitude: lng });
    }
  }, [lat, lng]);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      onViewportChange={viewport => handleOnViewportChange(viewport)}
    >
      {windowWidth > TABLET_BREAKPOINT && (
        <NavigationControl style={navControlStyle} />
      )}
      <Marker key={Math.random() * lat} latitude={lat} longitude={lng}>
        <Home className={styles['home-icon']} size={34} />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
