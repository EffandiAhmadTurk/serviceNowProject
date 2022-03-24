import dynamic from 'next/dynamic';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { setPOIIcon } from './utils';
import styles from './PointsOfInterest.module.scss';
import ListItem from '../common/ListItem';
import Section from '../common/Section';
import List from '../common/List';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <span style={{ minHeight: 300, backgroundColor: 'lightgrey' }}></span>
  ),
});

const Placeholder = () => {
  return <span style={{ minHeight: 300, backgroundColor: 'lightgrey' }}></span>;
};

const PointsOfInterest = ({ lat, lng, pointsOfInterest, street, mlsId }) => {
  return (
    <Section
      heading={`Things to do near ${street}`}
      id={`${mlsId}-points-of-interest`}
    >
      <div className={styles['container']}>
        <LazyLoadComponent threshold={200} placeholder={<Placeholder />}>
          <Map
            lat={lat}
            lng={lng}
            pointsOfInterest={pointsOfInterest}
            street={street}
          />
        </LazyLoadComponent>
        <div className={styles['wrapper']}>
          {pointsOfInterest.length > 0 ? (
            <List>
              {pointsOfInterest?.map(({ name, distance, category }) => (
                <ListItem
                  key={name}
                  label={name}
                  value={distance ? `${distance} miles` : null}
                  icon={setPOIIcon(category)}
                />
              ))}
            </List>
          ) : (
            <p className={styles['not-found']}>
              We couldn't find any things to do near this address.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default PointsOfInterest;
