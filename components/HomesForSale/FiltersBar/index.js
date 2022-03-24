import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { ModalContext } from '../../../contexts/ModalContext';
import FilterButton from './FilterButton';

import styles from './FilterBar.module.scss';
import {
  PRICE_OPTIONS,
  TYPE_OPTIONS,
  BATH_OPTIONS,
  BED_OPTIONS,
} from 'utils/constants';
import Switch from 'components/common/Switch';

const Chip = ({ label }) => {
  return <span className={styles['chip']}>{label}</span>;
};

const ShowMapToggle = ({ onChange, isMapShown }) => (
  <span className={styles['show-map-toggle']}>
    <span className={styles['text']}>Show Map</span>
    <Switch checked={isMapShown} onChange={onChange} />
  </span>
);

const FiltersBar = ({ location: ssrLocation, isMapShown, setIsMapShown }) => {
  const { user } = useContext(AuthContext);
  const { setFilterModalState } = useContext(ModalContext);

  const { filters } = user || {};
  const { priceFrom, priceTo, beds, baths, type, locations: userLocations } =
    filters || {};

  const bedsText = BED_OPTIONS.find(opt => opt[0] == beds)?.[1];
  const bathsText = BATH_OPTIONS.find(opt => opt[0] == baths)?.[1];
  const priceFromText = PRICE_OPTIONS.find(opt => opt[0] === priceFrom)?.[1];
  const priceToText = PRICE_OPTIONS.find(opt => opt[0] === priceTo)?.[1];
  const typeText = TYPE_OPTIONS.find(opt => opt[0] === type)?.[1];
  const locations =
    (ssrLocation && [{ slug: ssrLocation.slug, name: ssrLocation.name }]) ||
    userLocations;

  return (
    <div className={styles['sticky-box']}>
      <div className={styles['container']}>
        <div className={styles['wrapper']}>
          <div className={styles['filters']}>
            {locations?.length > 0 &&
              locations.map(location => (
                <Chip key={location.slug} label={location?.name} />
              ))}

            {!ssrLocation && (
              <>
                {beds && <Chip label={`${bedsText} Beds`} />}
                {baths && <Chip label={`${bathsText} Baths`} />}

                {priceFrom && <Chip label={`From ${priceFromText}`} />}
                {priceTo && <Chip label={`To ${priceToText}`} />}

                {type && <Chip label={typeText} />}
              </>
            )}
          </div>

          <FilterButton onClick={() => setFilterModalState({ isOpen: true })} />
        </div>

        <ShowMapToggle
          onChange={e => setIsMapShown(e.target.checked)}
          isMapShown={isMapShown}
        />
      </div>
    </div>
  );
};

export default FiltersBar;
