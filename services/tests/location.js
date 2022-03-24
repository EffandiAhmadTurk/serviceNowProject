const axios = require('axios');
const dbConnect = require('../../utils/dbConnect');
const Location = require('../../models/Location');
let hjToken = 'HJI-68F09F34-149A-4DBB-9C88-EC8BAB794912';

const getHomeJunctionLocationData = async (locationName, locationType) => {
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

const getHomeJunctionLocationTrendData = async (trend, locationId) => {
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

    return null;
  } catch (error) {
    // console.log('Trend Error:', error);
    return error;
  }
};

const testData = async () => {
  dbConnect();
  const locations = await Location.find({}).lean().limit(300);

  const dataPromises = locations.map(async loc => {
    const dataPromise = getHomeJunctionLocationData(loc.name, loc.type);
    return dataPromise;
  });

  const locationData = await Promise.all(dataPromises);

  const trendPromises = locationData.map(async data => {
    const id = data?.id ? data?.id : null;

    const trendPromise = getHomeJunctionLocationTrendData(
      'prices-and-sales',
      id
    );

    return trendPromise;
  });

  const trendData = await Promise.all(trendPromises);

  return trendData;
};
