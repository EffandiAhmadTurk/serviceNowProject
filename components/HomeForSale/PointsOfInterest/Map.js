import { useState, useEffect, useLayoutEffect } from 'react';
import dynamic from 'next/dynamic';
import { Fab, Tooltip, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useWindowWidth from '../../../utils/useWindowWidth';
import { setPOIIcon } from './utils';
import styles from './PointsOfInterest.module.scss';

const ReactMapGL = dynamic(() => import('react-map-gl'));
const Marker = dynamic(() => import('react-map-gl').then(mod => mod.Marker));

const mapSize = {
  width: '100%',
  height: '300px',
};

const Map = ({ lat, lng, pointsOfInterest, street }) => {
  const windowWidth = useWindowWidth();
  const [viewport, setViewport] = useState({
    latitude: 36.1627,
    longitude: -86.7816,
    zoom: 14,
  });

  const { fab, fabPoi, fabHome, mapIcon } = useStyles();

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

  const mapItems = [...pointsOfInterest, { lat, lng, category: 'Listing' }];

  return (
    <div className={styles['map']}>
      <ReactMapGL
        {...viewport}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={viewport => handleOnViewportChange(viewport)}
        scrollZoom={false}
      >
        <>
          {mapItems.map(({ lat, lng, category, name }) => (
            <Marker key={Math.random() * lat} latitude={lat} longitude={lng}>
              <Tooltip
                id="home-for-sale__map-tooltip"
                title={category === 'Listing' ? street : name}
                arrow
                TransitionComponent={Collapse}
                placement="top"
              >
                <Fab
                  disableRipple
                  className={`${fab} ${
                    category === 'Listing' ? fabHome : fabPoi
                  }`}
                  size="small"
                >
                  {setPOIIcon(category)}
                </Fab>
              </Tooltip>
            </Marker>
          ))}
        </>
      </ReactMapGL>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  fab: {
    boxShadow: 'none',
  },
  fabPoi: {
    backgroundColor: theme.palette.blue_100,
    '&:hover': {
      backgroundColor: theme.palette.blue_100,
    },
  },
  fabHome: {
    backgroundColor: theme.palette.black_100,
    '&:hover': {
      backgroundColor: theme.palette.black_100,
    },
  },
}));

export default Map;
