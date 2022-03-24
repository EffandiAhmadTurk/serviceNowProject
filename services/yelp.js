const axios = require('axios');

exports.getYelpBusiness = async yelpId => {
  try {
    const { data: yelpBusiness } = await axios.get(
      `https://api.yelp.com/v3/businesses/${yelpId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    return yelpBusiness;
  } catch (error) {
    console.log(`Error @ getYelpBusinessReviews: ${error}`);
  }
};

exports.getYelpReviews = async yelpId => {
  try {
    const {
      data: { reviews: yelpReviews },
    } = await axios.get(
      `https://api.yelp.com/v3/businesses/${yelpId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    return yelpReviews;
  } catch (error) {
    console.log(`Error @ getYelpBusinessReviews: ${error}`);
  }
};
