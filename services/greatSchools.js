const axios = require('axios');

exports.getSchools = async ({ lat, lng }) => {
  try {
    const {
      data: { schools },
    } = await axios.get(
      `https://gs-api.greatschools.org/nearby-schools?lat=${lat}&lon=${lng}&state=TN&limit=15`,
      {
        headers: {
          'x-api-key': process.env.GREAT_SCHOOLS_API_KEY,
        },
      }
    );

    return schools;
  } catch (error) {
    console.log('Error @ getSchools: ', error.message);
    throw new Error(error.message);
  }
};
