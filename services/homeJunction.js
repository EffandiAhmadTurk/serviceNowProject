const CronJob = require('cron').CronJob;
const axios = require('axios');

let hjToken = null;

const getHjToken = async () => {
  try {
    const {
      data: {
        result: { token },
      },
    } = await axios.get(
      `https://slipstream.homejunction.com/ws/api/authenticate?license=${process.env.HOMEJUNCTION_API_KEY}&version=v20191219`
    );
    hjToken = token;
  } catch (error) {
    console.log(error);
  }
};

const renewHjToken = new CronJob(
  '0 */23 * * *',
  () => {
    console.log('Fetching new HJ Token');
    getHjToken();
  },
  null,
  true,
  'America/Los_Angeles'
);

renewHjToken.start();

exports.getHomeJunctionListings = async queryParams => {
  if (hjToken === null) {
    await getHjToken();
  }

  const {
    pageSize,
    page,
    priceFrom,
    priceTo,
    beds,
    baths,
    type,
    areaId,
    areaName,
    areaType,
  } = queryParams;

  // Price Query
  // Set price from floor to prevent rental listings from showing
  const priceFloor = priceFrom || 10000;
  let listPriceQuery = `=>=${priceFloor}`;
  if (priceTo) listPriceQuery = `=${priceFloor}:${priceTo}`;

  // Page Query
  const pageNumberQuery = page ? `${page}` : '';

  // Beds & Baths Query
  const bedQuery = beds ? beds : '';
  const bathQuery = baths ? baths : '';

  // Type Query
  const isSingleFamily = type === 'singleFamily';
  const isTownhouse = type === 'townhouse';
  const isCondo = type === 'condo';
  const isLand = type === 'land';
  const isMultiFamily = type === 'multiFamily';

  const isResidential = isSingleFamily || isTownhouse || isCondo;

  let typeQuery = '';
  if (isResidential) typeQuery = 'residential';
  if (isLand) typeQuery = 'land';
  if (isMultiFamily) typeQuery = 'Multifamily';

  let propertyTypeQuery = '';
  if (isSingleFamily)
    propertyTypeQuery =
      'Single+Family+Residence|Horizontal+Property+Regime+-+Attached';
  if (isTownhouse) propertyTypeQuery = 'Townhouse';
  if (isCondo) propertyTypeQuery = 'Flat+Condo|High+Rise';

  // Location Query
  let locationQuery = '';
  if (areaType === 'neighborhood') {
    locationQuery = `polygon=$${areaId}`;
  }
  if (areaType === 'city') {
    locationQuery = `address.city=${areaName}`;
  }

  if (areaType === 'zipCode') {
    locationQuery = `address.zip=${areaName}`;
  }

  const url = `https://slipstream.homejunction.com/ws/listings/search?market=MTRMLS&status=Active&listingType=${typeQuery}&xf_propertysubtype=${propertyTypeQuery}&listprice${listPriceQuery}&beds=${bedQuery}&baths=${bathQuery}&${locationQuery}&pageNumber=${pageNumberQuery}&pageSize=${pageSize}&details=true&sortField=daysOnMarket`;

  try {
    const {
      data: { result },
    } = await axios(url, {
      headers: {
        'HJI-Slipstream-Token': hjToken,
      },
    });

    return result;
  } catch (error) {
    return error;
  }
};

exports.getHomeJunctionLocationData = async (locationName, locationType) => {
  if (hjToken === null) {
    await getHjToken();
  }

  let hjLocationType;
  if (locationType === 'neighborhood') hjLocationType = 'neighborhoods';
  if (locationType === 'city') hjLocationType = 'postal-cities';
  if (locationType === 'zipCode') hjLocationType = 'zipcodes';

  const url = `https://slipstream.homejunction.com/ws/areas/${hjLocationType}/search?name=${locationName}&state=TN&details=true`;

  try {
    const {
      data: { result },
    } = await axios(url, {
      headers: {
        'HJI-Slipstream-Token': hjToken,
      },
    });

    return result?.[hjLocationType][0];
  } catch (error) {
    return error;
  }
};

exports.getHomeJunctionLocationTrendData = async (trend, locationId) => {
  if (hjToken === null) {
    await getHjToken();
  }

  try {
    const {
      data: {
        result: { trends },
      },
    } = await axios(
      `https://slipstream.homejunction.com/ws/areas/trends/${trend}?id=${locationId}&interval=year`,
      {
        headers: {
          'HJI-Slipstream-Token': hjToken,
        },
      }
    );

    return trends;
  } catch (error) {
    console.log('Trend Error:', error);
    return error;
  }
};
