import { useState, useEffect, useLayoutEffect } from 'react';
import { Tooltip, Collapse } from '@material-ui/core';
import useWindowWidth from 'utils/useWindowWidth';
import styles from './Map.module.scss';
import clsx from 'clsx';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';

const mapSize = {
  width: '100%',
  height: '300px',
};

const Map = ({ lat, lng, thingsToDo, icon }) => {
  const windowWidth = useWindowWidth();
  const [viewport, setViewport] = useState({
    latitude: 36.1627,
    longitude: -86.7816,
    zoom: 10,
  });

  useEffect(() => {
    if (lat && lng) {
      setViewport({ ...viewport, latitude: lat, longitude: lng });
    }
  }, [lat, lng]);

  useLayoutEffect(() => {
    const newViewport = { ...viewport, ...mapSize };
    setViewport(newViewport);
  }, [windowWidth]);

  const handleOnViewportChange = viewport => {
    setViewport(viewport);
  };

  const navControlStyle = {
    right: 10,
    top: 10,
    zIndex: 0,
  };

  return (
    <div className={styles['map-container']}>
      <ReactMapGL
        {...viewport}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={viewport => handleOnViewportChange(viewport)}
        scrollZoom={false}
      >
        <NavigationControl style={navControlStyle} />
        {thingsToDo.map(({ lat, lng, name, icon }) => {
          return (
            <Marker key={Math.random() * lat} latitude={lat} longitude={lng}>
              <Tooltip
                id="home-for-sale__map-tooltip"
                title={name}
                arrow
                TransitionComponent={Collapse}
                placement="top"
              >
                <div className={clsx(styles['fab'], styles[icon.className])} />
              </Tooltip>
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
};

export default Map;
