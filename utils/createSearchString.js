const createSearchString = ({
  type,
  beds,
  baths,
  locations,
  priceTo,
  priceFrom,
}) => {
  return `Type: ${type || 'N/A'}| Beds: ${beds || 'N/A'}| ${
    baths || 'N/A'
  }| Locations: ${
    locations.map(({ name }) => name).join(', ') || 'N/A'
  }| Price From: ${priceFrom || 'N/A'} | Price To: ${priceTo || 'N/A'}`;
};

export default createSearchString;
