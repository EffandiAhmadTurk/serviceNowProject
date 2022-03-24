export const PRICE_OPTIONS = [
  [100000, '$100k'],
  [200000, '$200k'],
  [300000, '$300k'],
  [400000, '$400k'],
  [500000, '$500k'],
  [600000, '$600k'],
  [700000, '$700k'],
  [800000, '$800k'],
  [900000, '$900k'],
  [1000000, '$1mil'],
  [1500000, '$1.5mil'],
  [2000000, '$2mil'],
  [2500000, '$2.5mil'],
  [3000000, '$3mil'],
];

const COUNT_OPTIONS = [
  [1, '1+'],
  [2, '2+'],
  [3, '3+'],
  [4, '4+'],
  [5, '5+'],
  [6, '6+'],
];
export const BED_OPTIONS = [[0, 'Any'], ...COUNT_OPTIONS];

export const BATH_OPTIONS = [[0, 'Any'], ...COUNT_OPTIONS];

export const TYPE_OPTIONS = [
  [0, 'Anything'],
  ['singleFamily', 'House'],
  ['townhouse', 'Townhouse'],
  ['condo', 'Condo'],
];

export const MIN_PRICE_OPTIONS = [[0, 'Any Min'], ...PRICE_OPTIONS];

export const MAX_PRICE_OPTIONS = [[0, 'Any Max'], ...PRICE_OPTIONS];

export const filterReducer = (state, action) => {
  switch (action.type) {
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
    case 'SET_LOCATIONS':
      return {
        ...state,
        locations: action.payload,
      };
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
    case 'SET_FILTERS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const initialFilters = {
  locations: [],
  beds: '',
  baths: '',
  priceFrom: '',
  priceTo: '',
  type: '',
};
