import { useEffect, useReducer, useContext } from 'react';
import SearchContext from './SearchContext';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthContext';
import _ from 'lodash';
import createSearchString from 'utils/createSearchString';

export const getQueryFromFilters = filters => {
  if (filters) {
    const query = { ...filters };
    query.locations = filters?.locations.map(({ slug }) => slug);
    return query;
  } else {
    return {};
  }
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRICE_FROM':
      return {
        ...state,
        priceFrom: action.payload,
      };
    case 'SET_PRICE_TO':
      return {
        ...state,
        priceTo: action.payload,
      };
    case 'SET_BEDS':
      return {
        ...state,
        beds: action.payload,
      };
    case 'SET_BATHS':
      return {
        ...state,
        baths: action.payload,
      };
    case 'SET_TYPE':
      return {
        ...state,
        type: action.payload,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload,
      };
    case 'SET_LOCATIONS':
      return {
        ...state,
        locations: action.payload,
      };
    case 'SET_FILTERS':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_MAP_LISTINGS':
      return {
        ...state,
        mapListings: action.payload,
      };
    case 'SET_IS_MAP_LOADING':
      return {
        ...state,
        isMapLoading: action.payload,
      };
    default:
      return state;
  }
};

const SearchContextProvider = props => {
  let initialState = {
    locations: [],
    beds: '',
    baths: '',
    priceFrom: '',
    priceTo: '',
    type: '',
    page: 1,
  };
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [searchState, dispatch] = useReducer(searchReducer, initialState);

  const setBeds = beds => {
    dispatch({ type: 'SET_BEDS', payload: beds });
  };

  const setBaths = baths => {
    dispatch({ type: 'SET_BATHS', payload: baths });
  };

  const setType = type => {
    dispatch({ type: 'SET_TYPE', payload: type });
  };

  const setLocations = locations => {
    dispatch({ type: 'SET_LOCATIONS', payload: locations });
  };

  const setPage = page => {
    dispatch({ type: 'SET_PAGE', payload: page });
  };

  const setPriceFrom = priceFrom => {
    dispatch({ type: 'SET_PRICE_FROM', payload: priceFrom });
  };

  const setPriceTo = priceTo => {
    dispatch({ type: 'SET_PRICE_TO', payload: priceTo });
  };

  const setFilters = filters => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  const searchQuery = {
    locations: searchState.locations,
    beds: searchState.beds,
    baths: searchState.baths,
    priceFrom: searchState.priceFrom,
    priceTo: searchState.priceTo,
    type: searchState.type,
  };

  const value = {
    ...searchState,
    searchString: createSearchString(searchQuery),
    setBeds,
    setBaths,
    setType,
    setLocations,
    setPage,
    setPriceFrom,
    setPriceTo,
    setFilters,
  };

  useEffect(() => {
    let isMounted = true;
    if (user && !router.query.locationSlug) {
      setFilters(user.filters);
    }
    return () => {
      isMounted = false;
    };
  }, [user]);

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};

const SearchContextConsumer = SearchContext.Consumer;

export { SearchContextProvider, SearchContextConsumer };
