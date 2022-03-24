import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Slide, Dialog, makeStyles } from '@material-ui/core';
import { AuthContext } from '../../../contexts/AuthContext';
import { ModalContext } from '../../../contexts/ModalContext';
import SearchContext from '../../../contexts/SearchContext';
import styles from './FilterModal.module.scss';
import AuthContent from './AuthContent';
import axios from 'axios';
import FilterContent from './FilterContent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  dialog: {
    '& .MuiBackdrop-root': {
      backdropFilter: 'blur(3px)',
      backgroundColor: 'rgb(242, 246, 254, 0.8)',
    },
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      '@media (max-width: 1025px)': {
        backgroundColor: 'white',
        boxShadow: 'none',
      },
    },
    '& .MuiDialog-paperFullScreen': {
      '@media (max-width: 1025px)': {
        height: '100%',
        minHeight: 450,
      },
    },
  },
}));

const FilterModal = ({ handleGetListings }) => {
  const { filterModalState, setFilterModalState } = useContext(ModalContext);
  const { setUser, isAuthenticated } = useContext(AuthContext);
  const [isAuthShown, setIsAuthShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState('');
  const { query, push } = useRouter();
  const classes = useStyles();
  const { type, beds, baths, locations, priceTo, priceFrom, setLocations } =
    useContext(SearchContext);

  const filters = {
    type,
    beds,
    baths,
    locations,
    priceTo,
    priceFrom,
  };

  const saveFilters = async ({ filters, user, token }) => {
    window.scrollTo(0, 0);
    try {
      // Get user with new filters
      const { data: updatedUser } = await axios.put(
        `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/users/${user.id}`,
        { filters },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Check for special case query param
      // We are now reversing the search/auth flow for users coming from from a wordpress landing page
      if (parseInt(query.auth)) {
        setIsAuthShown(false);
      } else {
        // Ensure user is on feed page
        push('/feed');
        // handleGetListings(filters, true);
        setFilterModalState({ isOpen: false, isCloseHidden: false });
      }
      setUser(updatedUser);
    } catch (error) {
      setRequestError(error.message);
    }
  };

  useEffect(() => {
    if (query.auth && !isAuthenticated) {
      setIsAuthShown(true);
    } else {
      setIsAuthShown(false);
    }

    if (query.locationSlug) {
      setFilterModalState({ isOpen: true });
      const checklocation = location => {
        return location.slug === query.locationSlug;
      };
      // Make sure we're not adding the location if the
      // user already has it as part of their feed
      if (!locations.some(checklocation)) {
        setLocations([
          { slug: query.locationSlug, name: query.locationName },
          ...locations,
        ]);
      }
    }
  }, [query.auth, query.locationSlug]);

  const handleCloseModal = () => {
    setIsAuthShown(false);
    setFilterModalState({ isOpen: false });
  };

  return (
    <Dialog
      fullScreen
      open={filterModalState?.isOpen}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      className={classes.dialog}
    >
      <div className={styles['container']}>
        {isAuthShown ? (
          <AuthContent
            setIsLoading={setIsLoading}
            setFilterModalState={setFilterModalState}
            saveFilters={saveFilters}
            filters={filters}
          />
        ) : (
          <FilterContent
            setRequestError={setRequestError}
            requestError={requestError}
            isCloseHidden={filterModalState?.isCloseHidden}
            handleCloseModal={handleCloseModal}
            saveFilters={saveFilters}
          />
        )}
      </div>
    </Dialog>
  );
};

export default FilterModal;
