import _ from 'lodash';
import axios from 'axios';
import isBrowser from './isBrowser';
import { LOCATIONS } from './constants';

const BASE_URL = isBrowser() && window.location.origin;

const fetchLocationSuggestions = async (userInput, cb) => {
  try {
    const { data: locations } = await axios.get(
      `${BASE_URL}/api/locations/suggestions`,
      {
        params: {
          userInput,
        },
      }
    );
    cb(locations);
  } catch (error) {
    return error;
  }
};

const debouncedFetch = _.debounce(fetchLocationSuggestions, 500);

const fetchLocalLocationSuggestions = async (userInput, cb) => {
  const matches = [];
  LOCATIONS.forEach(location => {
    if (location.name.toLowerCase().includes(userInput.toLowerCase())) {
      matches.push(location);
    }
  });
  cb(matches);
};

export default fetchLocalLocationSuggestions;
