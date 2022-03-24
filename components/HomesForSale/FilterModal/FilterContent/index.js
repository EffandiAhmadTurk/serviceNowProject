import React, { useContext, useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  TYPE_OPTIONS,
  BED_OPTIONS,
  BATH_OPTIONS,
  MIN_PRICE_OPTIONS,
  MAX_PRICE_OPTIONS,
} from '../utils';
import { FormHelperText } from '@material-ui/core';
import LocationSearch from '../LocationSearch';
import FilterSelect from '../FilterSelect';
import DefaultButton from '../../../common/DefaultButton';
import SectionTitle from '../../../common/SectionTitle';
import styles from '../FilterModal.module.scss';
import SearchContext from 'contexts/SearchContext';
import { AuthContext } from 'contexts/AuthContext';
import { useRouter } from 'next/router';

const FilterContent = ({
  saveFilters,
  handleCloseModal,
  isCloseHidden,
  setRequestError,
  requestError,
}) => {
  const { isAuthenticated, user, token } = useContext(AuthContext);
  const {
    setType,
    setBeds,
    setBaths,
    setLocations,
    setPriceFrom,
    setPriceTo,
    type,
    beds,
    baths,
    locations,
    priceTo,
    priceFrom,
  } = useContext(SearchContext);

  const { push, query } = useRouter();

  const handleSaveFeed = () => {
    if (!isAuthenticated) {
      push('/feed?auth=signup');
      //   setIsAuthShown(true);
    } else {
      const filters = {
        type,
        beds,
        baths,
        locations,
        priceTo,
        priceFrom,
      };
      saveFilters({ filters, user, token });
    }
  };

  // Certain ads are sending users to the feed that require for the filter to adjust based on given params
  useEffect(() => {
    const { priceFrom, priceTo } = query;
    if (priceFrom) {
      setPriceFrom(parseInt(priceFrom));
    }
    if (priceTo) {
      setPriceTo(parseInt(priceTo));
    }
  }, [query]);

  return (
    <>
      <SectionTitle eyebrow="Listing feed">
        Customize your feed to <br />
        find your dream home.
      </SectionTitle>
      <div className={styles['form']}>
        <div className={clsx(styles['row'], styles['line-1'])}>
          <span className={styles['text']}>
            I’m searching for {type ? 'a' : ''}
          </span>
          <span className={styles['flex-block']}>
            <FilterSelect
              minWidth={90}
              value={type}
              setValue={type => setType(type)}
              options={TYPE_OPTIONS}
            />
            <span className={styles['text']}>with</span>
            <FilterSelect
              minWidth={25}
              value={beds}
              setValue={beds => setBeds(beds)}
              options={BED_OPTIONS}
            />
            <span className={styles['text']}>
              bed{beds > 1 || !beds ? 's' : ''} and{' '}
            </span>
            <FilterSelect
              minWidth={25}
              value={baths}
              setValue={baths => setBaths(baths)}
              options={BATH_OPTIONS}
            />
            <span className={styles['text']}>
              bath{baths > 1 || !baths ? 's' : ''}
            </span>{' '}
          </span>
        </div>
        <div className={styles['row']}>
          <span className={styles['text']}>in </span>
          <LocationSearch
            value={locations}
            setValue={locations => setLocations(locations)}
          />
        </div>

        <div className={clsx(styles['row'], styles['last-row'])}>
          <span className={styles['text']}>from</span>

          <FilterSelect
            minWidth={65}
            value={priceFrom}
            setValue={priceFrom => setPriceFrom(priceFrom)}
            options={MIN_PRICE_OPTIONS}
          />

          <span className={styles['text']}> to</span>
          <FilterSelect
            minWidth={65}
            value={priceTo}
            setValue={priceTo => setPriceTo(priceTo)}
            options={MAX_PRICE_OPTIONS}
          />
          <span className={styles['text']}>.</span>
        </div>

        <FormHelperText className={styles['error']} error>
          {requestError}
        </FormHelperText>
        <div className={styles['button-container']}>
          <DefaultButton
            onClick={handleSaveFeed}
            label="Save Feed"
            variant="primary"
          />
          {!isCloseHidden && (
            <DefaultButton
              onClick={handleCloseModal}
              label="Cancel"
              variant="secondary"
            />
          )}
        </div>
      </div>
      {!user && (
        <div className={styles['login']}>
          <p>
            Already have an account?{' '}
            <span
              onClick={() => {
                setRequestError('');
                push('/feed?auth=login');
              }}
            >
              Log in
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default FilterContent;
